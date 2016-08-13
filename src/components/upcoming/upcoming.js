import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { CategoryDropdown, UpcomingTile } from '../components'

import './upcoming.sass'

const mapStateToProps = (state, ownProps) => {
	return {
		upcomingClasses: state.app.upcomingClasses
	}
}

@connect(mapStateToProps)
export default class Upcoming extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedCategoryId: 0
		}
	}

	onCategorySelect = (e) => {
		this.setState({
			selectedCategoryId: parseInt(e.target.value)
		})
	}
	render() {

		const { upcomingClasses } = this.props
		const { selectedCategoryId } = this.state


		if (selectedCategoryId === 0) {
			var shownClasses = upcomingClasses //probably need to sort by popularity in the future
		} else {
			var shownClasses = upcomingClasses.filter(u => u.categoryId === selectedCategoryId)
		}

		if (shownClasses.length) {
			// var tiles = shownClasses.map(u => <UpcomingTile key={u._id} {...u} />)
			var tiles = shownClasses.map(u => <div className="tile-item" key={u._id}><UpcomingTile {...u} /></div>)
		} else {
			var tiles = <div>There are no upcoming classes.</div>
		}


		// let categoryDropdown = {
		// 	additionalCategories: [
		// 		{ _id: 0, name: 'All Categories'}
		// 	],
		// 	onSelect: this.onCategorySelect
		// }


		// let title = 'col-md-6 col-sm-6 col-xs-6'
		// let category = 'col-md-2 pull-right'
		return (
			<div id="upcoming">
			    <div className="upcoming-header">
		            <div className="header-title">Upcoming Classes</div>
			        <div className="header-category">
			    		<CategoryDropdown className="header-category" onSelect={this.onCategorySelect} />
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

