import React, { Component } from "react";

export default class Counter extends Component {
	state = {
		value: this.props.counter.value,
	};

	render() {
		return (
			<div className="row">
				<div className="col-1">
					<span className={this.getBadgeClasses()}>{this.formatvalue()}</span>
				</div>
				<div className="col">
					<button
						onClick={() => this.props.onIncrement(this.props.counter)}
						type="button"
						className="btn btn-success btn-sm"
					>
						+
					</button>
					<button
						onClick={() => this.props.onDecrement(this.props.counter)}
						type="button"
						className="btn btn-info btn-sm m-2"
						disabled={this.props.counter.value <= 0 ? "disable" : ""}
					>
						-
					</button>
					<button
						type="button"
						onClick={() => this.props.onDelete(this.props.counter.id)}
						className="btn btn-danger btn-sm "
					>
						Delete
					</button>
				</div>
			</div>
		);
	}

	getBadgeClasses() {
		let rootClasses = "badge m-2 badge-";
		rootClasses += this.props.counter.value === 0 ? "warning" : "primary";
		return rootClasses;
	}

	formatvalue() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}
}
