import { useEffect, useState } from "react";

const useLocations = (url) => {
    const [locationData, setLocationData] = useState(null);

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

const usePopularCate = (url) => {
    const [popularCate, setPopularCate] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPopularCate(data))
            .catch(err => console.log(err))
    }, [url]);

    return popularCate;
};

const useCareerCode = (url) => {
    const [careerCode, setCareerCode] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCareerCode(data))
            .catch(err => console.log(err))
    }, [url]);

    return careerCode;
};

const useLatestNews = (url) => {
    const [latestNews, setLatestNews] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setLatestNews(data))
            .catch(err => console.log(err))
    }, [url]);

    return latestNews;
};

const useContact = (url) => {
    const [contact, setContact] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setContact(data))
            .catch(err => console.log(err))
    }, [url]);

    return contact
}

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

export { useLocations, useJobFilter, usePopularCate, useCareerCode, useLatestNews, useContact, useScrollWindow };