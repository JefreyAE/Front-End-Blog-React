import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { Header } from '../components/layouts/Header';
import { Nav } from '../components/layouts/Nav';
import { Sidebar } from '../components/layouts/Sidebar';
import { Footer } from '../components/layouts/Footer';
import { Home } from "../components/pages/Home";
import { Articles } from "../components/pages/articles/Articles";
import { Create } from "../components/pages/articles/Create";
import { Article } from "../components/pages/articles/Article";
import { Update } from "../components/pages/articles/Update";

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
                    <Route path="/search/:search" element={<Articles />}/>
                    <Route path="/article/:id" element={<Article />} />
                    <Route path="/article/update/:id" element={<Update />} />
                    <Route path="*" element={<div className="jumbo"><h1>Page not found</h1></div>}/>
                </Routes>
            </section>   
            <Sidebar/>
            <Footer />
        </BrowserRouter>
    )
}