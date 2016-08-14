import React from 'react'
import { connect } from 'react-redux'

import { Category, UpcomingClass } from '~/actions/actions'
import { CategoryDropdown, UpcomingTile } from '~/components/components'

import './teach-create.sass'

const mapStateToProps = (state, ownProps) => {
	return {
		selectedCategory: state.category.selectedCategory,
		user: state.authentication.user
	}
}

@connect(mapStateToProps)
export default class TeachCreate extends React.Component {
	constructor() {
		super()
		this.state = {
			title: ''
		}
	}

	titleChange = (e) => {
		this.setState({
			title: e.target.value
		})
	}
	submitClick = async () => {
		var name = this.state.title
		var categoryId = this.props.selectedCategory

		console.log('submitClick', name, categoryId)
		UpcomingClass.create({ name, categoryId })

		Category.setSelected(undefined)

		this.setState({
			title: ''
		})

	}
	render() {
		var { user } = this.props
		var { title } = this.state
		var additionalCategories = [{ _id: 'all', name: 'Select a category' }]

		var loginMessage = user ? '': 'Must be logged in to create class'
		var disabled = user ? false : true


		//<div className="col-md-2">
		//	<img id="spinner" src="http://fontfeest.nl/img/spinner.gif" ></img>
		//</div>

		return (
			<div id="teachcreate">

				<h3 className="teachcreate-header">Create Your Class</h3>

				<p className="teachcreate-title">Class Title</p>
				<input className="form-control" type="text" placeholder="e.g. Intro to Guitar" onChange={this.titleChange} value={title} />

				<p className="teachcreate-category">Category</p>
				<CategoryDropdown additionalCategories={additionalCategories}/>
				
				<div className="row form-group">
					<div className="col-md-8 col-sm-8 col-xs-8">
						<div className="checkbox">
							I agree to the Terms and Conditions
						</div>
					</div>

					<span>{loginMessage}</span>
					<button disabled={disabled} className="btn btn-default pull-right" onClick={this.submitClick}>Submit</button>
				</div>

			</div>
		)
	}
}



