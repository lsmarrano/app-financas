import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";
import { Header } from "../../components/Header";
import { MainContainer } from "../../components/MainContainer";
import React, { useContext } from 'react';

export function DefaultLayout() {

    
   
    return (
        <LayoutContainer>
      
                <Header />
                <Outlet />  
              
        </LayoutContainer>
    )
}