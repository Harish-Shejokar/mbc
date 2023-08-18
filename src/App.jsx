import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import FirstSection from "./Components/FirstSection/FirstSection";
import Button from "./Components/MessagesBox/Button";
import SecondSection from "./Components/SecondSection/SecondSection";
import ThirdSection from "./Components/ThirdSection/ThirdSection";

function App() {
  return (
    <>
      <div className="">
        <Header />
        <FirstSection />
        {/* <SecondSection />
        <ThirdSection /> */}
      </div>
      <Button />
    </>
  );
}

export default App;
