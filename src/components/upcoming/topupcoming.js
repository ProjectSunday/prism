import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { CategoryDropdown, UpcomingTile } from '../../components'

// import './topupcoming.sass'

const mapStateToProps = (state, ownProps) => {
	return {
		upcomingClasses: state.main.upcomingClasses
	}
}

@connect(mapStateToProps)
export default class TopUpcoming extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			selectedCategoryId: 0
		}

		this.onCategorySelect = this.onCategorySelect.bind(this)
	}

	onCategorySelect(e) {
		this.setState({
			selectedCategoryId: parseInt(e.target.value)
		})
	}
	render() {

		const { upcomingClasses } = this.props
		const { selectedCategoryId } = this.state


		if (selectedCategoryId === 0) {
			var shownClasses = upcomingClasses.slice(0, 6) //probably need to sort by popularity in the future
		} else {
			var shownClasses = upcomingClasses.filter(u => u.categoryId === selectedCategoryId).slice(0, 6)
		}

		if (shownClasses.length) {
			var nodes = shownClasses.map((u, i) => <UpcomingTile key={i} {...u} />)
		} else {
			var nodes = <div key="na" className="col-md-4 col-sm-6 col-xs-6"><em>There are no upcoming classes.</em></div>
		}


		let categoryDropdown = {
			additionalCategories: [ 
				{ _id: 0, name: 'All Categories'}
			],
			onSelect: this.onCategorySelect
		}


		let title = 'col-md-6 col-sm-6 col-xs-6'
		let category = 'col-md-2 pull-right'
		return (
			<div className="container">
				<div className="row">
					<div className={title}>
	            		<h4><Link to="/about">Upcoming Classes</Link></h4>
					</div>
					<div className="col-md-2 pull-right">
						<CategoryDropdown {...categoryDropdown}/>
					</div>
				</div>
				<div className="row">
					{nodes}
				</div>
			</div>
		)
	}
}

