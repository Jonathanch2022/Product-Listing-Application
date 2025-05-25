import { useState } from "react"
import BannerImage from "./images/StockingHeaders.png"



function Header(props) {

    const changeCategory = (e) => {

        props.setCategory(e.target.value.toUpperCase());
    }
    const getOptions = () => {
        let cataList = ["none"];
        let add = true;
        for (let t in props.productList) {
            add = true;
            for (let i in cataList) {

                if (cataList[i] == props.productList[t][5]) {
                    add = false;
                }
            }
            if (add == true) {

                cataList.push(props.productList[t][5]);
            }

        }
 
        let option = cataList.map((value, index) => <option key={index}>{value}</option>);
        return (

            option
        )
    }
   
    return (

        <header>
            <div className="header-img">
                <img src={BannerImage} alt="banner image"></img>
            </div>
            <div className="nav-bar">
                <label className="label-filter" htmlFor="filter">Filter</label>
                <select onChange={changeCategory} id="categoryFilter" className="filter">
                    {
                        getOptions()
                    }
                </select>
            </div>
        </header>
    )

}

export default Header