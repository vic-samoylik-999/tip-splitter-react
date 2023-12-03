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
  const [isZeroPeople, setIsZeroPeople] = React.useState(true);
  const [tipAmount, setTipAmount] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setIsZeroPeople(numPeople >= 1 ? false : true);
    setTotal(isZeroPeople ? 0 : bill / numPeople);
  }, [bill, numPeople, total, isZeroPeople]);

  const resetAll = () => {
    setBill('');
    setIsCustomTip(false);
    setNumPeople('');
  };
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Header />
          <main className="card">
            <Column>
              <Input
                value={bill}
                handler={setBill}
                type="bill"
                placeholder="0.00"
                rangeMin="1"
                icon={dollarIcon}
                mb={true}
              >
                Bill
              </Input>
              <TipSelector />
              <Input
                value={numPeople}
                handler={setNumPeople}
                type="numPeople"
                placeholder="0"
                icon={personIcon}
                rangeMin="1"
                isZeroPeople={isZeroPeople}
              >
                Number of People
              </Input>
            </Column>
            <Column bg={true}>
              <div className="column-container">
                <div className="result-wrapper">
                  <ResultElement value={tipAmount}>Tip Amount</ResultElement>
                  <ResultElement value={total}>Total</ResultElement>
                </div>
                <Button type="reset" onClick={resetAll} className="reset">
                  reset
                </Button>
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
