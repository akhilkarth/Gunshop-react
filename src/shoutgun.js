import React from  "react";
import shot1 from './shotgun2.jpg';
import shot2 from './shotgun3.jpg';
import shot3 from './shotgun4.jpg';
import Pur from './purchase';
import {Route,Link,Routes} from 'react-router-dom'
function Shotguns(){
    return<div>
        <div class="card-deck" style={{marginTop:"30px"}}>
            <div class="card">
                <img class="card-img-top" src={shot1} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">KS-23</h5>
                    <p class="card-text">The KS-23 is a Soviet shotgun. Because it uses a rifled barrel, it is officially designated by the Russian military as a carbine. KS stands for Karabin Spetsialniy, "Special Carbine". It is renowned for its large caliber, firing a 23 mm shotgun shell, equating to 6.278 gauge using the British and American standards of shotgun gauges and approximately 4 gauge using the current European standards (based on the metric CIP tables), making it the largest-bore shotgun in modern use.</p>
                    <Link to='/purchase' style={{display:'inline'}} class="nav-link btn-dark" >Purchase</Link>
                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src={shot2} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Ithaca 37</h5>
                    <p class="card-text">The Ithaca 37, also known as the Ithaca Model 37, is a pump-action shotgun made in large numbers for the civilian, law enforcement and military markets. Based on a 1915 patent by firearms designer John Browning for a shotgun initially marketed as the Remington Model 17, purchase utilizes a novel combination ejection/loading port on the bottom of the gun which leaves the sides closed to the elements.Length	29.9 to 39.6 inches (760 to 1,010 mm)Barrel length	13 to 30 inches (330 to 760 mm)</p>
                    <Link to='/purchase' style={{display:'inline'}} class="nav-link btn-dark" >Purchase</Link>
                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src={shot3} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">High Standard Model 10</h5>
                    <p class="card-text">The High Standard Model 10 is a gas operated, semi-automatic shotgun that was manufactured by the High Standard Manufacturing Company of Hamden. It is easily recognized by its bullpup design, rotatable shoulder stock, and integrated flashlight. The basic design of the Model 10 shotgun was developed in the late 1950s by Alfred Crouch, a Santa Monica, California police sergeant.
In the mid 1960s, Crouch sold his design to the High Standard Manufacturing Company, who used their C1200 Supermatic shotgun as the basis for the first model</p>
                    <Link to='/purchase' style={{display:'inline'}} class="nav-link btn-dark" >Purchase</Link>
                </div>
            </div>
        </div>
        <Routes>
            <Route path="/purchase" element={<Pur/>}></Route>
        </Routes>
    </div>
}export default Shotguns