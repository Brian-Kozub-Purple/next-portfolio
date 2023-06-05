import Layout from "../components/Layout";
import { useRouter } from "next/router";

export default () => {
	const { query } = useRouter();
	return (
		<Layout title={query.title}>
			<p>{query.title} Blog post is here!</p>
		</Layout>
	);
};
