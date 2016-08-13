import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { Grid, Col, Row, Image, Panel, Glyphicon, Badge } from 'react-bootstrap'

import './upcomingtile.sass'

const mapStateToProps = (state, ownProps) => {
	return {
		category: state.app.categories.find(c => c._id === ownProps.categoryId) || {}
	}
}

@connect(mapStateToProps)
class UpcomingTile extends React.Component {
	render() {
		var { name, category, date, location } = this.props

        // debugger;
        // console.log(category)
		let panelHeader = (
			<div>

			</div>
		)

                        // <Panel header={panelHeader}>
                        //     <Row>
                        //         <div className="col-md-4 col-sm-6 xs-hidden">
                        //             <h2><span className="glyphicon glyphicon-ok"></span></h2>
                        //             <p>RSVP</p>
                        //         </div>
                        //         <Col className="details" md={8} sm={6}>
                        //             <h4>{date}</h4>
                        //             <p className="small">{location}</p>
                        //             <Badge bsStyle="small">
                        //                 <span className="glyphicon glyphicon-user">14</span>
                        //             </Badge>
                        //         </Col>
                        //     </Row>
                        // </Panel>

		return (
        	<div id="upcoming-tile">
                <div className="tile-head">
                    <span className="head-category"><Link to="/about">{category.name}</Link></span>
                    <Image src={IMAGES.Category[category.imageName]} alt="Class Title - Category" responsive />
                    <span className="name truncate">class name</span>
                </div>
                <div className="tile-body">
                    tilebody
                </div>
        		
			</div>
		)
	}
}

export default UpcomingTile