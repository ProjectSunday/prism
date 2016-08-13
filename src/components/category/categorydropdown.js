import React from 'react'
import { connect } from 'react-redux'

import { UI } from '~/actions/actions'

import './categorydropdown.sass'

const mapStateToProps = (state, ownProps) => {
	var additionalCategories = ownProps.additionalCategories || []
	return {
		categories: [ ...additionalCategories, ...state.app.categories ],
		selectedCategory: state.ui.selectedCategory
	}
}

@connect(mapStateToProps)
export default class CategoryDropdown extends React.Component {
	categoryChange = (e) => {
		UI.setSelectedCategory(e.target.value)
	}
	render() {
		var { categories, onSelect, selectedCategory } = this.props

		var options = categories.map(c => <option key={c._id} value={c._id}>{c.name}</option>)

		return (
	        <div id="categorydropdown">
	            <select value={selectedCategory} className="categorydropdown-select" onChange={this.categoryChange}>
	            	{options}
	            </select>
	        </div>
		)
	}
}

