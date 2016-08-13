import React        from 'react'
import { connect }  from 'react-redux'
// import Radium       from 'radium'

import './notification.sass'

const mapStateToProps = (state, ownProps) => {
    return state.app.notification
}

@connect(mapStateToProps)
// @Radium
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
        var { message, type } = this.props
        var { display, opacity, transition } = this.state

        var notificationStyle = { display, opacity, transition }

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

        var innerStyle = { background }

        return (
            <div id="notification" ref="notification" style={notificationStyle}>
                <div className="notification-inner row" style={innerStyle}>
                    <img className="inner-icon pull-left" src={iconImage} />
                    {message}
                </div>
            </div>
        )
    }
}

// const styles = {
//     notification: {
//         position: 'fixed',
//         top: '56px',
//         zIndex: 10,
//         width: '100%',
//         textAlign: 'center'
//     },
//     inner: {
//         width: '60%',
//         height: '32px',
//         margin: 'auto',
//         boxShadow: '3px 3px 10px 0px rgba(0,0,0,0.75)',
//         borderRadius: '3px',
//         lineHeight: '32px'
//     },
//     icon: {
//         width: '20px',
//         margin: '6px 0px 0px 6px'
//     }
// }

