import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { Navigation } from '~/actions/actions'

import { Grid, Col, Row, Image, Panel, Glyphicon, Badge } from 'react-bootstrap'

import './upcomingtile.sass'

export default class UpcomingTile extends React.Component {
    classNameClick = () => {
        Navigation.go('/upcoming/' + this.props._id)
    }
	render() {
		var { category, event, date, location } = this.props
		return (
        	<div id="upcoming-tile">
                <div className="tile-head">
                    <span className="head-category"><Link to="/about">{category.name}</Link></span>
                    <Image src={IMAGES.Category[category.imageName]} alt="Class Title - Category" responsive />
                    <span className="head-classname" onClick={this.classNameClick}>{event.name}</span>
                </div>
                <div className="tile-body">
                    <div className="body-left">
                        <h2><span className="glyphicon glyphicon-ok"></span></h2>
                        <p>RSVP</p>
                    </div>
                    <div className="body-right">
                        <h4>date</h4>
                        <p className="small">location</p>
                        <Badge bsStyle="small">
                            <span className="glyphicon glyphicon-user">14</span>
                        </Badge>
                    </div>
                </div>
			</div>
		)
	}
}
