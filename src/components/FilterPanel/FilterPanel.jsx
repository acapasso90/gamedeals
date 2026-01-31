import {useRef, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Offcanvas  from 'react-bootstrap/Offcanvas';
import CloseButton from 'react-bootstrap/CloseButton'
import './FilterPanel.css';
import { getFullFilters } from '../../utils/buildFilterUrl';

export default function FilterPanel({
    setFilters = () => console.log('setFilters function must be passed in'),
    searchParams
}){

    const filters = getFullFilters(searchParams);

    const [copyFilters, setCopyFilters] = useState(filters);
    const [show, setShow] = useState(false);
    const [error, setError] = useState(null);


    const formRef = useRef();
    formRef.current = copyFilters;

    const handleCheck = (e) => {
        const updatedFilters = copyFilters.filter((x) => x.key !== e.target.name);
        setCopyFilters([...updatedFilters, {key: 'onSale', value: e.target.checked ? '1' : null}])      
    }

    const onChange = (e) => {
        setError(null);
        const {value, name} = e.target;
        if (value === "e"){
            return;
        }
        else {
            const updatedFilters = copyFilters.filter((x) => x.key !== name);
            setCopyFilters([...updatedFilters, {key: name, value: value === "" ? null : value}])
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        let filterUrl = '';
        let filters = [];
        const lowPrice = copyFilters.find((x) => x.key === "lowerPrice")
        const highPrice = copyFilters.find((x) => x.key === "upperPrice")
        if ( !lowPrice.value || !highPrice.value || lowPrice?.value === '0' || parseInt(lowPrice?.value) < parseInt(highPrice?.value)){
            for (let [key, value] of formData.entries()) {
                let formattedValue = value;
                if (value === 'on'){
                    value = '1'
                }
                if (value === "off"){
                    value = null;
                }

                if (formattedValue && formattedValue !== ''){
                    filterUrl += filterUrl === '' ? `?${key}=${value}&` : `${key}=${value}&`;
                    filters.push({key: key, value: value})
                }
            }

            const filtersToDelete = copyFilters.filter((x) => !x.value);
            const filtersToAdd = copyFilters.filter((x) => x.value);

            filtersToDelete.forEach((filter) => {
                searchParams.delete(filter.key);
            })
            setFilters((prevParams) => {
                filtersToAdd.forEach((filter) => 
                    prevParams.set(filter.key, filter.value)
                );
                return prevParams;
            }, {replace: true})
        
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
            <Offcanvas show={show} className="filter-panel" backdrop >
                <Offcanvas.Header onHide={() => setShow(false)}>
                    All Filters
                    <Button variant="danger" onClick={() => setShow(false)}>
                        <i className="bi bi-x-lg" />
                    </Button>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Form ref={formRef} onSubmit={(e) => handleSubmit(e)}> 
                        <div className="d-flex">
                            <label htmlFor="onSale" className="pe-3"> On Sale</label>
                            <input 
                                checked={copyFilters?.find((x) => x.key === "onSale")?.value === '1'}
                                onChange={handleCheck}
                                name="onSale" 
                                type="checkbox" 
                            /> 
                        </div>  
                        <h5 className="pt-4"> Price</h5>
                        <div className="d-flex text-start justify-content-between"> 
                            <div className="input-container">
                                <input 
                                    value={copyFilters?.find((x) => x.key === "lowerPrice")?.value ?? ''} 
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
                                    value={copyFilters?.find((x) => x.key === "upperPrice")?.value ?? ''} 
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
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}