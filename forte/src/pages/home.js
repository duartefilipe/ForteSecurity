import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Head from '../components/head';
import Carousel from '../components/carousel';
import Home from '../components/body';
import Footer from '../components/footer';

function App(){
    return(
        <React.Fragment>
        <Head/>
        <div><Carousel /></div>
        <Home/>
        <Footer/>
        </React.Fragment>
    );
}

export default App;