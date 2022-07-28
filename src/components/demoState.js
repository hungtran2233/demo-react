import React, { Component } from "react";

export class DemoState extends Component {
	state = { isLogin: false };
	renderMessage() {
		if (this.state.isLogin) {
			return <h1>Xin chào ban Hieu</h1>;
		}
		return <h1>Vui long dang nhap </h1>;
	}

	signin = () => {
		this.setState({
			isLogin: true,
		});
	};

	signout = () => {
		this.setState({
			isLogin: false,
		});
	};

	/////////////////////////
	render() {
		return (
			<div>
				{this.renderMessage()}
				{this.state.isLogin ? (
					<button onClick={this.signout}>Đăng xuất</button>
				) : (
					<button onClick={this.signin}>Đăng nhập</button>
				)}
			</div>
		);
	}
}

export default DemoState;
