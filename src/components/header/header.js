import React from 'react'
import { Link } from 'react-router'

import { SearchControl, UserProfile, NavBar } from '~/components/components'
import { navigate } from '~/actions/actions'

import './header.sass'

export default class Header extends React.Component {
    render() {
        return (
            <div id="header">
                <div className="row">
                    <div className="nav-container">
                        <NavBar />
                    </div>
                    <div className="search-profile-container">
                        <div className="search"><SearchControl /></div>
                        <div className="profile"><UserProfile /></div>
                    </div>
                </div>
            </div>
        )
    }
}
