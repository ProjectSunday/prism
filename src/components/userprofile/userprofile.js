import React from 'react'
import { connect } from 'react-redux'

import { navigate, MeetupAuthentication } from '../../actions/actions'


const mapStateToProps = (state, ownProps) => {
	return { ...state.main.authentication }
}


import { Button, NavDropdown, DropdownButton, MenuItem } from 'react-bootstrap'

import './userprofile.sass'

@connect(mapStateToProps)
export default class UserProfile extends React.Component {

	render() {
		var { logingIn, user } = this.props



		var loginButtonStyle = {
			opacity: logingIn ? 0.5 : 1
		}

		if (user) {
			var p = {
				backgroundImage: `url("${user.meetup.photo.thumb_link}")`
			}
			var title = <div className="profileimage" style={p}/>
			var node = (
				<div className="userprofile loggedin">
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
				<div className="userprofile loggedout">
					<img src={IMAGES.spinner}
						style={{ display: logingIn ? 'block' : 'none' }}
					/>
					<Button
						bsStyle="success"
						onClick={MeetupAuthentication.start}
						style={loginButtonStyle}>
						Login
					</Button>
				</div>
			)
		}

		return node
	}
}

