import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import nProgress from "nprogress";

Router.onRouteChangeStart = (url) => {
	console.log(url);
	nProgress.start();
};

Router.onRouteChangeComplete = () => nProgress.done();
Router.onChangeError = () => nProgress.done();

export default ({ children, title }) => (
	<div class="root">
		<Head>
			<title>Nextfolio - {typeof title === "string" ? title : ""}</title>
		</Head>
		<header>
			<Link href="/">
				<p>Home</p>
			</Link>
			<Link href="/about">
				<p>About</p>
			</Link>
			<Link href="/hire_me">
				<p>Hire Me</p>
			</Link>
		</header>

		<h1>{title}</h1>
		{children}

		<footer>&copy; Geno Purple {new Date().getFullYear()}</footer>
	</div>
);
