import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "./CardSlice";
import "./Cardview.css";

function CardView() {
    const oneProduct = useSelector((state) => state.productView);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleback = () => {
        navigate("/back", { replace: true });
    };
    const handleCut = (ProductCut) => {
        dispatch(add(ProductCut));
        toast("Success!! your cut is complite...", {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
        // setTimeout(() => {
        //     navigate("/", { replace: true });
        // }, 3000);
    };

    return (
        <div className="product-page">
            {oneProduct.map((data, index) => {
                return (
                    <div className="page-1" key={index}>
                        <div className="img">
                            <img src={data.image} alt="poto" />
                        </div>
                        <div className="title-page">
                            <h3 className="ti">
                                <span>Title:</span> {data.title}
                            </h3>
                            <h3 className="tit">
                                <span>Description:</span> {data.description}
                            </h3>
                            <h2 className="cat">
                                <span>Category:</span> {data.category}
                            </h2>
                            <h1 className="rat">
                                <span>Rating:</span> {data.rating.rate}
                            </h1>
                            <h1 className="rat-c">
                                <span>Rating Count:</span> {data.rating.count}*
                            </h1>
                            <h3 className="up">
                                <span>Unit Price:</span> ${data.price}
                            </h3>
                            <button onClick={handleback} className="btb">
                                Back Page
                            </button>
                            <button onClick={() => handleCut(data)} className="btb-1">
                                Add To Cut
                            </button>
                            <ToastContainer theme="dark" />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default CardView;
