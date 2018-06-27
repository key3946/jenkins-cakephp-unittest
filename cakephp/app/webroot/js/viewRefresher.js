window.onload = async () => {
	if (document.cookie) {
		let cookie_str;
		let r = document.cookie.split(';');
		await r.forEach((value) => {
			//cookie名と値に分ける
			let content = value.split('=');
			if (content[0] === "crawl_id") {
				cookie_str = content[1]
			}
		});

		// リローダー
		let reload_timer = setInterval(async () => {
			if (await reload()) {
				clearInterval(reload_timer);
			}
		}, 5000);

		// 削除ボタン
		document.getElementById("clear").onclick = () => {
			clear();
			location.reload()
		};

		// テーブル描画

		if (cookie_str) {
			let canvas = document.getElementById("progress");
			let loading = document.createElement("div");
			loading.innerHTML = '<div style="display:flex;"><div style="margin: 0 20px 20px 0;">読み込み中...&nbsp;</div><div class="loader"></div></div>';
			canvas.appendChild(loading);
			let items = await generateTables(cookie_str.split("%3B"));
			loading.parentNode.removeChild(loading);
			items.forEach(value => {
				canvas.appendChild(value)
			})

		} else {
			renderNoHistory()
		}
	} else {
		renderNoHistory()
	}
};

async function generateTables(cookies) {
	let items = new Array(cookies.length);
	for (let i = 0; i < cookies.length; i++) {
		let crawl_id = cookies[i].split("%3F")[0];
		let crawl_id_type = cookies[i].split("%3F")[1];
		if (cookies[i] !== "") {
			items[i] = await parseTable(crawl_id, crawl_id_type);
		}
	}
	//新しい順
	items = items.reverse();
	return items
}

function renderNoHistory() {
	let canvas = document.getElementById("progress");
	let item = document.createElement("div");
	item.setAttribute("id", "item");
	item.setAttribute("class", "progress__item--none");
	item.innerHTML = "<div>履歴はありません</div>";
	canvas.appendChild(item);
}

async function getJson(crawl_id, crawl_id_type) {
	let xhr = new XMLHttpRequest();
	let json_str;
	let request;
	if (crawl_id_type === "1") {
		request = '/morita_crawler/cakephp/view/image/' + crawl_id;
	} else if (crawl_id_type === "2") {
		request = '/morita_crawler/cakephp/view/job/' + crawl_id;
	}
	let json = await Promise.resolve().then((json) => {
		return new Promise(resolve => {
			xhr.open('GET', request, true);
			xhr.send(null);
			xhr.onreadystatechange = () => {
				if (xhr.readyState === 4 && xhr.status === 200) {
					json_str = xhr.responseText.toString();
					json = JSON.parse(json_str);
					resolve(json);
				}
			};
		})
	});
	return json
}

async function parseTable(crawl_id, crawl_id_type) {
	let item = document.createElement("div");
	let json = await getJson(crawl_id, crawl_id_type);
	let stat_div;
	let queue_type;
	let link_data;

	if (crawl_id_type === "1") {
		queue_type = "imagecrawler";
	} else if (crawl_id_type === "2") {
		queue_type = "jobcrawler";
	}

	if (json.status === "in progress") {
		item.setAttribute("class", "progress__item status-in");
		stat_div = '<div><div style="display: flex;">ステータス :&nbsp;<span id="status-in">処理中</span>&nbsp;<div class="spinner"></div></div><div>追加 : ' + json.created + '</div></div></div>';
		link_data = '<a href="/morita_crawler/cakephp/' + queue_type + '/progress/' + crawl_id + '" class="button--small button">詳細</a>';
	} else if (json.status === "success") {
		item.setAttribute("class", "progress__item");
		stat_div = '<div><div>ステータス : <span id="status-success">完了</span></div><div>追加 : ' + json.created + '</div><div>完了 : ' + json.crawled + '</div></div></div>';
		link_data = '<a href="/morita_crawler/cakephp/' + queue_type + '/result/' + crawl_id + '" class="button--small button">詳細</a>'
	} else if (json.status === "rejected") {
		item.setAttribute("class", "progress__item");
		stat_div = '<div><div>ステータス : <span id="status-failed">キャンセル済み</span></div></div></div>';
		link_data = '<a href="/morita_crawler/cakephp/' + queue_type + '/progress/' + crawl_id + '" class="button--small button">詳細</a>';
	} else {
		stat_div = '<div><div>ステータス : <span id="status-failed">エラー</span></div></div>';
		link_data = '<a href="/morita_crawler/cakephp/' + queue_type + '/result/' + crawl_id + '" class="button--small button">詳細</a>';
	}

	let table = '' +
		'<div id="progress__item__cell">' +
		'<input name="check_item" type="checkbox" class="big_check" value="' + crawl_id + '" about="' + crawl_id_type + '">' +
		'</div>' +
		'<div>' + stat_div +
		'<div id="progress__item__cell">' +
		'' + link_data +
		'</div>';
	item.innerHTML = table;
	return item;
}

function clear() {
	let checkbox = document.getElementsByClassName("big_check");
	for (let i = 0; i < checkbox.length; i++) {
		if (checkbox[i].checked) {
			let crawl_id = checkbox[i].getAttribute("value");
			deleteCookie(crawl_id)
		}
	}
}

function deleteCookie(crawl_id) {
	let cookie_str;
	let cookies = document.cookie.split(';');
	let one_day = (60 * 60 * 24);
	cookies.forEach(function (value) {
		//cookie名と値に分ける
		let content = value.split('=');
		if (content[0] === "crawl_id") {
			cookie_str = content[1];
			let xhr = new XMLHttpRequest();
			if (cookie_str.indexOf(crawl_id + "%3F1%3B") >= 0) {
				cookie_str = cookie_str.replace(crawl_id + "%3F1%3B", "");
				xhr.open('GET', '/morita_crawler/cakephp/view/cancel/' + crawl_id + '/1', true);
			} else if (cookie_str.indexOf(crawl_id + "%3F2%3B") >= 0) {
				cookie_str = cookie_str.replace(crawl_id + "%3F2%3B", "");
				xhr.open('GET', '/morita_crawler/cakephp/view/cancel/' + crawl_id + '/2', true);
			}
			xhr.send(null);
			document.cookie = 'crawl_id=' + cookie_str + ' ;path=/ ;max-age=' + one_day;
		}
	});
}


async function reload() {
	// リロード判定
	let in_progress_items = document.getElementsByClassName("status-in");
	if (in_progress_items.length) {
		for (let i = 0; i < in_progress_items.length; i++) {
			let v = in_progress_items[i];
			let crawl_id = v.getElementsByTagName("input")[0].getAttribute("value");
			let crawl_id_type = v.getElementsByTagName("input")[0].getAttribute("about");
			let canvas = document.getElementById("progress");
			let table = await parseTable(crawl_id, crawl_id_type);
			canvas.insertBefore(table, v);
			v.parentNode.removeChild(v);
		}
		return false
	} else {
		return true
	}
}
