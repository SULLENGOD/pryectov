import { React, useEffect } from "react";
import { Navbar } from "../../components/Navbar/Navbar";
import { Carousel } from "../../components/Carousel/Carousel";
import { Lists } from "../../components/Lists/Lists";
// import { Search } from '../../components/Search/Search';
import './Home.css'

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  
  return (
    <>
      <Navbar />
      <div className="container-fluid mt-3" id="cont">
        <h1>Sullen Sense</h1>
        <div className="row">
            <div className="col-6 mb-3">
                <Carousel />
            </div>
            <div className="col-6">
                <Lists />
            </div>
            
            
        </div>
      </div>
    </>
  );
};

export { Home };
