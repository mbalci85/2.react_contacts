import contacts from '../contacts';
import React from 'react';
import Card from './Card';

function App() {
	console.log(contacts);
	return (
		<div>
			<h1 className="heading">My Contacts</h1>
			{contacts.map((contact) => (
				<Card
					key={contact.id}
					name={contact.name}
					email={contact.email}
					img={contact.imgURL}
					phone={contact.phone}
				/>
			))}
		</div>
	);
}

export default App;
