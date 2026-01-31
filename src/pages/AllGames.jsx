import React, {useState, useEffect} from "react";
import classNames from "classnames";
import PaginationContainer from "../components/GameInfo/PaginationContainer";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from "react-bootstrap/Dropdown";
import Button from 'react-bootstrap/Button';
import fetchData from "../utils/fetchData";

import FilterPanel from "../components/FilterPanel/FilterPanel";
import generateFilterTitle from "../utils/generateFilterTitle";
import { useSearchParams } from "react-router-dom";
import {buildFilterUrl} from "../utils/buildFilterUrl";

const sortLinkArray = [
    {key: "Price", title: "Lowest Price"}, 
    {key: "Savings", title: "Savings"}, 
    {key: 'Release', title: "Release"}, 
    {key: 'Reviews', title: "Reviews"}, 
    {key: 'Title', title: "Title (Alphabetical)"}
]

export default function AllGames(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [pageTitle, setPageTitle] = useState('All Games');
    const [pageAmt, setPageAmt] = useState(0);
    const [sort, setSort] = useState('Savings')
    const [gameData, setGameData] = useState("");


    const page = searchParams.get('page') || 1;

    const filterUrl = buildFilterUrl(searchParams) ?? '?';

    useEffect(() => {
        let mounted = true;
        const sortKey = sortLinkArray.find((x) => x.title === sort)?.key;
        const apiURL = `https://www.cheapshark.com/api/1.0/deals${filterUrl}sortBy=${sortKey}&pageNumber=${parseInt(page) - 1}`;
        setGameData([])

        fetchData(apiURL, setGameData, mounted, setPageAmt)

        return function cleanup() {
            mounted = false
        }
    }, [sort, page, filterUrl]); 

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
        <PaginationContainer games={gameData} setPage={setSearchParams} currPage={page} totalPages={pageAmt} title={pageTitle}>
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