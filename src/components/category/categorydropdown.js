import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
	// let categories = state.main.categories.
	// if (ownProps.categories) {
	// 	categories.unshift(...ownProps.categories)
	// }

	let additionalOptions = ownProps.additionalOptions || []

	return { categories: [ ...additionalOptions, ...state.main.categories ] }
}

@connect(mapStateToProps)
export default class CategoryDropDown extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {

		const { categories, onSelect } = this.props

		let options = categories.map((c, i) => <option key={i} value={c.id}>{c.name}</option>)

		let container = {
			className: 'form-group'
		}

		let select = {
			className: 'form-control',
			onChange: onSelect
		}

		return (
	        <div {...container}>
	            <select {...select}>
	            	{options}
	            </select>
	        </div>
		)
	}
}


// <div class="col-md-2 pull-right">
//     <select class="form-control input-sm" ng-options="c.name for c in categories" ng-model="selectedCategory"></select>
// </div>
