import Layout from "../components/Layout";

export default ({ statusCode }) => (
	<Layout title="Error!">
		{statusCode ? (
			`Error retrieving data. Status Code: ${statusCode}`
		) : (
			<p>This is an error page!</p>
		)}
	</Layout>
);
