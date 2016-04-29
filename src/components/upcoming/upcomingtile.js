import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
	return {
		categoryImageName: state.main.category.fbi(ownProps.category).categoryImageName
	}
}

@connect(mapStateToProps)
class UpcomingTile extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		var { name, imageUrl, categoryImageName } = this.props

		imageUrl = imageUrl || 'http://placehold.it/350x50'


		let container = {
			className: 'col-md-4 col-sm-6 col-xs-6'
		}

		let panel = {
			className: 'panel'
		}

		let title = {
			className: 'upcomingTitle truncate col-md-12 col-sm-12 col-xs-12'
		}

		let panelBody = {
			className: 'panel-body text-right'
		}

		return (
        	<div {...container}>
        		<div {...panel}>
	                <span class="upcomingCategory"><Link to="/about">{name}</Link></span>
	                <img src={IMAGES.Category[categoryImageName]} className="img-responsive upcomingImage" alt="Class Title - Category" />
	                <span {...title}>{name}</span>
	                <div {...panelBody}>
	                    <div className="row">
	                        <div className="text-left col-md-4 col-sm-6 hidden-xs">
	                            <h2><span className="glyphicon glyphicon-ok"></span></h2>
	                            <p>RSVP</p>
	                        </div>
	                        <div class="col-md-8 col-sm-6">
	                            <h5>details.date</h5>
	                            <p class="small">details.location</p>
	                            <span class="small badge glyphicon glyphicon-user">14</span>
	                        </div>
	                    </div>
	                </div>
				</div>
			</div>
		)
	}
}

export default UpcomingTile