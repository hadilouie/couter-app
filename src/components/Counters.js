import React, { Component } from "react";
import Counter from "./Counter";

export default class Counters extends Component {
	render() {
		const {
			onReset,
			onDelete,
			onIncrement,
			onDecrement,
			counters,
		} = this.props;
		return (
			<React.Fragment>
				<button
					onReset={onReset}
					type="button"
					className="btn btn-primary btn-sm m-2"
				>
					Reset
				</button>
				{this.props.counters.map((counter) => (
					<Counter
						key={counter.id}
						onDelete={onDelete}
						onIncrement={onIncrement}
						onDecrement={onDecrement}
						counter={counter}
					/>
				))}
			</React.Fragment>
		);
	}
}
