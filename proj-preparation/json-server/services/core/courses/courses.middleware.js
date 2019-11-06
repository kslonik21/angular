const express = require('express');
const router = express.Router();
const url = require('url');

module.exports = server => {
	router.get('/courses', (req, res) => {
		const url_parts = url.parse(req.originalUrl, true);
		const query = url_parts.query;
		const from = +query.start || 0;
		let to = from + +query.count;
		let courses = server.db.getState().courses;
		if (query.textFragment) {
			courses = courses.filter(course => course.title.concat(course.description).toUpperCase().indexOf(query.textFragment.toUpperCase()) >= 0);
		}
		if (courses.length < to || !to) {
			to = courses.length;
		}
		courses = courses.slice(from, to);
		res.json(courses);
	});
	return router;
};
