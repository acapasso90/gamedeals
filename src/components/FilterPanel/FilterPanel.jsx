import {useRef, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Offcanvas  from 'react-bootstrap/Offcanvas';
import { OffcanvasBody, OffcanvasHeader } from 'react-bootstrap';

import './FilterPanel.css';

export default function FilterPanel({
    setFilters = () => console.log('setFilters function must be passed in'),
    filterData
}){

    const {filters} = filterData
    const [copyFilters, setCopyFilters] = useState(filters);
    const [show, setShow] = useState(false);
    const [error, setError] = useState(null);

    const formRef = useRef();
    formRef.current = copyFilters;

    const handleCheck = (e) => {
        const updatedFilters = 
        e.target.checked ? 
        [...copyFilters, {key: 'onSale', value: 'on'}]
        :
        copyFilters.filter((x) => x.key !== 'onSale');  
        setCopyFilters(updatedFilters)
    }

    const onChange = (e) => {
        setError(null);
        const {value, name} = e.target;
        if (value === "e"){
            return;
        }
        else {
            const updatedFilters = copyFilters.filter((x) => x.key !== name);
            if (value === ""){
                setCopyFilters(updatedFilters)
            }
            else {
                setCopyFilters([...updatedFilters, {key: name, value: value}])
            }
        }
    }

    // TODO - display error if lowerPrice is higher than higher price or vice versa and DO NOT SUBMIT. 
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        let filterUrl = '';
        let filters = [];
        const lowPrice = copyFilters.find((x) => x.key === "lowerPrice")
        const highPrice = copyFilters.find((x) => x.key === "upperPrice")
        if (parseInt(lowPrice?.value) < parseInt(highPrice?.value) || !lowPrice || !highPrice){
            for (let [key, value] of formData.entries()) {
                const formattedValue = value === "on" ? '1' : value;
                if (value !== ""){
                    filterUrl += filterUrl === '' ? `?${key}=${formattedValue}&` : `${key}=${formattedValue}&`;
                    filters.push({key: key, value: value})
                }
            }
            if (filterUrl){
                setFilters({url: filterUrl, filters: filters});
            }    
            setShow(false);
        }
        else {
            setError('Error: Min Price must be less than Max Price')
        }
    }

    return(
        <div>
            <Button variant="danger" onClick={() => setShow(!show)}>
                <i className="bi bi-toggles"/> Filters

            </Button>
            {show && 
                <div className="backdrop" />
            }
            <Offcanvas show={show} className="filter-panel bg-dark" >
                <OffcanvasHeader closeButton onHide={() => setShow(false)}>
                    All Filters
                </OffcanvasHeader>
                <OffcanvasBody>
                    <Form ref={formRef} onSubmit={(e) => handleSubmit(e)}> 
                        <div className="d-flex">
                            <label htmlFor="onSale" className="pe-3"> On Sale</label>
                            <input 
                                checked={copyFilters.find((x) => x.key === "onSale") }
                                onChange={handleCheck}
                                name="onSale" 
                                type="checkbox" 
                            /> 
                        </div>  
                        <h5 className="pt-4"> Price</h5>
                        <div className="d-flex text-start justify-content-between"> 
                            <div className="input-container">
                                <input 
                                    value={copyFilters.find((x) => x.key === "lowerPrice")?.value ?? ''} 
                                    name="lowerPrice" type="number"
                                    onChange={onChange} 
                                    aria-label="min price" 
                                    placeholder="min" 
                                />
                            </div>
                            <div>
                                to
                            </div>
                            <div className="input-container">
                               <input 
                                    value={copyFilters.find((x) => x.key === "upperPrice")?.value ?? ''} 
                                    name="upperPrice" 
                                    type="number" 
                                    onChange={onChange}
                                    aria-label="max price"
                                    placeholder="max"
                                />
                            </div>
                        </div>
                        <div className="error-text">
                            {error}
                        </div>
                        <div className='d-flex justify-content-end mb-2 mt-5'>
                            <Button variant="danger" type="submit">Save Filters</Button>
                        </div>
                    </Form>
                </OffcanvasBody>
            </Offcanvas>
        </div>
    )
}