import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import "./Home.scss";

function Home (){
    return(
        <div className="home">
            <Navbar/>
            <Featured type="serie"/>
            <List/>
            <List/>
            <List/>
            <List/>
        </div>
    );
}

export default Home;
