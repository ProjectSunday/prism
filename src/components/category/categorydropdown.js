import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
	var additionalCategories = ownProps.additionalCategories || []
	return { categories: [ ...additionalCategories, ...state.app.categories ] }
}

@connect(mapStateToProps)
export default class CategoryDropdown extends React.Component {
	render() {
		var { categories, onSelect } = this.props

		var options = categories.map((c, i) => <option key={i} value={c._id}>{c.name}</option>)

		return (
	        <div className="form-group">
	            <select className="form-control" onChange={onSelect}>
	            	{options}
	            </select>
	        </div>
		)
	}
}

