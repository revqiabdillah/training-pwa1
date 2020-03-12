import React from 'react'
import './style.css';
import Field from '../field/Component'
import Error from '../error/Component'
import Button from '../Button'

export default class Component extends React.Component {
    constructor(){
        super()
        this.state = {
            email : "",
            password : "",
            confirmPassword : "",
            emailError : false,
            passwordError : false,
            confirmPasswordError : false,
            emailMessage : "",
            passwordMessage : "",
            confirmPasswordMessage : ""
        }
    }

    _handleChangeEmail = (event)=>{
        const {value} = event.target;
        if(value === "" || !value){
            this.setState({
                email : value,
                emailError : true,
                emailMessage : "Email wajib di isi dengan benar !"
            })
        }else{
            this.setState({
                emailError : false,
                email : value
            })
        }
    }

    _handleChangePassword = (event)=>{
        const {value} = event.target;
        if(value === "" || !value){
            this.setState({
                password : value,
                passwordError : true,
                passwordMessage : "Password harus di isi dengan benar !"
            })
        } else{
            this.setState({
                passwordError : false,
                password : value
            })
        }
    }

    _handleChangeConfirmPassword = (event)=>{
        const {value} = event.target;
        if(value === "" || !value ){
            this.setState({
                confirmPassword : value,
                confirmPasswordError : true,
                confirmPasswordMessage : "Confirmasi harus di isi !"
            })
        }else{
            this.setState({
                confirmPasswordError : false,
                confirmPassword : value
            })
        }
    }

    render() {
        const {
            email,emailError,emailMessage,
            password,passwordError,passwordMessage,
            confirmPassword,confirmPasswordError,confirmPasswordMessage
        } = this.state
        return (
        <div className="form-sigin">
            <h4>Sign-In Information</h4>
            <hr />
            <form>
                <Field 
                    title="Email"
                    placeholder=""
                    type="email"
                    required={true}
                    value={email}
                    onChange={this._handleChangeEmail}
                    errorProps={emailError && <Error message={emailMessage} />}
                />
                <Field 
                    title="Password"
                    placeholder=""
                    type="password"
                    required={true}
                    value={password}
                    onChange={this._handleChangePassword}
                    errorProps={passwordError && <Error message={passwordMessage} />}
                />
                <Field 
                    title="Confirm Password"
                    placeholder=""
                    type="password"
                    required={true}
                    value={confirmPassword}
                    onChange={this._handleChangeConfirmPassword}
                    errorProps={confirmPasswordError && <Error message={confirmPasswordMessage} />}                
                />

               <Button title={'Sign In'}/>
            </form>
        </div>
      )
    }
}
