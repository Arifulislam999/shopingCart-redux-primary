import React, { useState } from "react";
import "./Card.css";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "./CardSlice";
import { useNavigate } from "react-router-dom";
import { productAdd } from "./ExtraSlce";

function Card() {
    const cardData = useSelector((state) => state.card);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const [mul, setMul] = useState(1);

    const handleChange = (e) => {
        if (e.target.value === 0 || e.target.value === null) {
            setMul(1);
        } else {
            setMul(e.target.value);
        }
    };
    const handleRemove = (data) => {
        dispatch(remove(data));
        // console.log(data);
        // console.log(remove(data));
    };
    const handleBack = () => {
        navigate("/back", { replace: true });
    };
    const handleview = (data) => {
        navigate("/cardview", { replace: true });
        dispatch(productAdd(data));
    };
    return (
        <div className="card">
            <h2 className="tx">Your Card Item List Here....</h2>
            <div className="top">
                <span className="img">Image</span>
                <span className="product">Product Name</span>
                <span className="model">Model</span>
                <span className="qua">Quantity</span>
                <span className="unit">Unit Price</span>
                <span className="total">Total</span>
            </div>
            {cardData.map((data, index) => {
                return (
                    <div className="Box" key={index}>
                        <img onClick={() => handleview(data)} src={data.image} alt="poto" />
                        <h4 className="desc">{data.title}</h4>
                        <h4 className="cata">{data.category}</h4>
                        <div className="inp">
                            <input onChange={handleChange} className="in" type="text" value={mul} />
                        </div>
                        <h3 className="pri"> ${data.price}</h3>
                        <h3 className="priee"> ${data.price * mul}</h3>
                        <button onClick={() => handleRemove(data.id)} className="bt">
                            Remove
                        </button>
                    </div>
                );
            })}

            <div className="all">
                <h2>Total Amount: NaN</h2>
                <button className="bttt">Cut Shoping</button>

                <button onClick={handleBack} id="btt">
                    Back
                </button>
            </div>
        </div>
    );
}

export default Card;
