import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Nav.css";
function Navbar() {
    const productData = useSelector((state) => state.card);

    return (
        <div>
            <nav>
                <ul>
                    <li className="text-1">
                        <Link className="text" to="/">
                            Shoping
                        </Link>
                    </li>
                    <li>
                        <span className="box">
                            <span className="box2">{productData.length}</span>
                        </span>
                        <Link className="box" to="/shoping">
                            <i className="fas fa-shopping-cart"></i>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
