import React, {useEffect, useState} from "react";
import axios from "axios";
import StoreData from "./StoreData";

export default function StoreInfo(props){
let id = props.data;
const [loaded, setLoaded] = useState(false);
const [storeID, setStoreID] = useState('');
const [storeData, setStoreData] = useState('');
const [length, setLength] = useState('');
let title = props.title;
let steamID = props.steam;



function setData(response){
setStoreData(response.data);
setLoaded(true);
setLength(response.data.length);
}

function searchStores(){
    let apiURL = `https://www.cheapshark.com/api/1.0/stores`;
    axios.get(apiURL).then(setData) 
}

useEffect(() => {
    let apiURL = `https://www.cheapshark.com/api/1.0/stores`;
    axios.get(apiURL).then(setData)
  }, [props]); 

if(loaded){
  return(
        <span className="StoreInfo">

{storeData.slice(0, length).map(function(gameNum, index){
            return(<StoreData data={gameNum} steam={steamID} title={title}  id={id} key={index} />)})}
        </span>
    )}
else {searchStores();
 return "loading";}
}
