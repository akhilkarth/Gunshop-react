import React from  "react";
import ar1 from './ar2.jpg';
import ar2 from './ar3.jpg'; 
import ar3 from './ar4.jpg';
import Pur from './purchase';
import {Route,Link,Routes} from 'react-router-dom'
function AR(){
    return<div>
        <div class="card-deck" style={{marginTop:"30px"}}>
            <div class="card">
                <img class="card-img-top" src={ar1} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Kalashnikov AMB17</h5>
                    <p class="card-text">The AMB-17 abaritnyj Besshumnyj, lit.'Suppressed Small-sized Automatic Rifle is an integrally suppressed assault rifle that uses a heavy subsonic 9×39mm SP5 cartridge and armor-piercing SP6 cartridge. It was developed and manufactured in the late 2010s by Kalashnikov Concern, based on the Yevgeny Dragunov MA Compact Rifle and unveiled at the Russian Army Expo 2017 alongside the AM-17. The weapon is intended for use as a close quarters weapon, primarily for special units of the Russian Interior Ministry and the Russian Army to replace the AS Val and VSS Vintorez firearms.</p>
                    <Link to='/purchase' style={{display:'inline'}} class="nav-link btn-dark" >Purchase</Link>
                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src={ar2} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">Pindad AM1</h5>
                    <p class="card-text">The Pindad AM1 is an assault rifle produced by Pindad, which was first introduced in 2022.Unlike the Pindad SS2, this assault rifle is based on the M4 carbine and weights less.In 2023, Pindad conducted a product demonstration of the AM1 using a red dot sight with a range of 50 meters.The AM1 is chambered in 5.56×45mm NATO.[4] It can be equipped with a vertical grip[5] and various scopes on the picatinny rails. Place of orgin is Indonesia. Mass 3.25kg and Length 797mm. Sights is Iron sights, optical sights can be mounted on rail</p>
                    <Link to='/purchase' style={{display:'inline'}} class="nav-link btn-dark" >Purchase</Link>
                </div>
            </div>
            <div class="card">
                <img class="card-img-top" src={ar3} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">QBZ-95</h5>
                    <p class="card-text">The Type 95 automatic rifle or QBZ-95 is a bullpup assault rifle designed and manufactured by Norinco, and issued since 1995 as the service rifle for the People's Liberation Army, People's Armed Police and various paramilitary law enforcement agencies in the People's Republic of China. The QBZ-95 was first observed outside China on 1 July 1997, when the United Kingdom transferred the sovereignty of Hong Kong to the People's Republic of China. It is a modern weapon system in a bullpup configuration, where the weapon's action and magazine are located behind the grip and trigger assembly. </p>
                    <Link to='/purchase' style={{display:'inline'}} class="nav-link btn-dark" >Purchase</Link>
                </div>
            </div>
        </div>
        <Routes>
            <Route path="/purchase" element={<Pur/>}></Route>
        </Routes>
    </div>
}export default AR