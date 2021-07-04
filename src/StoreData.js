import React from "react";

export default function StoreData(props){
let storeID = props.data.storeID;
let storeName = props.data.storeName;
let singleStoreId = props.id;

if (storeID === singleStoreId){    return(
<div className="StoreData">
    <p>Sale at {storeName}</p>
</div>)}

else return null;
}