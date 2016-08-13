import React from 'react'
import Router from 'react-router'

import { CategoryDropdown } 			from '~/components/components'
import { RequestedClass, Navigation } 	from '~/actions/actions'

export default class CreateRequest extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: null,
			categoryId: 0
		}
	}

	submitClick = () => {
		var { name, categoryId } = this.state
		RequestedClass.create({ name, categoryId })
		Navigation.go('/requested')
	}

	nameChanged = (e) => {
		this.setState({
			name: e.target.value
		})
	}

	categorySelect = (e) => {
		this.setState({
			categoryId: e.target.value
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
				<CategoryDropdown onSelect={this.categorySelect} additionalCategories={additionalCategories}/>
				<button className="btn btn-primary pull-right" onClick={this.submitClick}>Submit</button>
			</div>
		)
	}
}