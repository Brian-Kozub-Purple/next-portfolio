import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ title }) => {
	return (
		<li>
			<Link as={`blog/post/${title}`} href={`/post?title=${title}`}>
				{title} Post
			</Link>
		</li>
	);
};

export default () => {
	return (
		<Layout title="Blog">
			<ul>
				<PostLink title="React" />
				<PostLink title="Python" />
				<PostLink title=".NET" />
			</ul>
		</Layout>
	);
};
