import React, {useState} from "react";

export default function StoreData(props){

let storeID = props.data.storeID;
let storeName = props.data.storeName;
let singleStoreId = props.id;
let image = <img src={`https://www.cheapshark.com/${props.data.images.logo}`} alt={storeID} className="storeLogo" />
let steamID = props.steam;
let formattedTitle = props.title;
let storeURL = null;
let fanaticalName = formattedTitle.replace(/_/g, '-');

if (storeName === "Steam") { storeURL = `https://store.steampowered.com/app/${steamID}/${formattedTitle}`; }
else if (storeName === "Epic Games Stores") {storeURL = `https://www.epicgames.com/store/en-US/p/${formattedTitle}`;  }
else if (storeName === "Fanatical" ){
    if (formattedTitle.includes('Bundle')){
        storeURL = `https://www.fanatical.com/en/bundle/${fanaticalName}`}
    else {storeURL = `https://www.fanatical.com/en/game/${fanaticalName}`}
} 

if (storeID === singleStoreId){    return(<span className="StoreData">
    <p>Sale at <strong>{storeName}</strong>  <br />
    <a href={storeURL} target="_blank"><button>Buy Now</button></a></p>
    </span>)}

else return null;
}