import Link from "next/link";

export default ({ children, title }) => (
	<div>
		<header>
			<Link href="/">Home</Link>
			<Link href="/about">About</Link>
			<Link href="/hire_me">Hire Me</Link>
		</header>

		<h1>{title}</h1>
		{children}

		<footer>footer</footer>
	</div>
);
