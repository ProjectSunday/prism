import React from 'react'

import { navigate, MeetupAuthentication } from '../../actions/actions'

console.log('asdfsf', MeetupAuthentication)
// import { connect } from 'react-redux'

// const mapStateToProps = (state, ownProps) => {
// 	// let categories = state.main.categories.
// 	// if (ownProps.categories) {
// 	// 	categories.unshift(...ownProps.categories)
// 	// }

// 	let additionalCategories = ownProps.additionalCategories || []

// 	return { categories: [ ...additionalCategories, ...state.main.categories ] }
// }


import { Button, NavDropdown, DropdownButton, MenuItem } from 'react-bootstrap'

import './userprofile.sass'

// @connect(mapStateToProps)
export default class UserProfile extends React.Component {

// 	constructor(props) {
// 		super(props)
// 	}

	render() {

		var loggedIn = false

		if (loggedIn) {
			var title = <img src="http://placehold.it/150x150" />
			var node = (
				<div className="userprofile">
					<DropdownButton bsStyle="default" title={title} id="userprofile-dropdown" pullRight>
						<MenuItem onClick={() => navigate('/about')}>View Profile</MenuItem>
						<MenuItem onClick={() => navigate('/about')}>Account Settings</MenuItem>
						<MenuItem divider />
						<MenuItem onClick={() => navigate('/about')}>Log Out</MenuItem>
					</DropdownButton>
				</div>
			)
		} else {
			var node = (
				<Button className="userprofile"
					bsStyle="success"
					onClick={MeetupAuthentication.start}>Login</Button>
			)
		}

		return node
	}
}

