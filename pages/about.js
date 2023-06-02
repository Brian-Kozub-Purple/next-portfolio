import { Component } from "react";
import Error from "./_error";
import Layout from "../components/Layout";

export default class About extends Component {
	static async getInitialProps() {
		const res = await fetch("https://api.github.com/users/ticet11");
		const isSuccessful = res.status <= 200;
		const data = await res.json();
		return { user: data, isSuccessful, statusCode: res.status };
	}

	render() {
		const { user, isSuccessful, statusCode } = this.props;
		if (isSuccessful) {
			return (
				<Layout title="About">
					<p>{user.bio}</p>
					<img src={user.avatar_url} alt="Picture of Geno"></img>

					{user.name}
				</Layout>
			);
		} else {
			return <Error statusCode={statusCode} />;
		}
	}
}
