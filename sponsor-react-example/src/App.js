import React from "react";
import "./App.css";

var sponsors = [];

function HideForm(){
  var divHide = document.querySelector(".sponsorInput")

  if(divHide.style.display ==="none" || divHide.style.display===""){
    divHide.style.display ="block";
  } else {
    divHide.style.display="none";
  }
}

function AddToSponsors(event){
  event.preventDefault();
    var inputName = document.getElementById("sName").value;
    var inputWebsite = document.getElementById("sWebsite").value;

    var sponsorObject = {
        name : inputName,
        website : inputWebsite
    }

    sponsors.push(sponsorObject);

    localStorage.setItem("array", JSON.stringify(sponsors));

    console.log(JSON.parse(localStorage.getItem("array")));
}

class Sellection extends React.Component{
  render(){
    return(
    <>
    <p>
      <button onClick={HideForm} id="sAddButton">Add Sponsor</button>{" "}
      <button id="sShowSponsorButton">Show all sponsors</button>
    </p>
    </>
    )
    
  }
}

function AddSponsor(){
    return(
      <>
        <div className="sponsorInput">
          <form id="sForm">
            <label htmlFor="sName">Sponsor name:</label>
            <br />
            <input type="text" name="sName" id="sName" />
            <br />
            <label htmlFor="sWebsite">Sponsor website:</label>
            <br />
            <input type="text" name="sWebsite" id="sWebsite" />
            <br />
            <button onClick={AddToSponsors} id="sFormButtonConfirm">Confirm</button>{" "}
            <button id="sFormButtonCancel">Cancel</button>
          </form>
        </div>  
      </>
    );
}

export default function MyApp(){
    return(
        <div>
          <Sellection />
          <AddSponsor />
        </div>
    )
}