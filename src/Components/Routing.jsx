import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./Card";
import CardView from "./CardView";
import ErrorPaege from "./ErrorPaege";
import Home from "./Home";
import Navbar from "./Navbar";

function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/back" element={<Home />}></Route>
                    <Route path="/shoping" element={<Card />}></Route>
                    <Route path="/cardview" element={<CardView />}></Route>
                    <Route path="*" element={<ErrorPaege />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default Routing;
