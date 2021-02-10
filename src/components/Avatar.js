import React from 'react';

function Avatar(props) {
	console.log(props);
	return (
		<div>
			<img src={props.img} className="circle-img" alt="pic" />
		</div>
	);
}

export default Avatar;
