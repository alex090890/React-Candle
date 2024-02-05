import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './styles.scss';

function App() {
  const [height, setHeight] = useState(80);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const makeCandleSmaller = () => {
    if (height > 10) {
      setHeight((prev) => prev - 10);
    }
  };

  useEffect(() => {
    if (isButtonClicked) {
      const intervalId = setInterval(() => {
        makeCandleSmaller();
      }, 2000); // 3000ms = 1 second

//      const checkHeight = setInterval(() => {
  //      if (height <= 100 || !isButtonClicked) {
    //      clearInterval(intervalId);
      //    clearInterval(checkHeight);
        //}
    //  }, 100);

   
            return () => {
         clearInterval(intervalId);
  //      clearInterval(checkHeight);
      };
    }
  }, [isButtonClicked]);

 

  return (
    <>
      <div className="block">
        <div>
          <button onClick={() => setIsButtonClicked((prev) => !prev)}>Make candle smaller</button>
        </div>
        <div className="block candleContainer">
          <div className="candle" style={{ height: `${height}%` }}>
            <div className="flame">
              <div className="shadows" />
              <div className="top" />
              <div className="middle" />
              <div className="bottom" />
            </div>
            <div className="wick" />
            <div className="wax" style={{ height: `${height}%` }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;