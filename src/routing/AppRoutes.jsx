import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Header } from '../components/layouts/Header';
import { Nav } from '../components/layouts/Nav';
import { Sidebar } from '../components/layouts/Sidebar';
import { Footer } from '../components/layouts/Footer';
import { Home } from "../components/pages/Home";
import { Articles } from "../components/pages/articles/Articles";
import { Create } from "../components/pages/articles/Create";

export const AppRoutes = () => {
    return(
        <BrowserRouter>
            <Header />
            <Nav />
            <section id="content" className="content">
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/articles" element={<Articles />}/>
                    <Route path="/new-article" element={<Create />}/>
                </Routes>
            </section>   
            <Sidebar/>
            <Footer />
        </BrowserRouter>
    )
}