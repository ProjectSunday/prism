import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { CategoryDropdown, UpcomingTile } from '../components'
import { Navigation } from '~/actions/actions'

import './topupcoming.sass'

const mapStateToProps = (state, ownProps) => {
	return {
		upcomingClasses: state.upcomingClass.list,
		selectedCategory: state.category.selectedCategory
	}
}

@connect(mapStateToProps)
export default class TopUpcoming extends React.Component {
	headerClick = (e) => {
		Navigation.go('/upcoming')
	}

	render() {
		const { upcomingClasses, selectedCategory } = this.props

		if (!selectedCategory || selectedCategory === 'all') {
			var shownClasses = upcomingClasses.slice(0, 6) //probably need to sort by popularity in the future
		} else {
			var shownClasses = upcomingClasses.filter(u => u.category._id === selectedCategory).slice(0, 6)
		}

		if (shownClasses.length) {
			var nodes = shownClasses.map(u => <div className="tile-item" key={u._id}><UpcomingTile {...u} /></div>)

		} else {
			var nodes = <div className=""><em>There are no upcoming classes.</em></div>
		}

		var additionalCategories = [
			{ _id: 'all', name: 'All Categories'}
		]

		return (
			<div id="topupcoming">
				<div className="topupcoming-header">
					<div className="header-name">
	            		<h4 onClick={this.headerClick}>Upcoming Classes</h4>
					</div>
					<div className="header-category">
						<CategoryDropdown additionalCategories={additionalCategories} onSelect={this.onCategorySelect}/>
					</div>
				</div>
				<div className="topupcoming-tiles">
					{nodes}
				</div>
			</div>
		)
	}
}

