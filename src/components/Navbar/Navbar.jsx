import CartWidget from "../CartWidget";
import Dropdown from "./NavBarComponents/Dropdown";
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getDocs, collection, getFirestore } from "firebase/firestore";
import "./style.css";

function Navbar() {
    const [categories, setCategories] = useState([]);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const db = getFirestore();
        const itemCollection = collection(db, "categories");
        getDocs(itemCollection)
            .then((snapshot) => {
                setCategories(
                    snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
                );
            });
    }, []);

    useEffect(() => {
        setIsDropdownVisible(false);
    }, [location]);

    const toggleDropdown = () => {
        setIsDropdownVisible(prevState => !prevState);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                    <li className="nav-item"><button className="btn nav-link btnProd dropdown-toggle" onClick={toggleDropdown}>Categorías</button></li>
                    </ul>
                    <Link className="btn btnh" to="./cart"><CartWidget /></Link>
                </div>
            </nav>
            {isDropdownVisible && <Dropdown categories={categories} />}
        </>
    );
}

export default Navbar;
