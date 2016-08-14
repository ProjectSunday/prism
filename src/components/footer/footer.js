import React from 'react'
import { connect } from 'react-redux'

// import { CategoryDropdown, UpcomingTile } from '~/components/components'

import './footer.sass'

// const mapStateToProps = (state, ownProps) => {
// 	return {
// 		upcomingClasses: state.upcomingClass.list,
// 		selectedCategory: state.category.selectedCategory
// 	}
// }

// @connect(mapStateToProps)
export default class Footer extends React.Component {
	render() {
		// const { upcomingClasses, selectedCategory } = this.props

		// if (!selectedCategory || selectedCategory === 'all') {
		// 	var shownClasses = upcomingClasses //probably need to sort by popularity in the future
		// } else {
		// 	var shownClasses = upcomingClasses.filter(u => u.category._id === selectedCategory)
		// }

		// if (shownClasses.length) {
		// 	var tiles = shownClasses.map(u => <div className="tile-item" key={u._id}><UpcomingTile {...u} /></div>)
		// } else {
		// 	var tiles = <div>There are no upcoming classes.</div>
		// }

		// var additionalCategories = [
		// 	{ _id: 'all', name: 'All Categories'}
		// ]


		return (
			<div id="footer">
				<hr />
				<div className="footer-links">
					<a href="#">About</a>
					<a href="#">Help/FAQ</a>
					<a href="#">Feedback</a>
					<a href="#">Privacy</a>
					<a href="#">Terms</a>
					<a href="#">Contact</a>
				</div>
				<a href="#" className="footer-meetup">MeetUp.com/LocalLearners</a>
				<div className="footer-copyright">Copyright 2014 Local Learners. All rights reserved.</div>
			</div>
		)
	}
}

