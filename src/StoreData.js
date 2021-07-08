import React from "react";

export default function StoreData(props){

let storeID = props.data.storeID;
let storeName = props.data.storeName;
let singleStoreId = props.id;


if (storeID === singleStoreId){ 
   return(<span className="StoreData">
    <p>Sale at <strong>{storeName}</strong>  <br /></p>
    </span>) }    


else {return("");}
}