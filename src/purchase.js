import React from "react";
import { Button } from "react-bootstrap";
import user from './user-icon-1024x1024-dtzturco.png'
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
function Cpp1(){
        return<div>
            <div class="card" style={{width: "18rem;",backgroundColor:'black',color:'white'}}>
                <br/>
                <div class="text-center">
                    <img src={user}class="rounded" alt="..." style={{width:'300px', height:'300px'}}/>
                </div>
                <br></br>
                <center>
                    {/* First and last name */}
                    <div class="input-group mb-3" style={{width:'40%'}}>
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                        </div>
                        <input  type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    {/* Email */}
                    <div class="input-group mb-3" style={{width:'40%'}}>
                        <input type="text" class="form-control" placeholder="Enter Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <div class="input-group-append">
                            <span class="input-group-text" id="basic-addon2">@gmail.com</span>
                        </div>
                    </div>

                    {/* PhoneNo */}
                    <div class="input-group input-group-sm mb-3" style={{width:'40%'}}>
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Phone No</span>
                    </div>
                    <input type="number" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-large  "/>
                    </div>

                    {/* Country */}
                    <div class="input-group mb-3" style={{width:'40%'}}>
                        <select class="custom-select" id="inputGroupSelect02">
                            <option selected>Country</option>
                            <option value="1">AFGHANISTAN</option>
                            <option value="2">CHINA</option>
                            <option value="3">INDIA</option>
                            <option value="4">JAPAN</option>
                        </select>
                    </div>
                    {/* select Gun */}
                    <div class="input-group mb-3" style={{width:'40%'}}>
                        <select class="custom-select" id="inputGroupSelect02">
                            <option selected>Select Gun</option>
                            <option value="1">Pistol</option>
                            <option value="2">Shotgun</option>
                            <option value="3">AR gun</option>
                        </select>
                    </div>
                    <div>
                        {/* Login */}
                        <Link to='#' style={{display:'block',width:'40%'}} class="nav-link btn-dark" >Login</Link>
                    
                    </div>
                    
                    <div style={{marginTop:'10px'}}>
                    {/* Cancel */}
                    <Link to='/' style={{display:'block',width:'40%'}} class="nav-link btn-dark" >Cancel</Link>
                    </div>
                    <br></br>
                </center>
            </div>
    </div>
    }
export default Cpp1