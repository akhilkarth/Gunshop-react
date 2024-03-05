import React from "react";
import { Button } from "react-bootstrap";
import Home from './home'
import Contact from './contact';
import Contact1 from './purchase';
import Handgun from './pistol1'; 
import Shotgun from './shoutgun';
import ARgun from './ar';


import {Route,Link,Routes} from 'react-router-dom'

function Wea1(){
  return(<div>
    <nav style={{padding:'15px'}}  class="navbar navbar-dark bg-dark">
            <Link to='/' class="nav-link" style={{color:'white',fontSize:'22px',paddingLeft:'9px'}}  >Guns <span class="sr-only">(current)</span></Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to='/' class="nav-link" style={{paddingLeft:'9px'}}>Collection <span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <Link to='/contact' class="nav-link" style={{paddingLeft:'9px'}} >Contact</Link>
              </li> 
              <li class="nav-item">
              <Link to='/purchase' class="nav-link" style={{paddingLeft:'9px'}}>Purchase</Link>
              </li>
            </ul><br/>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style={{paddingLeft:'9px'}}/>
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/pistol1' element={<Handgun/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/purchase' element={<Contact1/>}></Route>
        <Route path='/shoutgun' element={<Shotgun/>}></Route>
        <Route path='/ar' element={<ARgun/>}></Route>
    </Routes>
  </div>)
 };
export default Wea1