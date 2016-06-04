import React from 'react'
import { connect } from 'react-redux'
import { Button, NavDropdown, DropdownButton, MenuItem } from 'react-bootstrap'

import { navigate, MeetupAuthentication } from '../../actions/actions'

import './userprofile.sass'

const mapStateToProps = (state, ownProps) => {
	return { ...state.app.authentication }
}

@connect(mapStateToProps)
export default class UserProfile extends React.Component {

	render() {
		var { logingIn, user } = this.props

		if (user) {
			var p = { backgroundImage: `url("${user.meetup.photo.thumb_link}")` }
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
			var i = { display: logingIn ? 'block' : 'none' }
			var l = { opacity: logingIn ? 0.5 : 1 }
			var node = (
				<div className="userprofile loggedout">
					<img src={IMAGES.spinner} style={i} />
					<Button
						bsStyle="success"
						onClick={MeetupAuthentication.start}
						style={l}>
						Login
					</Button>
				</div>
			)
		}

		return node
	}
}

