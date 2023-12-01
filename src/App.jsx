import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Column from './components/Column';
import Input from './components/Input';
import ResultElement from './components/ResultElement';
import Button from './components/Button';
import TipSelector from './components/TipSelector';

import dollarIcon from './assets/icon-dollar.svg';
import personIcon from './assets/icon-person.svg';

// const CalculationContext = React.createContext();

function App() {
  const [bill, setBill] = React.useState('');
  const [isCustomTip, setIsCustomTip] = React.useState(false);
  const [customTipAmount, setCustomTipAmount] = React.useState(0);
  const [numPeople, setNumPeople] = React.useState('');
  const [tipAmount, setTipAmount] = React.useState(0.0001);
  const [total, setTotal] = React.useState(0.0001);

  const resetAll = () => {
    console.log('shit, here we go agains');
    // setBill('');
    // setIsCustomTip(false);
    // setNumPeople('');
  };
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Header />
          <main className="card">
            <Column>
              <Input type="number" placeholder="0.00" rangeMin="1" icon={dollarIcon} mb={true}>
                Bill
              </Input>
              <TipSelector />
              <Input type="number" placeholder="0" icon={personIcon} rangeMin="1">
                Number of People
              </Input>
            </Column>
            <Column bg="contrast">
              <div className="column-container">
                <div className="result-wrapper">
                  <ResultElement tipAmount={tipAmount}>Tip Amount</ResultElement>
                  <ResultElement total={total}>Total</ResultElement>
                </div>
                <button onClick={resetAll} className="reset">
                  reset
                </button>
              </div>
            </Column>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
