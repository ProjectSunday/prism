import React from 'react'
import Router from 'react-router'
import { connect } from 'react-redux'

import { CategoryDropdown } 			from '~/components/components'
import { RequestedClass, Navigation } 	from '~/actions/actions'

const mapStateToProps = (state, ownProps) => {
	return {
		selectedCategory: state.category.selectedCategory
	}
}

@connect(mapStateToProps)
export default class CreateRequest extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: null
		}
	}

	submitClick = () => {
		var { name } = this.state
		var categoryId = this.props.selectedCategory
		RequestedClass.create({ name, categoryId })
		Navigation.go('/requested')
	}

	nameChanged = (e) => {
		this.setState({
			name: e.target.value
		})
	}

	render() {

		var additionalCategories = [{ _id: 0, name: 'Select a category' }]

		return (
			<div>
				<div>Request a Class:</div>
				<div>Lesson Name:</div>
				<input type="text" placeholder="e.g. Intro to Guitar" onChange={this.nameChanged}/>
				<div>Category:</div>
				<CategoryDropdown additionalCategories={additionalCategories}/>
				<button className="btn btn-primary pull-right" onClick={this.submitClick}>Submit</button>
			</div>
		)
	}
}