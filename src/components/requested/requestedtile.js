import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { Col, Panel, ListGroup, ListGroupItem, Badge, Glyphicon } from 'react-bootstrap'

import './requestedtile.sass'

const mapStateToProps = (state, ownProps) => {
	return {
		requestedClasses: state.main.requestedClasses.filter(r => r.categoryId === ownProps.category.id)
	}
}

@connect(mapStateToProps)
export default class RequestedTile extends React.Component {
	render() {

		const { category, requestedClasses } = this.props

		const classes = requestedClasses.map((r, i) => (
			<ListGroupItem key={i}>
				<Badge bsStyle="small"><Glyphicon glyph="user">14</Glyphicon></Badge>			
				{r.name}
			</ListGroupItem>
		))

		if (!classes.length) {
			classes.push(
				<ListGroupItem key="na">
					<em>None</em>
				</ListGroupItem>
			)
		}


		return (
			<Col className="requested-tile" md={3} sm={4} xs={6}>
				<Panel bsStyle="primary" header={category.name}>
					<ListGroup>
						{classes}
					</ListGroup>
				</Panel>
			</Col>
		)
	}
}


