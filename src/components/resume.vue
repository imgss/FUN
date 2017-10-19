

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
	<p>我是一个前端,此模板来自http://lea.verou.me/，<b>under building</b>
	</p>
</section>

<section id="work-experience">
	<h1>Work experience</h1>

	<h2>Industry</h2>
	<ol class="timeline">
		<li>
			<p class="date">2012–2013</p>
			<p>Developer Relations  • <a href="http://w3.org">W3C/MIT</a></p>
			<p class="note">Educating web professionals about open web standards and facilitating community input for W3C specifications under development.</p>
		</li>
		<li>
			<p class="date">2011–2012<br>2013-2014</p>
			<p>Speaker, author • <a href="http://lea.verou.me">lea.verou.me</a></p>
			<p class="note">Speaking, writing, consulting, corporate training & workshops on open web standards.</p>
		</li>
		<li>
			<p class="date">2008–2011</p>
			<p>Co-founder, lead web-developer &amp; designer • <a href="http://fresset.gr">Fresset Ltd</a></p>
			<p class="note">Created the successful Greek community <a href="http://e-steki.gr">e-steki.gr</a>, which regularly received over 500,000 visits and 2,500,000 pageviews per month.</p>
		</li>
	</ol>

	<h2>Academic</h2>
	<ol class="timeline">
		<li>
			<p class="date">2014-Present</p>
			<p>Research Assistant • <a href="http://mit.edu">Massachusetts Institute of Technology (MIT)</a></p>
		</li>
		<li>
			<p class="date">2010–2012</p>
			<p>Teaching Assistant • <a href="http://aueb.gr">Athens University of Economics and Business</a></p>
			<p class="note">Co-designed every aspect of the “Web Technologies and Programming” 4th year undergraduate course, including syllabus and coursework, taught the labs, guest lectured the CSS parts. [<a href="http://lea.verou.me/2010/07/organizing-a-university-course-on-modern-web-development/">Details</a>]</p>
		</li>
	</ol>
</section>


<footer>
	<p>References are available upon request.</p>
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

h1,
header > h1 > span,
header > ul > li:before {
	color: #9BBB59;
}

/**
 * Style
 */

* { margin:0; }

html {
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
