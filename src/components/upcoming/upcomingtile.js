import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { Grid, Col, Row, Image, Panel, Glyphicon, Badge } from 'react-bootstrap'

import './upcomingtile.sass'

const mapStateToProps = (state, ownProps) => {
	return {
		category: state.app.categories.fbi(ownProps.categoryId) || {}
	}
}

@connect(mapStateToProps)
class UpcomingTile extends React.Component {
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
                        <div className="col-md-4 col-sm-6 xs-hidden">
                            <h2><span className="glyphicon glyphicon-ok"></span></h2>
                            <p>RSVP</p>
                        </div>
                        <Col className="details" md={8} sm={6}>
                            <h4>{date}</h4>
                            <p className="small">{location}</p>
                        	<Badge bsStyle="small">
                                <span className="glyphicon glyphicon-user">14</span>
                            </Badge>
                        </Col>
                    </Row>
				</Panel>
			</Col>
		)
	}
}

export default UpcomingTile