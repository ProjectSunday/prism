import React from 'react'
import { connect } from 'react-redux'

import { CategoryDropdown, UpcomingTile } from '~/components/components'

import './upcoming.sass'

const mapStateToProps = (state, ownProps) => {
	return {
		upcomingClasses: state.upcomingClass.list,
		selectedCategory: state.category.selectedCategory
	}
}

@connect(mapStateToProps)
export default class Upcoming extends React.Component {
	render() {
		const { upcomingClasses, selectedCategory } = this.props

		if (!selectedCategory || selectedCategory === 'all') {
			var shownClasses = upcomingClasses //probably need to sort by popularity in the future
		} else {
			var shownClasses = upcomingClasses.filter(u => u.category._id === selectedCategory)
		}

		if (shownClasses.length) {
			var tiles = shownClasses.map(u => <div className="tile-item" key={u._id}><UpcomingTile {...u} /></div>)
		} else {
			var tiles = <div>There are no upcoming classes.</div>
		}

		var additionalCategories = [
			{ _id: 'all', name: 'All Categories'}
		]

		return (
			<div id="upcoming">
				<div className="upcoming-header">
					<div className="header-title">Upcoming Classes</div>
					<div className="header-category">
						<CategoryDropdown additionalCategories={additionalCategories} />
					</div>
				</div>
				<hr className="upcoming-line"/>
				<div className="upcoming-tiles">
					{tiles}
				</div>
			</div>
		)
	}
}

