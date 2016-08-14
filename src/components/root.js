import React from 'react'

// import '~/static/bootstrap/stylesheets/_bootstrap.scss'
// import '~/static/bootswatch/flatly.min.css'

import { Footer, Notification, Header, Testing } from './components'

export default class Root extends React.Component {
	render() {
		return (
			<div>
				<Notification />
				<Header />
				{this.props.children}
				<Footer />
				<hr />
				<Testing />
			</div>
		)
	}
}
