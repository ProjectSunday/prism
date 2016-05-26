import React from 'react'
import { Button, FormControl } from 'react-bootstrap'

import './searchcontrol.sass'

export default class SearchControl extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="searchcontrol">
                <FormControl className="searchcontrol-box" type="text" placeholder="Search" />
                <Button className="searchcontrol-button">
                    <span className="glyphicon glyphicon-search"></span>
                </Button>
            </div>
        )
    }
}

