import React from 'react'
import { connect } from 'react-redux'

// import { CategoryDropdown, UpcomingTile } from '~/components/components'
import { Navigation, UpcomingClass } from '~/actions/actions'

// import './upcoming.sass'

const mapStateToProps = (state, ownProps) => {
	return {
		user: state.authentication.user,
		upcomingClass: state.upcomingClass.list.find(u => u._id === ownProps.params.upcomingClassId)
	}
}

@connect(mapStateToProps)
export default class UpcomingDetail extends React.Component {

	deleteClick = () => {
		UpcomingClass.delete({ _id: this.props.upcomingClass._id})
		Navigation.go('/upcoming')
	}

	isCurrentUserATeacher = () => {
		var teachers = this.props.upcomingClass.teachers
		var user = this.props.user
		return (user && teachers.findIndex(t => t._id === user._id) !== -1)
	}

	render() {

		const { _id, event, category, teachers } = this.props.upcomingClass

		// if (!selectedCategory || selectedCategory === 'all') {
		// 	var shownClasses = upcomingClasses //probably need to sort by popularity in the future
		// } else {
		// 	var shownClasses = upcomingClasses.filter(u => u.category._id === selectedCategory)
		// }

		// if (shownClasses.length) {
			// var tiles = shownClasses.map(u => <div className="tile-item" key={u._id}><UpcomingTile {...u} /></div>)
		// } else {
			// var tiles = <div>There are no upcoming classes.</div>
		// }

		// var additionalCategories = [
		// 	{ _id: 'all', name: 'All Categories'}
		// ]

		if (this.isCurrentUserATeacher()) {
			var deleteButton = <button onClick={this.deleteClick}>Delete</button>
		} else {
			var deleteButton = undefined
		}

		var teachersNode = teachers.map(t => <div key={t._id}>{t.meetup.member.name}</div>)

		return (
			<div id="upcomingdetail">
				<ul>
					<li>id: {_id}</li>
					<li>name: {event.name}</li>
					<li>category: {category.name}</li>
					<li>
						teachers:
						{teachersNode}
					</li>
					<li>the chumps:
					</li>
				</ul>
				{deleteButton}
				<a href="#" onClick={() => Navigation.go('/upcoming')}>Back to List</a> 
			</div>
		)
	}
}

