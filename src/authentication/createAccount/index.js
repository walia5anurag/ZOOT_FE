import React, { Component } from 'react'
import '../createAccount/index.css'
import Button from '../../atoms/button'
import TextField from '@material-ui/core/TextField';

class createAccount extends Component{
    constructor(props){
        super(props)
        this.state={
           name:``,
           email:``,
           phNum:``,
           password:``
        }
    }
handleChange=(evt)=>{
    this.setState({
    [evt.target.name]:evt.target.value
})

}

createAccount=()=>{
console.log("hello")

}
    render(){
   
        return(
        <div id='mainDiv'>
           <div class='container'>
             <div class='headingContainer'>
                <div class='headingText'>
                        <span>ZOOT</span><br/>
                        
                </div>
                <div class='headingSubText'>
                    <span>CREATE YOUR ACCOUNT</span>
                </div>
              </div>
              <br/>
              <div class='form'>
                <TextField style={{width:'60%'}}
                    id="name_field"
                    name='name'
                    label="Name"
                    defaultValue=""
                    variant="filled"
                    onChange={this.handleChange}
                    />
                <br/>
                <br/>
                <TextField style={{width:'60%'}}
                    id="email_field"
                    name='email'
                    label="Email"
                    defaultValue=""
                    variant="filled"
                    onChange={this.handleChange}
                    />
                <br/>
                <br/>
                <TextField style={{width:'60%'}}
                    id="pass_field"
                    name='password'
                    label="Password"
                    type="password"
                    variant='filled'
                    onChange={this.handleChange}
                    />
                <br/>
                <br/>
                <TextField style={{width:'60%'}}
                        id="ph_field"
                        name='phNum'
                        label="Phone Number"
                        defaultValue=""
                        variant="filled"
                        onChange={this.handleChange}
                        />
                 <br/><br/><br/><br/>

            <Button text='Create Account' accountCreation={this.createAccount}/>
              <br/>
              <br/>
              <br/>
            </div>
            </div>

            

        </div>
        )
    }
}
export default createAccount