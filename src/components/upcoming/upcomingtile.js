import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { Grid, Col, Row, Image, Panel, Glyphicon, Badge } from 'react-bootstrap'

import './upcomingtile.sass'

const mapStateToProps = (state, ownProps) => {
	// var category = state.app.categories.fbi(ownProps.categoryId) || {}
	return {
		category: state.app.categories.fbi(ownProps.categoryId) || {}
	}
}

@connect(mapStateToProps)
class UpcomingTile extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		var { name, category, date, location } = this.props

		let panelHeader = (
			<div>
        		<span className="category-name"><Link to="/about">{category.name}</Link></span>
            	<Image src={IMAGES.Category[category.imageName]} alt="Class Title - Category" responsive />
        		<span className="name truncate">{name}</span>
			</div>
		)

		return (
        	<Col className="upcoming-tile" md={4} sm={6} xs={6}>
        		<Panel header={panelHeader}>
                	<Row>
                        <Col md={4} sm={6} xsHidden>
                            <h2><span className="glyphicon glyphicon-ok"></span></h2>
                            <p>RSVP</p>
                        </Col>
                        <Col className="details" md={8} sm={6}>
                            <h4>{date}</h4>
                            <p className="small">{location}</p>
                        	<Badge bsStyle="small"><Glyphicon glyph="user">14</Glyphicon></Badge>
                        </Col>
                    </Row>
				</Panel>
			</Col>
		)
	}
}

export default UpcomingTile