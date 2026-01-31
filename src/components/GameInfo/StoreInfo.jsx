import React from "react";
import { useStoreContext } from "../../context/StoreContext";

export default function StoreInfo({storeId = '0'}){
    const {findStore} = useStoreContext();
    const storeData = findStore(storeId)
    const storeName = storeData?.storeName;

    if (!storeName){
        return null
    }

    const storeIcon = storeData?.images?.icon;

    const storeImg = storeIcon && <img className="store-img ps-2" src={`https://www.cheapshark.com/${storeData.images.icon}`} alt={storeName}/>;


    return(
        <span className="store-display">
            {storeName} {storeImg}
        </span>
    )
}
