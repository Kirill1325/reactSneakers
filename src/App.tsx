import React, { useEffect, useState } from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MansShoes from './pages/MansShoes';
import Home from './pages/Home';
import Bag from './pages/Bag';
import Header from './components/Header';
import ProductPage from './pages/ProductPage';
import News from './pages/News';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MobileSearchWindow from './components/MobileSearchWindow';
import Clothes from './pages/Clothes';
import Accesories from './pages/Accessories';
import NewsPage from './pages/NewsPage';
import { useAppSelector } from './hooks/redux';

function App() {

    const { isNavbarvisible } = useAppSelector(state => state.navbarReducer)
    const { isSearchWindowVisible } = useAppSelector(state => state.searchWindowReducer)

    const [width, setWidth] = useState(0)
    const isMobile = width < 900

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth
            setWidth(newWidth)
        }

        window.addEventListener("resize", updateWindowDimensions)
        updateWindowDimensions()

        return () => window.removeEventListener("resize", updateWindowDimensions)

    }, [])

    return (
        <BrowserRouter>

            <div className='App'>
                {isNavbarvisible &&
                    <Navbar />
                }
                {isSearchWindowVisible &&
                    <MobileSearchWindow />
                }

                <div className='wrapper'>

                    <Header />

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route
                            path='/Bag'
                            element={
                                <Bag />}
                        />
                        <Route
                            path='/MansShoes'
                            element={
                                <MansShoes />}
                        />
                        <Route
                            path='/MansShoes/:id'
                            element={
                                <ProductPage
                                    isMobile={isMobile}
                                />}
                        />
                        <Route
                            path='/Clothes'
                            element={
                                <Clothes />}
                        />
                        <Route
                            path='/Clothes/:id'
                            element={
                                <ProductPage
                                    isMobile={isMobile}
                                />}
                        />
                        <Route path='/News' element={<News />} />
                        <Route
                            path='/Accesories'
                            element={
                                <Accesories />}
                        />
                        <Route
                            path='/News/:id'
                            element={<NewsPage />}
                        />
                        <Route
                            path='/Accesories/:id'
                            element={
                                <ProductPage
                                    isMobile={isMobile}
                                />}
                        />
                        {/* <Route
                            path='/Sales'
                            element={
                                <Sales
                                    products={salesProducts}
                                    setProducts={setSalesProducts}
                                    searchQuerry={searchQuerry}
                                    isMobile={isMobile}
                                />}
                        /> */}
                    </Routes>

                    <Footer />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;