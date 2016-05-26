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
                <FormControl className="searchbox" type="text" placeholder="Search" />
                <Button className="searchbutton">
                    <span className="glyphicon glyphicon-search"></span>
                </Button>
            </div>
        )
    }
}

