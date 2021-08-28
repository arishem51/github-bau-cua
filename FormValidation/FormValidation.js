import React, { Component } from 'react'
import './FormValidation.css'
import Swal from 'sweetalert2';
export default class FormValidation extends Component {
    state= {
        values:{
            firstName:'',
            userName:'',
            lastName:'',
            email:'',
            password:'',
            passwordConfirm:'',
        },
        errors:{
            firstName:'',
            userName:'',
            lastName:'',
            email:'',
            password:'',
            passwordConfirm:'',
        }
    }
    handleChange = (event)=>{
        let{name,value,type} = event.target; 
        let valuesUpdate = {...this.state.values,[name]:value};
        let errosUpdate = {...this.state.errors};
        if(value.trim() === ''){
            errosUpdate[name] =  name + " không được bỏ trống"
        }else{
            errosUpdate[name] =  ""
        }
        if(type === 'email'){
            let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(!regexEmail.test(value)){
                errosUpdate[name] = name + " không hợp lệ"
            }else{
                errosUpdate[name] = ""
            }
        }

        if(name === 'passwordConfirm'){
            if(value === valuesUpdate['password']){
                errosUpdate[name] = ''
            }else{
                errosUpdate[name] = name +" không đúng "
            }
        }
        this.setState({
            values : valuesUpdate,
            errors: errosUpdate
        })
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        let {values,errors} = this.state;
        let valid = true;
        let profileContent = '';
        for(let key in values){
            if(values[key] === ''){
                valid = false
            }
            profileContent += `<p><b>${key} : ${values[key]}</b></p>`
        }
        for(let key in errors){
            if(errors[key] !== ''){
                valid = false
            }
        }
        if(valid === false){
            alert("Dữ liệu chưa hợp lệ")
            return;
        }else{
            Swal.fire({
                title: 'Your Profile!',
                html: profileContent,
                icon: 'success',
                confirmButtonText: 'Cool'
              })
        }
    }
    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: '#EEEEEE', display: 'flex', justifyContent: 'center' }}>
                <form onSubmit={this.handleSubmit} style={{ fontSize: 'font-family: "Google Sans", "Noto Sans Myanmar UI", arial, sans-serif', width: "600px" }} className=" bg-white p-5 m-5" >
                    <h1 className="text-center mt-0 mb-5">User Profile</h1>
                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input type="text" required name="firstName" onChange={this.handleChange}   value={this.state.values.firstName}/>
                                <span className="highlight" />
                                <span className="bar" />
                                <label>FirstName</label>
                                <span className="text text-danger">{this.state.errors.firstName}</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input type="text" required name="lastName"  onChange={this.handleChange}   value={this.state.values.lastName}/>
                                <span className="highlight" />
                                <span className="bar" />
                                <label>LastName</label>
                                <span className="text text-danger">{this.state.errors.lastName}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="group">
                                <input  type="text" name="userName" required onChange={this.handleChange}   value={this.state.values.userName}/>
                                <span className="highlight" />
                                <span className="bar" />
                                <label>userName</label>
                                <span className="text text-danger">{this.state.errors.userName}</span>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="group">
                                <input type="email" name="email" required onChange={this.handleChange}   value={this.state.values.email}/>
                                <span className="highlight" />
                                <span className="bar" />
                                <label>email</label>
                                <span className="text text-danger">{this.state.errors.email}</span>

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <div className="group">
                                <input name="password" type="password" required onChange={this.handleChange}  value={this.state.values.password}/>
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Password</label>
                                <span className="text text-danger">{this.state.errors.password}</span>

                            </div>

                        </div>
                        <div className="col-6">
                            <div className="group">
                                <input name="passwordConfirm" type="password" required onChange={this.handleChange}  value={this.state.values.passwordConfirm}/>
                                <span className="highlight" />
                                <span className="bar" />
                                <label>Password Confirm</label>
                                <span className="text text-danger">{this.state.errors.passwordConfirm}</span>

                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <button className="btn text-white bg-dark w-100 col-12" style={{ fontSize: 25 }}>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}
