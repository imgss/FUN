

<template>
<article>
<header>
	<h1>郭帅 <span>imgss</span></h1>
	<ul>
		<li><a href="https://imgss.github.io">个人博客</a></li>
		<li><a href="http://cnblogs/imgss">博客园</a></li>
		<li><a href="https://github.com/imgss">Github</a></li>
	</ul>
</header>

<section id="summary">
	<h1>Summary</h1>
	<p>我是一个半路出家的前端。之前从事高(ku)大(bi)上的造船业，有着成为海贼王的梦想。工作中渐渐发现编程才是我想做的事。于是去年6月份(2016)开始从《dive into html》和 hello world 开始看起，大概有半年时间，处于一种痛苦，焦虑，快乐交织在一起的状态。现在在一家创业公司做前端。
	</p>
</section>

<section id="work-experience">
	<h1>Work experience</h1>
	<ol class="timeline">
		<li>
			<p class="date">2015.8-2017.3</p>
			<p>在某船厂担任助理工程师</a></p>
			<p class="note">从事生产计划的编排和跟踪，物料管理相关工作,由于现场跑的比较多，get到了吃苦耐劳的精神</p>
		</li>
		<li>
			<p class="date">2017.3-2017.10</p>
			<p>前端@薪趣科技</a></p>
			<p class="note">为一个ERP系统开放前端界面及后台接口，期间完成了一个编辑表格的jQuery插件<a href='https://github.com/imgss/table'>jQuery-table</a></p>
		</li>
	</ol>
</section>

<section id="technical-skills">
	<h1>Technical skills</h1>
	<ul>
		<li><b>CSS,CSS3</b><p>盒模型,常用布局(flex,float,table)，transition，animation</p></li>
		<li><b>JavaScript (ES6), DOM APIs,HTML5相关API</b>
			<p>History<b class='space'>·</b>Formdata<b class='space'>·</b>localStorage<b class='space'>·</b>FileReader<b class='space'>·</b>sessionStorage...</p>
			</li>
		<li><b>jQuery APIs</b>
			<p>开源一个jQuery插件jQuery-table</p></li>
		<li><b>Vue</b> <p>用Vue全家桶完成个人博客FUN</p></li>
		<li><b>Node.js</b>
			<p>掌握node常用原生模块的使用</p>
			<p>开源小项目greenDot,技术栈Express，mongoDB，Pug</p>
			<p>掌握npm，git</p>
		</li>
	</ul>
	<p>ps:熟练使用photoshop</p>
</section>

<section id="interests">
	<h1>Professional interests</h1>
	<p>爱编程<b class='space'>·</b>
	爱摄影<b class='space'>·</b> 爱电影<b class='space'>·</b>
	爱独处</p>
</section>
<footer>
	<p>模板来自<a href='http://lea.verou.me/'>http://lea.verou.me/</a>，<b>under building</b></p>
</footer>
</article>
</template>

<script>
export default {
  name: 'resume',
  data: {
  }
}
</script>

<style scoped>
/**
 * "Variables"
 */
h1, h2, .date {
	font: small-caps normal 100% Constantia, 'Palatino Linotype', Palatino, Georgia, serif;
}
.space {
	margin: 0 2%
}
h1,
header > h1 > span,
header > ul > li:before {
	color: #9BBB59;
}

/**
 * Style
 */

* { margin:0; }

#app {
	background: #9BA2B0;
	font-size: 14px;
}

article {
	width: 65em;
	padding: 7em 8%;
	box-sizing: border-box;
	margin: 1em auto;
	background: white;
	box-shadow: 1px 1px 5px 2px rgba(0,0,0,.3);
	font: 100%/1.6 'Segoe UI', Optima, 'Hiragino Kaku Gothic Pro', 'Apple Gothic', Tahoma, 'Helvetica Neue', sans-serif;

	-moz-hyphens: auto;
	-ms-hyphens: auto;
	-o-hyphens: auto;
	-webkit-hyphens: auto;
	hyphens: auto;

	-moz-transition: .5s font-size;
	-ms-transition: .5s font-size;
	-o-transition: .5s font-size;
	-webkit-transition: .5s font-size;
	transition: .5s font-size;
}

h1, h2 {
	page-break-after: avoid;
	margin-bottom: .4em;
}

h1 {
	margin-top: 1.2em;
	font-size: 200%;
}

h2 {
	margin-top: 1em;
	font-size: 150%;
	color: hsl(20, 15%, 50%);
	font-weight: bold;
}

a {
	color:#4F6128;
	text-decoration-skip: ink;
}

abbr[title] {
	border-bottom: 1px dotted #4F6128;
	cursor: help;
}

p {
	margin: .6em 0;
}

h1 + p,
h2 + p {
	margin-top: 0;
}

ul {
	padding: 0;
	list-style: square;
}

	ul ul {
		padding-left: 3em;
	}

header {
	text-align: center;
}

	header > h1 {
		color: #7F7F7F;
		color: hsl(20, 15%, 50%);
		border-bottom: 1px solid #9BBB59;
		margin: 0 0 .15em;
		text-indent: 1.2em;
		font-size: 450%;
		line-height: 1.05;
		font-variant: normal;
	}

		header > h1 > span {
			display: inline-block;
			margin-left: -2.7em;
			vertical-align: super;
			font-size: 50%;
		}

	header > ul {
		display: block;
		margin-bottom: .5em;
	}

		header > ul > li {
			display: inline;
			list-style: none;
		}

		header > ul > li:before {
			content: '● ';
		}

		header > ul > li:first-child:before {
			content: none;
		}

	address {
		font-style: normal;
	}

section > h1 {
	box-shadow: calc(-8vw + .6em) 0 white, calc(-8vw - .1em) 0 0 -.1em;
}

li {
	page-break-inside: avoid;
}

ol.timeline {
	padding: 0;
	border: 0 solid #ddd;
	border-width: 4px 0;
}

	ol.timeline > li {
		list-style: none;
		padding: .4em 0;
		border: 1px solid white; /* Chrome printing bug */
		border-top-color: #ccc;
	}

	ol.timeline > li:first-child {
		border-top: 0;
	}

		ol.timeline > li > p {
			margin: 0;
		}

		ol.timeline > li > .date {
			float: left;
			margin-left: .1em;
			max-width: 8rem;
			color: gray;
			font-size: 110%;
		}

		ol.timeline > li > .date ~ p {
			margin-left: 9rem;
		}

.note {
	margin-top: .4em;
	font-size: 75%;
}

	.note a:not(:hover):not(:active) {
		color: inherit;
	}

footer {
	margin-top: 3em;
	font-style: italic;
}

.amp {
	font-style: italic;
}

#projects .timeline li p:nth-of-type(2) a:first-of-type {
	font-weight: bold;
}

@media (max-width:950px) {
	html { font-size: 12px; }
}

@media (max-width:700px) {
	html { font-size: 11px; }
}

@media (max-width:600px) {
	body {
		width: auto;
		margin: 1em;
	}
}

@media print {
	@page {
		size: letter;
		margin: 2cm 2.5cm;
	}

	html {
		background: none;
		font-size: 12pt;
	}

	body {
		box-shadow: none;
		padding: 0;
	}

	section > h1 {
		box-shadow: calc(-8vw + 2em) 0 white, calc(-8vw - .1em) 0 0 -.1em;
	}

	footer {
		display: none;
	}
}
</style>
