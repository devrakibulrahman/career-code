import { useEffect, useState } from "react";

const useLocations = (url) => {
    const [locationData, setLocationData] = useState([]);
    console.log(locationData);

    useEffect(() => {
        fetch(`${url}`)
            .then(res => res.json())
            .then(data => setLocationData(data))
            .catch(err => console.log(err))
    }, [url]);

    return locationData;
};

const useJobFilter = (url) => {
    const [filterData, setFilterData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setFilterData(data))
            .catch(err => console.log(err))
    }, [url]);

    return filterData;
};

const useScrollWindow = () => {
    const [winScroll, setWinScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 0){
                setWinScroll(true);
            }else{
                setWinScroll(false);
            };
        });
    }, []);

    return winScroll;
};

export { useLocations, useJobFilter, useScrollWindow };