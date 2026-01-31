const filterArray = [
    {key: 'onSale'},
    {key: 'lowerPrice'},
    {key: 'upperPrice'},
]

export function getFullFilters(searchParams){
 
    const  filters = filterArray.map((x) => {
        const value = searchParams ? searchParams.get(x.key) || null : null;
        return({...x, value: value});
    })

    return filters;
}

export function getFilters(searchParams){
    if (!searchParams?.size){
        return null;
    }
    let filters = getFullFilters(searchParams)
    filters = filters.filter((x) => x.value);
    return filters;
}

export function buildFilterUrl(searchParams){
    if (!searchParams?.size){
        return null;
    }
    const filters = getFilters(searchParams);

    let filterUrl = ''

    filters.forEach((x) => 
        filterUrl += filterUrl === '' ? `?${x.key}=${x.value}&` : `${x.key}=${x.value}&`  
    )

    return filterUrl
}