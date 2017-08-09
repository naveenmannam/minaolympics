module.exports = {
	showHome: (req, res) => {
		res.render('pages/home');
	},
	showAbout: (req, res) => {
		res.render('pages/about');
	}
}

