module.exports = {
	showEvents: (req, res) => {
		// Create dummy data
		const events = [
			{name: 'Basketball', slug: 'basketball', description: 'Throwing into a basket'},
			{name: 'Swimming', slug: 'swimming', description: 'Michael Phelps is the fast fish.'},
			{name: 'WeightLifting', slug: 'weightlifting', description: 'Lifting heavy things up'}
		]
		// Return a view
		res.render('pages/events', {
			events: events
		});
	},
	showSingle: (req, res) => {
		const eventsingle = {name: 'Basketball', slug: 'basketball', description: 'Throwing into a basket'}
		res.render('pages/single', {
			eventsingle: eventsingle
		});
	}
}