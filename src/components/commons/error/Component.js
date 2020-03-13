import React from 'react'
import './style.css'

export default class Component extends React.Component {
    render() {
        return (
            <div className="error-span">
                {this.props.message || 'Error'}
            </div>
        )
    }
}
