import React from 'react'
import { connect } from 'react-redux'

import './categorydropdown.sass'

const mapStateToProps = (state, ownProps) => {
	var additionalCategories = ownProps.additionalCategories || []
	return { categories: [ ...additionalCategories, ...state.app.categories ] }
}

@connect(mapStateToProps)
export default class CategoryDropdown extends React.Component {
	render() {
		var { categories, onSelect } = this.props

		var options = categories.map(c => <option key={c._id} value={c._id}>{c.name}</option>)

		return (
	        <div id="categorydropdown">
	            <select className="categorydropdown-select" onChange={onSelect}>
	            	{options}
	            </select>
	        </div>
		)
	}
}

