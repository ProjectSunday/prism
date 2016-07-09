import React from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

import { SearchControl, UserProfile, NavBar } from '~/components/components'
import { navigate } from '~/actions/actions'

@Radium
export default class Header extends React.Component {
    render() {
        return (
            <div style={styles.header} className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                        <NavBar />
                    </div>
                    <div style={styles.right}>
                        <div style={styles.search}><SearchControl /></div>
                        <div style={styles.profile}><UserProfile /></div>
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    header: {
        background: '#2C3E50',
        borderRadius: 0
    },
    right: {
        textAlign: 'right',
        height: '60px',
        paddingTop: '6px',
        '@media (max-width: 768px)': {
            float: 'right',
            width: '50%',
            textAlign: 'left'
        }
    },
    search: {
        display: 'inline-block'
    },
    profile: {
        display: 'inline-block',
        marginLeft: '15px'
    }
}