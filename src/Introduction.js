import React from "react";
import image from './profile.jpg';

function Introduction() {
    return(
        <div className="container0">
            <div>
                <img className="image" src={image} alt="profile" style={{height:40,borderRadius:20}}/>
            </div>
            <div>
                <h4 className="profile" style={{marginTop:'2vh'}}><a style={{color:'rgb(40, 20, 40'}} href="https://github.com/JatinRM">Jatin Mahakal</a></h4>
            </div>
        </div>
    )
}
export default Introduction;