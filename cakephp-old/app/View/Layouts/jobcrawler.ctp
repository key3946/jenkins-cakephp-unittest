<!DOCTYPE html>
<html>
<head>
	<?php echo $this->Html->charset(); ?>
	<title>
		<?php echo $title_for_layout; ?>
	</title>
	<?php
	echo $this->Html->meta('icon');
	echo $this->Html->css('normalize');
	echo $this->Html->css('jobcrawler');
	echo $scripts_for_layout;
	echo $this->fetch('head')
	?>
</head>
<body>
<header>
	<div class="row">
		<div class="row__component">
			<div class="logo">
				<a href="/morita_crawler/cakephp/"><img src="/morita_crawler/cakephp/app/webroot/img/logo.png"></a>
			</div>
		</div>
	</div>
</header>
<section id="app">
	<?php echo $this->Session->flash(); ?>
	<?php echo $content_for_layout; ?>
</section>
<footer>
	<div class="row">
		<div class="col-md-12">
			<div class="copyright">
				©2018 BMJ inc.
			</div>
		</div>
	</div>
</footer>
</body>
</html>
