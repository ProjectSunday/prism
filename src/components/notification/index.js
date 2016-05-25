import React        from 'react'
import { connect }  from 'react-redux'

// import { navigate } from '../../actions'

import './index.sass'

const mapStateToProps = (state, ownProps) => {
    console.log('huh', ownProps === state.main.notification)
    return state.main.notification
}

@connect(mapStateToProps)
export default class Notification extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            display: 'none',
            opacity: 1,
            transition: ''
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps', nextProps)

        var { notification } = this.refs

        if (nextProps.show) {
            clearTimeout(this.tid)
            this.setState({
                display: 'block',
                opacity: 1,
                transition: ''
            })
        } else {
            this.setState({
                opacity: 0,
                transition: 'opacity 3s'
            })
            this.tid = setTimeout(() => {
                this.setState({
                    display: 'none'
                })
            }, 3000)
        }

    }

    render() {
        console.log('notification render', this.props)
        var { message, type } = this.props
        var { display, opacity, transition } = this.state

        switch (type) {
            case 'success':
                var background = '#8AFF8B'
                var iconImage = IMAGES.checkmark
                break
            case 'progress':
            default:
                var background = '#FFF174'
                var iconImage = IMAGES.spinner
                break
        }
        var innerStyle = {
            background: background
        }

        var style = {
            display: display,
            opacity: opacity,
            transition: transition
        }

        return (
            <div id="notification" style={style} ref="notification">
                <div className="inner row" style={innerStyle}>
                    <img className="pull-left" src={iconImage} />
                    {message}
                </div>
            </div>
        )
    }
}

