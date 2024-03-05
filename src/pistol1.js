import React from  "react";
import pis1 from './pistol2.jpg';
import pis2 from './pistol3.jpg';
import pis3 from './pistol4.jpg';
import {Route,Link,Routes} from 'react-router-dom'
import Pur from "./purchase";
function Pistols(){
    return<div >
        <div class="card-deck" style={{marginTop:"30px"}} >
            <div class="card">
                <img class="card-img-top" src={pis1} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">M1911</h5>
                    <p class="card-text">The Colt M1911 (also known as 1911, Colt 1911 or Colt Government in the case of Colt-produced models) is a single-action, recoil-operated, semi-automatic pistol chambered for the .45 ACP cartridge.[9] The pistol's formal U.S. military designation as of 1940 was Automatic Pistol, Caliber .45, M1911 for the original model adopted in March 1911, and Automatic Pistol, Caliber .45, M1911A1 for the improved M1911A1 model which entered service in 1926. The designation changed to Pistol, Caliber .45, Automatic, M1911A1 in the Vietnam War era</p>
                    <Link to='/purchase' style={{display:'inline'}} class="nav-link btn-dark" >Purchase</Link>
                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src={pis2} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Revolver</h5>
                    <p class="card-text">The Colt M1911 (also known as 1911, Colt 1911 or Colt Government in the case of Colt-produced models) is a single-action, recoil-operated, semi-automatic pistol chambered for the .45 ACP cartridge.[9] The pistol's formal U.S. military designation as of 1940 was Automatic Pistol, Caliber .45, M1911 for the original model adopted in March 1911, and Automatic Pistol, Caliber .45, M1911A1 for the improved M1911A1 model which entered service in 1926. The designation changed to Pistol, Caliber .45, Automatic, M1911A1 in the Vietnam War era.</p>
                    <Link to='/purchase' style={{display:'inline'}} class="nav-link btn-dark" >Purchase</Link>
                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src={pis3} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Arsenal Firearms AF1 "Strike One"</h5>
                    <p class="card-text">The Arsenal Firearms "Strike One" is a polymer or Ergal-framed, short recoil operated, striker-fired semi-automatic pistol introduced by the company Arsenal Firearms in 2012. The Strike One is known in Russia as the «Стриж» .The AF-1 Strike One uses a Bergmann System introduced in the Bergmann–Bayard pistol. Unlike the Browning system, the barrel does not tilt. It is locked with a Y-shaped part that during the recoil locks the barrel and bolt and halfway through purchase drops, releasing the barrel.Instead of tilting the barrel only moves in a straight line, thus increasing the accuracy.</p>
                    <Link to='/purchase' style={{display:'inline'}} class="nav-link btn-dark" >Purchase</Link>
                </div>
            </div>
        </div>
        <Routes>
            <Route path="/purchase" element={<Pur/>}></Route>
        </Routes>
    </div>
}export default Pistols