import React from "react";
import ReactLoading from 'react-loading';

import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ResultOfWork from './components/ResultOfWork';
import OurProjects from './components/OurProjects';
import Directions from './components/Directions';
import BackToTop from 'react-back-to-top-button';

function App() {
    const [showWelcome, setShowWelcome] = React.useState(true);

    setTimeout(() => setShowWelcome(false), 850);

    return (
        <div className="App">
            {
                showWelcome ? (
                    <ReactLoading type={"bubbles"} color={"white"} height={'10%'} width={'10%'} className="preloader"/>
                ) : (
                    <>
                        <Header />
                        <Main />
                        <OurProjects />
                        <Directions />
                        <AboutUs />
                        <ResultOfWork />
                        <Footer />
                        <BackToTop
                            showAt={1000}
                            speed={2000}
                            easing="easeOutSine"
                            style={{
                                background: 'transparent',
                                color: 'black',
                            }}
                        >
                            <div className="ss-go-top">
                                <a className="smoothscroll" title="Back to Top" href="#top">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M12 0l8 9h-6v15h-4v-15h-6z" />
                                    </svg>
                                </a>
                            </div>
                        </BackToTop>
                    </>
                )}
        </div>
    );
}

export default App;
