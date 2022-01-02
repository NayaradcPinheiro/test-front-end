import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";


const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<Home/>}/>
          {/* <Route path={"/:charId"} element={<Characters/>}/> */}
         
        </Routes>
      </BrowserRouter>
    );
  };

  export default Router;