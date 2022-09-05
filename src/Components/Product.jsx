import React from "react";
import "./Home.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "./CardSlice";
import { productAdd } from "./ExtraSlce";

const Product = () => {
    const nevigate = useNavigate();
    const dispatch = useDispatch();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProduct(data);
        };
        fetchData();
    }, []);

    const handleAdd = (product) => {
        dispatch(add(product));
        toast("Success!! your cut is complite...Cheack the view card...", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    };
    const handleImg = (productImg) => {
        nevigate("/cardview", { replace: true });
        dispatch(productAdd(productImg));
    };
    return (
        <div className="home">
            {product.map((data, index) => {
                return (
                    <div className="box" key={index}>
                        <img onClick={() => handleImg(data)} src={data.image} alt="Food pic" />
                        <h5 className="title">{data.title}</h5>
                        <h5 className="price">
                            Price: <span>${data.price}</span>
                        </h5>
                        <button onClick={() => handleAdd(data)} className="button">
                            Add to card
                        </button>
                        <ToastContainer theme="dark" />
                    </div>
                );
            })}
        </div>
    );
};
export default Product;
