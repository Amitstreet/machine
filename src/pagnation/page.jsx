import React from 'react'
import { useEffect, useState } from 'react'

function page() {
    let [prod, setprod] = useState([]);
    const [pagi, setpagei] = useState(0);
    const [index, seti] = useState(0);

    useEffect(async () => {
        try {
            let val = await fetch("https://dummyjson.com/products?limit=100");
            let nval = await val.json();
            console.log(nval);
            setprod(nval.products);
        }
        catch (error) {
            console.log(error);
        }
    }, [])


    let aprod = 100;
    let sprod = 6;
    let pagl = 6;
    let si = pagi;
    let endi = pagi + pagl;
    let pn = 100/6
    let arr = [];


    for (let i = 0; i < pn; i++) {
        arr.push(i);
    }

    let farr = arr.slice(si, endi)
    const handlenext = (e) => {
        setpagei((prev) => {
            seti(prev + pagl);
            return prev + pagl;
        })
    }

    const handleprev = (e) => {
        setpagei((prev) => {
            seti(prev - pagl);
            return prev - pagl;
        })
    }

    let start_idx = index * sprod;
    let end_idx = start_idx + sprod;
    prod = prod.slice(start_idx, end_idx)

    const handleindex = (e) => {
        let id = e.target.id;
        seti(id);
    }
    return (
        <div>
            <div className="container">
                <ul className="product-list">
                    {prod != {} && prod.map(product => (
                        <li key={product.id} className="product-item">
                            <img src={product.thumbnail} alt={product.title} />
                            <div className="product-info">
                                <h2>{product.title}</h2>
                                <p>Description: {product.description}</p>
                                <p>Price: ${product.price}</p>
                                <p>Discount: {product.discountPercentage}%</p>
                                <p>Rating: {product.rating}</p>
                                <p>Stock: {product.stock}</p>
                                <p>Brand: {product.brand}</p>
                                <p>Category: {product.category}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <div className="pagination">
                    {si != 0 && <a href="javascript:void(0)" className="first" onClick={handleprev}>
                        prev
                    </a>}
                    {
                        farr.map((ele, idx) => {
                            return <a href="javascript:void(0)" onClick={handleindex} className={ele == index ? "page active" : "page"} id={ele}>
                                {ele}
                            </a>
                        })
                    }
                    {farr.length > pagl - 1 && <a href="javascript:void(0)" onClick={handlenext} className="first">
                        Next
                    </a>}

                </div>
            </div>
        </div>
    )
}
export default page