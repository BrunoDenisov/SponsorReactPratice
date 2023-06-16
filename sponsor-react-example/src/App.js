import React from "react";
import "./App.css";

var sponsors = [];

function HideForm(){
  var divHide = document.querySelector(".sponsorInput")

  if(divHide.style.display ==="none" || divHide.style.display===""){
    divHide.style.display ="block";
    return true;
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

function ShowSponsorList(event) {
  event.preventDefault();

  var sortedArray = JSON.parse(localStorage.getItem("array"));
  var sponsorList = document.getElementById("sponsorList");

  for (var i = 0; i < sortedArray.length; i++) {
    var sponsorObject = sortedArray[i];

    var li = document.createElement("li");
    li.innerHTML = `Name: ${sponsorObject.name}, Website: ${sponsorObject.website}`;
    sponsorList.appendChild(li);
  }
}

class Sellection extends React.Component{
  render(){ //How to call multiple fuctions with one click
    return(
    <>
    <p>
      <button onClick={HideForm} id="sAddButton">Add Sponsor</button>{" "}
      <button onClick={ShowSponsorList} id="sShowSponsorButton">Show all sponsors</button> 
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

function SponsorList(){
  return(
    <>
    <ul id="sponsorList">
      
    </ul>
    </>
  )
}

export default function MyApp(){
    return(
        <div>
          <Sellection />
          <AddSponsor />
          <SponsorList />
        </div>
    )
}