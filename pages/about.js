import { Component } from "react";
import Layout from "../components/Layout";

export default class About extends Component {
	static async getInitialProps() {
		const res = await fetch("https://api.github.com/users/ticet11");
		const data = await res.json();
		return { user: data };
	}

	render() {
		const { user } = this.props;
		return (
			<Layout title="About">
				<p>{user.bio}</p>
				<img src={user.avatar_url} alt="Picture of Geno"></img>

				{user.name}
			</Layout>
		);
	}
}
