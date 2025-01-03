import "./App.css";
import React, { useEffect, useState } from 'react';
import Steps from './components/Steps';
import Rules from './components/Rules';
import Score from './components/Score';
import WebApp from "@twa-dev/sdk";

function App() {
  
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    WebApp.ready();
    WebApp.expand();
    WebApp.disableVerticalSwipes();
    WebApp.setHeaderColor("#1f3756");
    WebApp.setBottomBarColor("#1f3756");

    WebApp.CloudStorage.getItem("score", (error, result) => {
      if (result) {
        setScore(Number(result));
      } else if(error) {
        console.error("error occured while getting score: ", error);
        setScore(0);
      }
    });
  }, []);

  return ( 
    <div className="app">
      <Score score={score}/>
      <Steps score={score} setScore={setScore}/>
      <Rules/>
    </div>
  );
}

export default App;
