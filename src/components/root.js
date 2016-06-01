import React from 'react'

import { Notification, Header, Testing } from './components'

export default class Root extends React.Component {
	render() {
		return (
			<div>
				<Notification />
				<div>3333</div>
				<Header />
				{this.props.children}
				<Testing />
			</div>
		)
	}
}
