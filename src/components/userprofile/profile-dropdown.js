import React from 'react'

import { navigate, Profile } from '~/actions/actions'

import './profile-dropdown.sass'

export default class ProfileDropDown extends React.Component {
	constructor() {
		super()
		this.state = {
			open: false
		}
	}

	onBlur = (e) => {
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

		if (open) {
			var node = (
				<div className="profile-menu">
					<div className="menu-item" href="#" onClick={() => navigate('/about')}>View Profile</div>
					<div className="menu-item" href="#" onClick={() => navigate('/about')}>Account Settings</div>
					<hr className="menu-separator" />
					<div className="menu-item" href="#" onClick={Profile.logout}>Log Out</div>
				</div>
			)
		} else {
			var node = undefined
		}

		var profileImageStyle = { backgroundImage: `url("${user.meetup.member.photo.thumb_link}")` }
		var spinnerStyle = { display: showSpinner ? 'block': 'none' }

		return (
			<div id="profile-dropdown" tabIndex="0" onBlur={this.onBlur} onClick={this.dropdownClicked}>
				<img className="profile-spinner" src={IMAGES.spinner} style={spinnerStyle} />
				<div className="profile-image" style={profileImageStyle} />
				<div className="profile-caret"><span className="caret" /></div>
				{node}
			</div>
		)
	}
}
