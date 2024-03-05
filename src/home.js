import React from  "react";
import pistol from './pistol.jpg';
import shotgun from './shotgun1.jpg'
import argun from './ar2.jpg';
import Handgun from './pistol1';
import Shotgun from './shoutgun'; 
import ARgun from './ar';
import {Route,Link,Routes} from 'react-router-dom'
function guns(){
    return<div >
        <div class="card-deck" style={{marginTop:'30px'}}>
            <div class="card" style={{width: "15rem"}}>
                <img class="card-img-top" src={pistol} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Pistols</h5>
                    <p class="card-text">A pistol is a type of handgun, characterized by a barrel with an integral chamber. The word "pistol" is derived from the Middle French pistolet, meaning a small gun or knife, and first appeared in the English language c.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Range :</b> Short and Middle range</li>
                    <li class="list-group-item"><b>Type :</b> Semi-automatic pistol</li>
                </ul>
                <div class="card-body">
                    <Link to='/pistol1' style={{display:'inline'}} class="nav-link btn-dark" >More Guns</Link>
                </div>
            </div>

            <div class="card" style={{width: "15rem"}}>
                <img class="card-img-top" src={shotgun} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Shotgun</h5>
                    <p class="card-text">A pistol is a type of handgun, characterized by a barrel with an integral chamber. The word "pistol" is derived from the Middle French pistolet, meaning a small gun or knife, and first appeared in the English language c.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Range :</b> Short range</li>
                    <li class="list-group-item"><b>Type :</b> Shotgun</li>
                </ul>
                <div class="card-body">
                    <Link to='/shoutgun' style={{display:'inline'}} class="nav-link btn-dark" >More Guns</Link>
                </div>
            </div>

            <div class="card" style={{width: "18rem"}}>
                <img class="card-img-top" src={argun} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">AR gun</h5>
                    <p class="card-text">A pistol is a type of handgun, characterized by a barrel with an integral chamber. The word "pistol" is derived from the Middle French pistolet, meaning a small gun or knife, and first appeared in the English language c.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><b>Range :</b> Long Range</li>
                    <li class="list-group-item"><b>Type :</b> Assault rifle</li>
                </ul>
                <div class="card-body">
                    <Link to='/ar' style={{display:'inline'}} class="nav-link btn-dark" >More Guns</Link>
                </div>
            </div>
        </div>
        <Routes>
            <Route path='/pistol1' element={<Handgun/>}></Route>
            <Route path='/shoutgun' element={<Shotgun/>}></Route>
            <Route path='/ar' element={<ARgun/>}></Route>
        </Routes>
    </div>
}
export default guns;