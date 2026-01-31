import { getFilters } from "./buildFilterUrl";

export default function generateFilterTitle(searchParams){
    const filters = getFilters(searchParams)

    if (!filters?.length){
        return "All Games"
    }

    const titleMap = {
        'upperPrice': 'Under',
        'lowerPrice': 'Over',
        'onSale': 'On Sale',
    }

    const mapped = filters.map((filter) => {
        const {key, value} = filter;
        return({
            key: titleMap[key],
            value: value
        })
    })

    const lowPrice = mapped.find((x) => x.key === "Over");
    const highPrice = mapped.find((x) => x.key === "Under");
    let title = 'Games ';
    let formattedMap = mapped; 
    if (mapped.find((x) => x.key === "On Sale")){
        title += 'on Sale ';
        formattedMap = mapped.filter((x) => x.key !== 'onSale')
    }
    if (lowPrice && highPrice){
        title += `between $${lowPrice.value} and $${highPrice.value}`
    }
    else {
        const vals = formattedMap?.map((x) => x.key === 'On Sale' ? '' : `${x.key} $${x.value}`)
        title += vals.flat().join(' ');
    }
    return title;
}