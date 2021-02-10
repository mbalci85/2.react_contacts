import React from 'react';

function Details(props) {
	console.log(props);
	return (
		<div>
			<p className="info">{props.phone}</p>
			<p className="info">{props.email}</p>
		</div>
	);
}

export default Details;
