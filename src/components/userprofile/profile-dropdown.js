import React from 'react'
// import { connect } from 'react-redux'
// import { Button, NavDropdown, DropdownButton, MenuItem } from 'react-bootstrap'

import { navigate, Profile, Authentication } from '~/actions/actions'

import './profile-dropdown.sass'

// const mapStateToProps = (state, ownProps) => {
// 	return { ...state.authentication }
// }

// @connect(mapStateToProps)
export default class ProfileDropDown extends React.Component {
	constructor() {
		super()
		this.state = {
			open: false
		}
	}

	collapse = (e) => {
		this.setState({
			open: false
		})
	}

	dropdownClicked = (e) => {
		this.setState({
			open: !this.state.open
		})
	}

	render() {
		var { showSpinner, user } = this.props
		var { open } = this.state

		if (open || true) {

			// var p = { backgroundImage: `url("${user.meetup.member.photo.thumb_link}")` }
			// var title = <div className="profileimage" style={p}/>

			var node = (
				<div className="profile-menu">
					<a className="menu-item" href="#" onClick={() => navigate('/about')}>View Profile</a>
					<a className="menu-item" href="#" onClick={() => navigate('/about')}>Account Settings</a>
					<hr className="menu-separator" />
					<a className="menu-item" href="#" onClick={Profile.logout()}>Log Out</a>
				</div>
			)

			// var node = (
			// 	<div className="userprofile loggedin">

			// 		<div class="dropdown">
			// 			<ul class="dropdown-menu">
			// 			    <li><a href="#">Action</a></li>
			// 			    <li><a href="#">Another action</a></li>
			// 			    <li><a href="#">Something else here</a></li>
			// 			    <li role="separator" class="divider"></li>
			// 			    <li><a href="#">Separated link</a></li>
			// 			  </ul>
			// 		</div>



			// 		<DropdownButton bsStyle="default" title={title} id="userprofile-dropdown" pullRight>
			// 			<MenuItem onClick={() => navigate('/about')}>View Profile</MenuItem>
			// 			<MenuItem onClick={() => navigate('/about')}>Account Settings</MenuItem>
			// 			<MenuItem divider />
			// 			<MenuItem onClick={Profile.logout}>Log Out</MenuItem>
			// 		</DropdownButton>
			// 	</div>
			// )
		} else {
			var node = undefined
		}

				// {profileMenu}

		var profileImageStyle = { backgroundImage: `url("${user.meetup.member.photo.thumb_link}")` }
		var spinnerStyle = { display: showSpinner ? 'block': 'none' }

				// <img className="profile-spinner" src={IMAGES.spinner} style={spinnerStyle} />

		return (
			<div id="profile-dropdown" tabIndex="0" onBlur={this.collapse} onClick={this.dropdownClicked}>
				<div className="profile-image" style={profileImageStyle} />
				<div className="profile-caret"><span className="caret" /></div>
				{node}
			</div>
		)
	}
}

// <DropdownButton bsStyle="default" title={title} id="userprofile-dropdown" pullRight>
// 	<MenuItem onClick={() => navigate('/about')}>View Profile</MenuItem>
// 	<MenuItem onClick={() => navigate('/about')}>Account Settings</MenuItem>
// 	<MenuItem divider />
// 	<MenuItem onClick={Profile.logout}>Log Out</MenuItem>
// </DropdownButton>

