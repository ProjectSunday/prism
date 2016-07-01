import React from 'react'
import { StyleRoot } from 'radium'

import '~/static/bootswatch/flatly.min.css'

import { Notification, Header, Testing } from './components'

export default class Root extends React.Component {
	render() {
		return (
			<StyleRoot>
				<div>
					<Notification />
					<Header />
					{this.props.children}
					<div> I am a sad sad incomplete footer</div>
					<Testing />
				</div>
			</StyleRoot>
		)
	}
}
