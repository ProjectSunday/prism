import React from 'react'
import Router from 'react-router'
import { Grid, Row, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

import { CategoryDropdown } 	from '~/components/components'
import { createRequestedClass, navigate } from '~/actions/actions'

export default class CreateRequest extends React.Component {

	constructor(props) {
		super(props)

		this.submitClick = this.submitClick.bind(this)
		this.nameChanged = this.nameChanged.bind(this)
		this.categorySelect = this.categorySelect.bind(this)
		this.render = this.render.bind(this)

		this.state = {
			name: null,
			category: 0
		}
	}

	submitClick () {
		createRequestedClass({
			name: this.state.name,
			category: this.state.category
		})

		navigate('/requested')
	}

	nameChanged (e) {
		this.setState({
			name: e.target.value
		})
	}

	categorySelect (e) {
		this.setState({
			category: e.target.value
		})
	}

	render() {

		var additionalCategories = [{ _id: 0, name: 'Select a category' }]

		return (
			<Grid>
				<Row>
    				<h4 className="pull-left">Request a Class:</h4>
				</Row>
				<Row>
					<form>
						<FormGroup>
							<ControlLabel>Lesson Name:</ControlLabel>
							<FormControl type="text" placeholder="e.g. Intro to Guitar" onChange={this.nameChanged}/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Category:</ControlLabel>
							<CategoryDropdown onSelect={this.categorySelect} additionalCategories={additionalCategories}/>
						</FormGroup>
						<button className="btn btn-primary pull-right" onClick={this.submitClick}>
					  		Submit
						</button>
					</form>
				</Row>
			</Grid>
		)
	}
}



// getInitialState: function () {
// 	return { 
// 		categories: [],
// 		request: { 
// 			name: '',
// 			categoryId: null
// 		}
// 	}
// },
// componentWillMount: function () {
// 	CategoryAction.getAll();
// 	var self = this;
// 	CategoryStore.on('change', function () {
// 		var categories = CategoryStore.getAll().slice(0);				//slicing to prevent pollution of store data
// 		categories.unshift({ _id: '', name: '(Select a category)' });   //_id: '' for falsy check laster on
// 		self.setState({ categories: categories });
// 	});
// },
// updateRequest: function (event) {
// 	var name = event.target.name;
// 	var value = event.target.value;

// 	var request = this.state.request;

// 	request[name] = value;

// 	red(this.state.request);
// 	return this.setState({ request: request });
// },
// saveRequest: function (event) {
// 	event.preventDefault();

// 	RequestedAction.createRequest(this.state.request);
// 	this.transitionTo('/requested');
// },

// <RequestedForm
// 	request={this.state.request}
// 	categories={this.state.categories}
// 	onChange={this.updateRequest}
// 	onSubmit={this.saveRequest}
// 	/>

// <CategoryDropdown
// 	categories={this.props.categories}
// 	onChange={this.props.onChange}
// 	/>

//				<input type="submit" value="Submit" className="btn btn-default" onClick={this.props.onSubmit} />
//
