import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Column from './components/Column';
import Input from './components/Input';
import ResultElement from './components/ResultElement';
import TipSelector from './components/TipSelector';

import dollarIcon from './assets/icon-dollar.svg';
import personIcon from './assets/icon-person.svg';

// const CalculationContext = React.createContext();

function App() {
  const [bill, setBill] = React.useState('');
  const [isCustomTip, setIsCustomTip] = React.useState(false);
  const [customTipAmount, setCustomTipAmount] = React.useState('');
  const [numPeople, setNumPeople] = React.useState('');
  const [isZeroPeople, setIsZeroPeople] = React.useState(true);
  const [tipAmount, setTipAmount] = React.useState('');
  const [total, setTotal] = React.useState('');

  React.useEffect(() => {
    const tipsTotal = isCustomTip ? (bill / 100) * customTipAmount : 0;
    const tipsPerPerson = !isZeroPeople && ((bill / 100) * customTipAmount) / numPeople;
    const totalPerPerson = (+bill + tipsTotal) / numPeople;
    setIsZeroPeople(numPeople > 0 ? false : true);
    setTotal(!isZeroPeople ? totalPerPerson : 0);
    setTipAmount(!isZeroPeople && tipsPerPerson);
  }, [bill, numPeople, total, isZeroPeople, isCustomTip, customTipAmount]);

  const resetAll = () => {
    setBill('');
    setIsCustomTip(false);
    setNumPeople('');
    setIsCustomTip(false);
    setCustomTipAmount('');
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
              <TipSelector
                isCustomTip={isCustomTip}
                customTipAmount={customTipAmount}
                setIsCustomTip={setIsCustomTip}
                setCustomTipAmount={setCustomTipAmount}
              />
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
                <button
                  onClick={resetAll}
                  className={bill || numPeople || isCustomTip ? 'reset reset-active' : 'reset'}
                >
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
