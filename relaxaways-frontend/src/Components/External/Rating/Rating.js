import React, {Component} from "react";
import StarOutlined from './StarOutlined';
import StarFullFilled from './StarFullFilled';

class Rating extends Component {
    static defaultProps = {
        defaultValue: 0,
        max: 5
    };

	constructor(props) {
		super(props);

		this.state = {
			rating: Rating.defaultProps.defaultValue,
			max: Rating.defaultProps.max,
			indicator: []
		};
	}

	componentDidMount() {
		this.setState({
			indicator: [...Array(this.props.max).fill(false)]
		});
	}

	onSetTempRate(rating) {
		this.setState({
			indicator: this.setIndicator(rating)
		});
	};

	onSetRating(rating) {
		this.setState({
			rating: rating
		});
	}

	setIndicator(rating) {
		return [...Array(rating + 1).fill(true), ...Array(this.state.max - rating - 1).fill(false)]
	};

	render() {
		const fillStar = "#BA265D";

		return (
			<div className="rating">
				{this.state.indicator.map((item, idx) => {
					return (
						<div key={idx} className={"icon icon-" + (item ? "star" : "star-outlined")}
						     onMouseOver={this.onSetTempRate.bind(this, idx)}
							 onClick={this.onSetRating.bind(this, idx)}>
							 {item ? <StarFullFilled fill={fillStar}/> : <StarOutlined fill={fillStar}/>}
						</div>
					);
				})}
			</div>
		);
	}
}

export default Rating;
