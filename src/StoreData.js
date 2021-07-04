import React, {useState} from "react";

export default function StoreData(props){

let storeID = props.data.storeID;
let storeName = props.data.storeName;
let singleStoreId = props.id;
let image = <img src={`https://www.cheapshark.com/${props.data.images.logo}`} alt={storeID} className="storeLogo" />
let steamID = props.steam;
let formattedTitle = props.title.replace(":", "").replace(/__/g, "_");
let storeURL = null;
let dashedName = formattedTitle.replace(/_/g, '-').replace(":", "");
let lowercaseName = dashedName.toLowerCase();
console.log(lowercaseName)

if (storeName === "Steam") { storeURL = `https://store.steampowered.com/app/${steamID}/${formattedTitle}`; }
else if (storeName === "Epic Games Store") {storeURL = `https://www.epicgames.com/store/en-US/p/${lowercaseName}`; console.log(storeURL) }
else if (storeName === "Fanatical" ){
    if (formattedTitle.includes('Bundle')){
        storeURL = `https://www.fanatical.com/en/bundle/${dashedName}`}
    else {storeURL = `https://www.fanatical.com/en/game/${dashedName}`}; }
else if (storeName === "GamersGate") { storeURL = `https://www.gamersgate.com/product/${dashedName}`;} 
else if (storeName === "GreenManGaming") {storeURL = `https://www.greenmangaming.com/games/${dashedName}`;}
else if (storeName === "GOG") {storeURL = `https://www.gog.com/game/${formattedTitle}`;}
else if (storeName === "Origin") {storeURL = `https://www.origin.com/usa/en-us/store/${dashedName}/${dashedName}`;}
else if (storeName === "Humble Store") {storeURL = `https://www.humblebundle.com/store/${lowercaseName}`;}
else if (storeName === "WinGameStore") {storeURL = `https://www.wingamestore.com/product/9840/${dashedName}`;}
else if (storeName === "GameBillet") {storeURL = `https://www.gamebillet.com/${lowercaseName}`;}
else if (storeName === "Voidu") {storeURL = `https://www.voidu.com/en/${lowercaseName}` ;}

if (storeID === singleStoreId){ 
    if (storeURL) {  return(<span className="StoreData">
    <p>Sale at <strong>{storeName}</strong>  <br />
    <a href={storeURL} target="_blank"><button>Buy Now</button></a></p>
    </span>)}
    else { return(<span className="StoreData">
    <p>Sale at <strong>{storeName}</strong>  <br /></p>
    </span>) }    
}

else return null;
}