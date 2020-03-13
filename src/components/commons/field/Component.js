import React from 'react'
import './style.css';                

export default class Component extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        const { title, errorProps, required, type, onChange, value } = this.props;
        const id = Math.random(10)
        return (
        <div className="form-group">
            <label id={id}>{title || 'title'} {required && <span className="fire">*</span>}</label>
            <input type={type || 'text'} className="form-control text-field" id={id} value={value} onChange={onChange} />
            {
                errorProps              
            }
        </div>
      )
    }
}