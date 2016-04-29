import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
	return {
		categoryImageName: state.main.categories.fbi(ownProps.category).categoryImageName
	}
}

@connect(mapStateToProps)
class UpcomingTile extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		var { name, categoryImageName } = this.props


		let container = {
			className: 'col-md-4 col-sm-6 col-xs-6'
		}

		let panel = {
			className: 'panel'
		}

		let image = {
			className: 'img-responsive',
			src: IMAGES.Category[categoryImageName],
			alt: 'Class Title - Category' 
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
	                <img {...image}/>
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