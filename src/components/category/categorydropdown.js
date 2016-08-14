import React from 'react'
import { connect } from 'react-redux'

import { Category } from '~/actions/actions'

import './categorydropdown.sass'

const mapStateToProps = (state, ownProps) => {
	var additionalCategories = ownProps.additionalCategories || []
	return {
		categories: [ ...additionalCategories, ...state.category.list ],
		selectedCategory: state.category.selectedCategory
	}
}

@connect(mapStateToProps)
export default class CategoryDropdown extends React.Component {
	categoryChange = (e) => {
		Category.setSelected(e.target.value)
	}
	render() {
		var { categories, onSelect, selectedCategory } = this.props

		selectedCategory = selectedCategory || categories[0]._id
		
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

