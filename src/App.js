import React, { Component } from "react";
import Counters from "./components/Counters";
import { NavBar } from "./components/NavBar";

export default class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 5 },
			{ id: 3, value: 2 },
			{ id: 4, value: 0 },
		],
	};

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter((p) => p.id !== counterId);
		this.setState({ counters });
	};

	handleReset = () => {
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});

		//console.log(counters);
		this.setState({ counters });
	};

	handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
	};

	handleDecrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value--;
		this.setState({ counters });
	};
	render() {
		return (
			<React.Fragment>
				<NavBar
					totalNumber={this.state.counters.filter((p) => p.value > 0).length}
				/>
				<div className="container">
					<Counters
						onReset={this.handleReset}
						onDelete={this.handleDelete}
						onIncrement={this.handleIncrement}
						onDecrement={this.handleDecrement}
						counters={this.state.counters}
					/>
				</div>
			</React.Fragment>
		);
	}
}
