import React, {useState} from "react";

export default function StoreData(props){
const [storeURL, setStoreURL] = useState(null);
let storeID = props.data.storeID;
let storeName = props.data.storeName;
let singleStoreId = props.id;
let steamID = props.steam;
let formattedTitle = props.title.replace(":", "").replace(/__/g, "_");
let dashedName = formattedTitle.replace(/_/g, '-').replace(":", "").replace("---", "-");
let lowercaseName = dashedName.toLowerCase();
if (storeName === "Steam") { setStoreURL(`https://store.steampowered.com/app/${steamID}/${formattedTitle}`); }
else if (storeName === "Epic Games Store") {setStoreURL(`https://www.epicgames.com/store/en-US/p/${lowercaseName}`); }
else if (storeName === "Fanatical" ){
    if (formattedTitle.includes('Bundle')){
        setStoreURL(`https://www.fanatical.com/en/bundle/${dashedName}`)}
    else {setStoreURL(`https://www.fanatical.com/en/game/${dashedName}`)}; }
else if (storeName === "GamersGate") { setStoreURL(`https://www.gamersgate.com/product/${lowercaseName}`);} 

else if (storeName === "GreenManGaming") {
    setStoreURL(`https://www.greenmangaming.com/games/${dashedName}-pc`); }
else if (storeName === "GOG") {setStoreURL(`https://www.gog.com/game/${formattedTitle}`);}
else if (storeName === "Origin") {setStoreURL(`https://www.origin.com/usa/en-us/store/${dashedName}/${dashedName}`);}
else if (storeName === "Humble Store") {setStoreURL(`https://www.humblebundle.com/store/${lowercaseName}`);}
else if (storeName === "GameBillet") {setStoreURL(`https://www.gamebillet.com/${lowercaseName}`);}
else if (storeName === "Voidu") {setStoreURL(`https://www.voidu.com/en/${lowercaseName}`);}

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