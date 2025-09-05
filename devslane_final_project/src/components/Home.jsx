import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sort from "./Sort";
import ProductList from "./ProductList";
import { getProducts } from "../api";
import Loader from "./Loader";
import ProductNotFound from "./NotFound";
import { Link, useSearchParams } from "react-router-dom";

function Home() {

    const [data, setData] = useState([]);
    const [meta, setMeta] = useState({});
    const [loading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const params = Object.fromEntries([...searchParams]);
    const { page = 1, sort = "", search = "" } = params;


    useEffect(() => {
        async function fetchData() {

            try {
                let response = await getProducts({ sort, search, page });
                console.log(response);
                setData(response.data);
                setMeta(response.meta)
            } catch (err) {
                console.error(err.message);
                setData([]); // fallback to empty
            }
            setLoading(false);
        }
        fetchData();
    }, [sort, search, page]);

    const handleSearch = (search)=>{
        setSearchParams({...params, search: search, page: 1});
    }
    const handleSort = (sort)=>{
        setSearchParams({...params, sort: sort});
    }
    const handlePage = (page)=>{
        setSearchParams({...params, page: page});
    }
    return (
        <div className="flex flex-col justify-between min-h-[500px] max-w-6xl w-full bg-white rounded-lg shadow-lg px-12 py-12" >

            <div className="flex flex-col sm:flex-row justify-between mb-10 space-y-2 sm:space-y-0">
                <Search search={search} handleSearch={handleSearch} />
                <Sort sort={sort} handleSort={handleSort} />
            </div>

            {loading ? (
                <Loader />
            ) : data.length === 0 ? (
                <ProductNotFound search={search} onHome={true} />
            ) : (
                <ProductList data={data} />
            )}

            <div className="flex-end flex justify-start gap-1 mt-10">
                {Array.from({ length: meta.last_page }, (_, i) => (
                    <div onClick={()=>handlePage(i+1)} className={`w-[40px] text-white py-2 text-sm font-bold ${page !== (i + 1) ? 'bg-red-600' : 'bg-red-800'} flex items-center justify-center cursor-pointer`}>
                        {i + 1}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
