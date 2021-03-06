import React from 'react'
import { connect } from 'react-redux'
import { Button, NavDropdown, DropdownButton, MenuItem } from 'react-bootstrap'

import { navigate, Profile, Authentication } from '~/actions/actions'

import { ProfileDropDown } from '~/components/components'

import './userprofile.sass'

const mapStateToProps = (state, ownProps) => {
	return { ...state.authentication }
}

@connect(mapStateToProps)
export default class UserProfile extends React.Component {

	render() {
		var { showSpinner, user } = this.props

		if (user) {

			var node = (<ProfileDropDown showSpinner={showSpinner} user={user} />)
			// var p = { backgroundImage: `url("${user.meetup.member.photo.thumb_link}")` }
			// var title = <div className="profileimage" style={p}/>
			// var node = (
			// 	<div className="userprofile loggedin">

			// 		<div class="dropdown">
			// 			<button class="btn btn-default dropdown-toggle">
			// 				Dropdown
			// 			    <span class="caret"></span>
			// 			</button>
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
			var i = { display: showSpinner ? 'block' : 'none' }
			var l = { opacity: showSpinner ? 0.5 : 1 }
			var node = (
				<div className="userprofile loggedout">
					<img src={IMAGES.spinner} style={i} />
					<Button
						bsStyle="success"
						onClick={Authentication.start}
						style={l}>
						Login
					</Button>
				</div>
			)
		}

		return node
	}
}

// <DropdownButton bsStyle="default" title={title} id="userprofile-dropdown" pullRight>
// 	<MenuItem onClick={() => navigate('/about')}>View Profile</MenuItem>
// 	<MenuItem onClick={() => navigate('/about')}>Account Settings</MenuItem>
// 	<MenuItem divider />
// 	<MenuItem onClick={Profile.logout}>Log Out</MenuItem>
// </DropdownButton>
