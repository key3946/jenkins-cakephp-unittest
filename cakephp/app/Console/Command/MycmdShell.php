<?php

/**
 * Created by IntelliJ IDEA.
 * User: morita
 * Date: 2018/06/28
 * Time: 14:38
 */


class MycmdShell extends Shell
{
	function main()
	{
		$test_arr = array(1, 2);
		print("OKOK!");
	}

	function main2()
	{
		$this->error("エラーじゃないよ");
	}
}

