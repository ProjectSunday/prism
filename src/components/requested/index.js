import React from 'react'

import { RequestedTiles, RequestedActions } from '../../components'

export default class Requested extends React.Component {
	render() {
		return (
			<div>
				<RequestedTiles />
				<RequestedActions />
			</div>
		)
	}
}
