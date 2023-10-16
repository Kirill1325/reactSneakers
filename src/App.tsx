import React, { useEffect, useState } from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MansShoes from './pages/MansShoes';
import Home from './pages/Home';
import Bag from './pages/Bag';
import Header from './components/Header';
import ProductPage from './pages/ProductPage';
import mansShoes from './dataset/Shoes'
import clothes from './dataset/Clothes';
import { IProduct } from './types/types';
import News from './pages/News';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MobileSearchWindow from './components/MobileSearchWindow';
import Clothes from './pages/Clothes';
import Accesories from './pages/Accesories';
import accesories from './dataset/Accesories'
import Sales from './pages/Sales';
import SizeGuide from './components/SizeGuide';

function App() {

    // const [shoes, setShoes] = useState<IProduct[]>(mansShoes)
    // const [allClothes, setAllClothes] = useState<IProduct[]>(clothes)
    // const [allAccesories, setAllAccesories] = useState<IProduct[]>(accesories)

    const shoesState = localStorage.getItem('SHOES_STATE')
    const [shoes, setShoes] = useState<IProduct[]>(shoesState === null ? MansShoes : JSON.parse(shoesState))

    useEffect(() => {
        const data = localStorage.getItem('SHOES_STATE')
        if (data !== null) setShoes(JSON.parse(data))
    }, [])

    useEffect(() => {
        localStorage.setItem('SHOES_STATE', JSON.stringify(shoes))
    }, [shoes])


    const clothesState = localStorage.getItem('CLOTHES_STATE')
    const [allClothes, setAllClothes] = useState<IProduct[]>(clothesState === null ? clothes : JSON.parse(clothesState))

    useEffect(() => {
        const data = localStorage.getItem('CLOTHES_STATE')
        if (data !== null) setAllClothes(JSON.parse(data))
    }, [])

    useEffect(() => {
        localStorage.setItem('CLOTHES_STATE', JSON.stringify(allClothes))
    }, [allClothes])


    const accesoriesState = localStorage.getItem('ACCESORIES_STATE')
    const [allAccesories, setAllAccesories] = useState<IProduct[]>(accesoriesState === null ? accesories : JSON.parse(accesoriesState))

    useEffect(() => {
        const data = localStorage.getItem('ACCESORIES_STATE')
        if (data !== null) setAllAccesories(JSON.parse(data))
    }, [])

    useEffect(() => {
        localStorage.setItem('ACCESORIES_STATE', JSON.stringify(allAccesories))
    }, [allAccesories])


    const [isNavbarShown, setIsNavbarShown] = useState(false)
    const [isSearchWindowShown, setIsSearchWindowShown] = useState(false)
    const [isSizeGuideShown, setIsSizeGuideShown] = useState(false)

    const [searchQuerry, setSearchQuerry] = useState('')

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

    const productsInBag = shoes.filter(product =>
        product.sizes.some(size => size.inBag)
    ).concat
        (allClothes.filter(product =>
            product.sizes.some(size => size.inBag)
        )).concat
        (allAccesories.filter(product =>
            product.sizes.some(size => size.inBag)
        ))

    // useEffect(() => {
    //     console.log(isMobile)
    // }, [isMobile])

    return (
        <BrowserRouter>

            <div className='App'>
                {isNavbarShown &&
                    <Navbar
                        setIsNavbarShown={setIsNavbarShown}
                    />
                }
                {isSearchWindowShown &&
                    <MobileSearchWindow
                        products={shoes.concat(allClothes).concat(allAccesories)}
                        value={searchQuerry}
                        setState={setSearchQuerry}
                        setIsSearchWindowShown={setIsSearchWindowShown}
                    />
                }

                <div className='wrapper'>

                    <Header
                        shoes={shoes}
                        setShoes={setShoes}
                        allClothes={allClothes}
                        setAllClothes={setAllClothes}
                        allAccesories={allAccesories}
                        setAllAccesories={setAllAccesories}
                        searchQuerry={searchQuerry}
                        setSearchQuerry={setSearchQuerry}
                        isMobile={isMobile}
                        setIsNavbarShown={setIsNavbarShown}
                        setIsSearchWindowShown={setIsSearchWindowShown}
                        productsInBag={productsInBag}

                    />

                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route
                            path='/Bag'
                            element={
                                <Bag
                                    productsInBag={productsInBag}
                                    setShoes={setShoes}
                                    setAllClothes={setAllClothes}
                                    setAllAccesories={setAllAccesories}
                                    isMobile={isMobile}
                                />}
                        />
                        <Route
                            path='/MansShoes'
                            element={
                                <MansShoes
                                    products={shoes}
                                    setProducts={setShoes}
                                    searchQuerry={searchQuerry}
                                    isMobile={isMobile}

                                />}
                        />
                        <Route
                            path='/MansShoes/:id'
                            element={
                                <ProductPage
                                    setShoes={setShoes}
                                    setAllClothes={setAllClothes}
                                    setAllAccesories={setAllAccesories}
                                    isMobile={isMobile}
                                    isSizeGuideShown={isSizeGuideShown}
                                    setIsSizeGuideShown={setIsSizeGuideShown}
                                />}
                        />
                        <Route
                            path='/Clothes'
                            element={
                                <Clothes
                                    products={allClothes}
                                    setProducts={setAllClothes}
                                    searchQuerry={searchQuerry}
                                    isMobile={isMobile}
                                />}
                        />
                        <Route
                            path='/Clothes/:id'
                            element={
                                <ProductPage
                                    setShoes={setShoes}
                                    setAllClothes={setAllClothes}
                                    setAllAccesories={setAllAccesories}
                                    isMobile={isMobile}
                                    isSizeGuideShown={isSizeGuideShown}
                                    setIsSizeGuideShown={setIsSizeGuideShown}
                                />}
                        />
                        <Route path='/News' element={<News />} />
                        <Route
                            path='/Accesories'
                            element={
                                <Accesories
                                    products={allAccesories}
                                    setProducts={setAllAccesories}
                                    searchQuerry={searchQuerry}
                                    isMobile={isMobile}
                                />}
                        />
                        <Route
                            path='/Accesories/:id'
                            element={
                                <ProductPage
                                    setShoes={setShoes}
                                    setAllClothes={setAllClothes}
                                    setAllAccesories={setAllAccesories}
                                    isMobile={isMobile}
                                    isSizeGuideShown={isSizeGuideShown}
                                    setIsSizeGuideShown={setIsSizeGuideShown}
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