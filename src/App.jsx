import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import FirstSection from "./Components/FirstSection/FirstSection";
import Button from "./Components/MessagesBox/Button";
import SecondSection from "./Components/SecondSection/SecondSection";
import ThirdSection from "./Components/ThirdSection/ThirdSection";
import FourthSection from "./Components/FourthSection/FourthSection";
import FifthSection from "./Components/FifthSection/FifthSection";
import SixthSection from "./Components/SixthSection/SixthSection";
import Seventh from "./Components/SeventhSection/Seventh";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <Seventh />
      </div>
      <Button />
    </>
  );
}

export default App;
