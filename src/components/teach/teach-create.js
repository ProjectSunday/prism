import React from 'react'
import { connect } from 'react-redux'

import { UpcomingClass } from '~/actions/actions'
import { CategoryDropdown, UpcomingTile } from '~/components/components'

import './teach-create.sass'

const mapStateToProps = (state, ownProps) => {
	return {
		selectedCategory: state.category.selectedCategory
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
	submitClick = () => {
		var name = this.state.title
		var categoryId = this.props.selectedCategory

		console.log('submitClick', name, categoryId)
		UpcomingClass.create({ name, categoryId })

		this.setState({
			title: ''
		})

	}
	render() {
		var { title } = this.state
		var additionalCategories = [{ _id: 'all', name: 'Select a category' }]

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
					<div className="col-md-2">
						<img id="spinner" src="http://fontfeest.nl/img/spinner.gif" ></img>
					</div>
					<div className="col-md-2">
						<button className="btn btn-default pull-right" onClick={this.submitClick}>Submit</button>
					</div>
				</div>
				<div>message</div>

			</div>
		)
	}
}



