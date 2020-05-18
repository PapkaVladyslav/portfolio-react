import React from 'react';
import './App.scss';
import {Header} from "../src/Components/Header/Header";
import {Carousel} from "../src/Components/Carousel/Carousel";
import {Cards} from "./Components/Cards/Cards";
import {Contact} from "../src/Components/Contact/Contact";
import {Footer} from "../src/Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header>
      </Header>
      <Carousel>
      </Carousel>
      <Cards>
      </Cards>
      <Contact>
      </Contact>
      <Footer>
      </Footer>
    </div>
  );
}

export default App;
