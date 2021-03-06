import React from 'react';


const Loader = (props) => {
	return (
		<div className="cube-wrapper">
			<div className="cube-folding">
				<span className="leaf1"/>
				<span className="leaf2"/>
				<span className="leaf3"/>
				<span className="leaf4"/>
			</div>
			<span className="loading" data-name="Loading">{props.text}</span>
		</div>
	)
};

export default Loader;
