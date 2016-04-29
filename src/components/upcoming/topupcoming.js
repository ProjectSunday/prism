import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { CategoryDropDown, UpcomingTile } from '../../components'

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

		let container = {
			className: 'container'
		}

		let header = {
			className: 'row'
		}

		let title = {
			className: 'col-md-6 col-sm-6 col-xs-6'
		}

		let category = {
			className: 'col-md-2 pull-right'
		}

		let categoryDropDown = {
			additionalCategories: [ 
				{ id: 0, name: 'All Categories'}
			],
			onSelect: this.onCategorySelect
		}

		let body = {
			className: 'row'
		}
		
		return (
			<div {...container}>
				<div {...header}>
					<div {...title}>
	            		<h4><Link to="/about">Upcoming Classes</Link></h4>
					</div>
					<div {...category}>
						<CategoryDropDown {...categoryDropDown}/>
					</div>
				</div>
				<div {...body}>
					{nodes}
				</div>
			</div>
		)
	}
}

