import React, {useState, useEffect} from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from "react-bootstrap/Dropdown";
import PaginationContainer from "../components/GameInfo/PaginationContainer";
import classNames from "classnames";
import fetchData from "../utils/fetchData";
import FilterPanel from "../components/FilterPanel/FilterPanel";
import generateFilterTitle from "../utils/generateFilterTitle";
import { useSearchParams } from "react-router-dom";
import { buildFilterUrl } from "../utils/buildFilterUrl";

const navLinkArray = [
    {key: "Price", title: "Lowest Price"}, 
    {key: "Savings", title: "Savings"}, 
    {key: 'Release', title: "Release"}, 
    {key: 'Reviews', title: "Reviews"}, 
    {key: 'Title', title: "Title (Alphabetical)"}
]

export default function StoreSearch({
    storeId = "0",
    storeName = "Steam",
}){
    const [searchParams, setSearchParams] = useSearchParams();
    const [pageTitle, setPageTitle] = useState(`Games`);
    const [pageAmt, setPageAmt] = useState(0);

    const [sort, setSort] = useState('Savings')
    const [gameData, setGameData] = useState("");

    const page = searchParams.get('page') || 1;

    const filterUrl = buildFilterUrl(searchParams) ?? '?';
    

    useEffect(() => {
        let mounted = true;
        setGameData([])
        const apiURL = `https://www.cheapshark.com/api/1.0/deals${filterUrl}&storeID=${storeId}&sortBy=${sort}&pageNumber=${parseInt(page) - 1}`;
        fetchData(apiURL, setGameData, mounted, setPageAmt)

        return function cleanup() {
            mounted = false
        }
    }, [sort, page, storeId, filterUrl]); 

    useEffect(() => {
        let mounted = true;

        const title = generateFilterTitle(searchParams)
        if (mounted && title !== pageTitle){
            setPageTitle(title)
        }

        return function cleanup() {
            mounted = false
        }
    }, [searchParams])


    const navLinks = navLinkArray.map((x) => 
        <Dropdown.Item 
            eventKey={x.key} 
            key={x.key} 
            className={
                classNames({
                    disabled: sort === x.key
                })
            } 
            disabled={sort === x.key} >
            {x.title}
        </Dropdown.Item >
    )

    return(
        <PaginationContainer games={gameData} setPage={setSearchParams} currPage={page} totalPages={pageAmt} title={`${pageTitle} at ${storeName}`}>
                <div className="sort-row pb-4">
                    <FilterPanel setFilters={setSearchParams} searchParams={searchParams} />
                    <div className="d-flex">
                        <span className="pe-3">
                            Sort By:
                        </span>
                        <DropdownButton variant="danger" id='dropdown-button-drop-down-sort' className="sortDropdown" title={sort} onSelect={(e) => setSort(e)}>
                            {navLinks}
                        </DropdownButton>
                    </div>
                </div>
        </PaginationContainer>
    )

}