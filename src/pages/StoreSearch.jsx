import React, {useState, useEffect} from "react";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from "react-bootstrap/Dropdown";
import PaginationContainer from "../components/GameInfo/PaginationContainer";
import classNames from "classnames";
import fetchData from "../utils/fetchData";
import FilterPanel from "../components/FilterPanel/FilterPanel";
import generateFilterTitle from "../utils/generateFilterTitle";

export default function StoreSearch({
    storeId = "0",
    storeName = "Steam",
}){
    const [filters, setFilters] = useState({url: '?', filters: []});
    const [pageTitle, setPageTitle] = useState(`Games`);

    const [sort, setSort] = useState('Savings')
    const [gameData, setGameData] = useState("");
    const [pageNum, setPageNum] = useState(0);

    useEffect(() => {
        let mounted = true;
        if (mounted){
            setPageNum(0)
        }
        return function cleanup() {
            mounted = false
        }

    }, [sort, storeId, filters])

    useEffect(() => {
        let mounted = true;
        setGameData([])
        const apiURL = `https://www.cheapshark.com/api/1.0/deals${filters.url}&storeID=${storeId}&sortBy=${sort}&pageNumber=${pageNum}`;
        fetchData(apiURL, setGameData, mounted)

        return function cleanup() {
            mounted = false
        }
    }, [sort, pageNum, storeId, filters]); 

    useEffect(() => {
        let mounted = true;

        const title = generateFilterTitle(filters)
        if (mounted && title !== pageTitle){
            setPageTitle(title)
        }

        return function cleanup() {
            mounted = false
        }
    }, [filters])

    const navLinkArray = [
        {key: "Price", title: "Lowest Price"}, 
        {key: "Savings", title: "Savings"}, 
        {key: 'Release', title: "Release"}, 
        {key: 'Reviews', title: "Reviews"}, 
        {key: 'Title', title: "Title (Alphabetical)"}
    ]

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
        <PaginationContainer games={gameData} setPage={setPageNum} currPage={pageNum} totalPages={gameData.length} title={`${pageTitle} at ${storeName}`}>
                <div className="sort-row pb-4">
                    <FilterPanel setFilters={setFilters} filterData={filters} />
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