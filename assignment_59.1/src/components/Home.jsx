import React, { useState, useEffect } from "react";
import Search from "./Search";
import Sort from "./Sort";
import ProductList from "./ProductList";
import { getProducts } from "../api";
import Loader from "./Loader";
import ProductNotFound from "./NotFound";

function Home() {
    const [sort, setSort] = useState("default");
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {

            try {
                let products = await getProducts(query);

                if (sort === "price-asc") {
                    products.sort((a, b) => a.price - b.price);
                } else if (sort === "price-desc") {
                    products.sort((a, b) => b.price - a.price);
                } else if (sort === "rating") {
                    products.sort((a, b) => b.rating - a.rating);
                } else if (sort === "title") {
                    products.sort((a, b) => a.title.localeCompare(b.title));
                }

                setData(products);
            } catch (err) {
                console.error(err.message);
                setData([]); // fallback to empty
            }
            setLoading(false);
        }
        fetchData();
    }, [sort, query]);

    return (
        <div className="flex flex-col justify-between min-h-[500px] max-w-6xl w-full bg-white rounded-lg shadow-lg px-12 py-12">

            <div className="flex flex-col sm:flex-row justify-between mb-10 space-y-2 sm:space-y-0">
                <Search query={query} setQuery={setQuery} />
                <Sort sort={sort} setSort={setSort} />
            </div>

            {loading ? (
                <Loader />
            ) : data.length === 0 ? (
                <ProductNotFound query={query} onHome={true}/>
            ) : (
                <ProductList data={data} />
            )}

            <div className="flex-end flex justify-start gap-1 mt-10">
                <div className="w-[50px] text-white py-2 text-sm font-bold bg-red-600 flex items-center justify-center">
                    1
                </div>
                <div className="w-[50px] border-2 border-red-600 text-red-600 py-2 font-bold text-sm flex items-center justify-center">
                    2
                </div>
                <div className="w-[50px] border-2 border-red-600 text-red-600 py-2 font-bold text-lg flex items-center justify-center">
                    &rarr;
                </div>
            </div>
        </div>
    );
}

export default Home;
