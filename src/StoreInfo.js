import React, {useEffect, useState} from "react";
import axios from "axios";
import StoreData from "./StoreData";

export default function StoreInfo(props){
let id = props.data;
const [loaded, setLoaded] = useState(false);
const [storeData, setStoreData] = useState('');
const [length, setLength] = useState('');




function setData(response){
setStoreData(response.data);
setLoaded(true);
setLength(response.data.length);
}

function searchStores(){
  let mounted = true;
    let apiURL = `https://www.cheapshark.com/api/1.0/stores`;
    const cancelTokenSource = axios.CancelToken.source(); 
    if (mounted){
    axios.get(apiURL, {
      cancelToken: cancelTokenSource.token
    }).then(setData).catch(error => {
      console.log(error);
    });}
    return function cleanup(){
      mounted = false
      cancelTokenSource.cancel();
    }
} 


if(loaded){
  return(
        <span className="StoreInfo">

{storeData.slice(0, length).map(function(gameNum, index){
            return(<StoreData data={gameNum} id={id} key={index} />)})}
        </span>
    )}
else {searchStores();
 return "loading";}
}
