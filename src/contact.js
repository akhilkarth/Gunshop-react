import React from "react";
import { Button } from "react-bootstrap";
import user from './user-icon-1024x1024-dtzturco.png'
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
function Cpp(){
        return<div>
            <div class="card" style={{width: "18rem;"}}>
                <br/>
                <div class="text-center">
                    <img src={user}class="rounded" alt="..." style={{width:'300px', height:'300px'}}/>
                    <center><h2>User Profile</h2></center>
                </div>
                <br></br>
                <center>
                    {/* First and last name */}
                    <div class="input-group" style={{width:'40%'}}>
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="">First & Last name</span>
                        </div>
                        <input type='text' class="form-control"/>
                        <input type="text" class="form-control"/>
                    </div>
                    <br></br>

                    {/* Age */}
                    <div class="input-group mb-3" style={{width:'40%'}}>
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Age</span>
                        </div>
                        <input  type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                    </div>

                    {/* Gender */}
                    <div class="input-group mb-3" style={{width:'40%'}}>
                        <select class="custom-select" id="inputGroupSelect02">
                            <option selected>Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </select>
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
                    <input type="number" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
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
                    <br></br>

                    {/* Login */}
                    <Link to='#' style={{display:'block',width:'40%'}} class="nav-link btn-dark" >Login</Link>
                    <br></br>
                </center>
            </div>
    </div>
    }
export default Cpp