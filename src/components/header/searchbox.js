import React from 'react'
import { Link } from 'react-router'
import { push } from 'react-router-redux'

import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap'

export default class SearchBox extends React.Component {
    constructor(props) {
        super(props)

        // this.navClick = this.navClick.bind(this)
    }
    // navClick(path) {
    //     return () => DISPATCH(push(path))
    // }
    render() {
        return (
            <FormControl type="text" placeholder="Search" className="search" />
        )
    }
}

