import React, {useState, useEffect} from "react";
import classNames from "classnames";
import PaginationContainer from "../components/GameInfo/PaginationContainer";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from "react-bootstrap/Dropdown";
import fetchData from "../utils/fetchData";

import FilterPanel from "../components/FilterPanel/FilterPanel";
import generateFilterTitle from "../utils/generateFilterTitle";

export default function AllGames(){
    const [filters, setFilters] = useState({url: '?', filters: []});
    const [pageTitle, setPageTitle] = useState('All Games');

    const [sort, setSort] = useState('Savings')
    const [gameData, setGameData] = useState("");
    const [pageNum, setPageNum] = useState(0);


    const sortLinkArray = [
        {key: "Price", title: "Lowest Price"}, 
        {key: "Savings", title: "Savings"}, 
        {key: 'Release', title: "Release"}, 
        {key: 'Reviews', title: "Reviews"}, 
        {key: 'Title', title: "Title (Alphabetical)"}
    ]


    useEffect(() => {
        let mounted = true;
        if (mounted){
            setPageNum(0)
        }
        return function cleanup() {
            mounted = false
        }

    }, [sort, filters])

    useEffect(() => {
        let mounted = true;
        const sortKey = sortLinkArray.find((x) => x.title === sort)?.key;
        const apiURL = `https://www.cheapshark.com/api/1.0/deals${filters.url}sortBy=${sortKey}&pageNumber=${pageNum}`;
        setGameData([])
        fetchData(apiURL, setGameData, mounted)

        return function cleanup() {
            mounted = false
        }
    }, [sort, pageNum, filters]); 

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


    const navLinks = sortLinkArray.map((x) => 
        <Dropdown.Item 
            eventKey={x.title} 
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
        <PaginationContainer games={gameData} setPage={setPageNum} currPage={pageNum} totalPages={gameData.length} title={pageTitle}>
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