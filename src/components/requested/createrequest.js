import React from 'react'
import Router from 'react-router'
import { Grid, Row, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

import { CategoryDropdown } 	from '../../components'
import { createRequestedClass, navigate } from '../../actions'

export default class CreateRequest extends React.Component {

	constructor(props) {
		super(props)

		this.submitClick = this.submitClick.bind(this)
		this.nameChanged = this.nameChanged.bind(this)
		this.categorySelect = this.categorySelect.bind(this)
		this.render = this.render.bind(this)

		this.state = {
			name: null
		}
	}
	

	submitClick () {
		// console.log('yoooo')

		// var { name } = this.refs

		createRequestedClass({
			name: this.state.name,
			category: this.state.category
		})

		navigate('/requested')
	}

	nameChanged (e) {
		// console.log(e, value)
		this.setState({
			name: e.target.value
		})
	}

	categorySelect () {

	}

	render() {

		var additionalCategories = [{ _id: 0, name: '' }]

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
							<CategoryDropdown onChange={this.categorySelect} additionalCategories={additionalCategories}/>
						</FormGroup>
						<Button className="pull-right" onClick={this.submitClick}>
					  		Submit
						</Button>
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
