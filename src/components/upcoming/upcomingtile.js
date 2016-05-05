import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { Grid, Col, Row, Image, Panel } from 'react-bootstrap'

import './upcomingtile.sass'

const mapStateToProps = (state, ownProps) => {
	return {
		categoryImageName: state.main.categories.fbi(ownProps.categoryId).categoryImageName
	}
}

@connect(mapStateToProps)
class UpcomingTile extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		var { name, categoryImageName } = this.props

		let image = {
			src: IMAGES.Category[categoryImageName],
			alt: 'Class Title - Category' 
		}

		let title = 'upcomingTitle truncate col-md-12 col-sm-12 col-xs-12'
		let panelBody = 'panel-body text-right'



	                // <span className={title}>{name}</span>

	                // <span class="upcomingCategory"><Link to="/about">{name}</Link></span>
	                //


		return (
        	<Col className="upcoming-tile" md={4} sm={6} xs={6}>
        		<Panel>
	                <Image src={IMAGES.Category[categoryImageName]} responsive />
                	<Row>
                        <Col md={4} sm={6} xsHidden textLeft>
                            <h2><span className="glyphicon glyphicon-ok"></span></h2>
                            <p>RSVP</p>
                        </Col>
                        <div class="col-md-8 col-sm-6">
                            <h5>details.date</h5>
                            <p class="small">details.location</p>
	                            <span class="small badge glyphicon glyphicon-user">14</span>
                        </div>
                    </Row>
				</Panel>
			</Col>
		)
	}
}

export default UpcomingTile