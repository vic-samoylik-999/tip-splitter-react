import Header from './components/Header';
import Footer from './components/Footer';
import Column from './components/Column';
import Input from './components/Input';
import ResultElement from './components/ResultElement';

import dollarIcon from './assets/icon-dollar.svg';
import personIcon from './assets/icon-person.svg';

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Header />
          <main className="card">
            <Column>
              <Input type="number" placeholder="0.00" rangeMin="1" icon={dollarIcon}>
                Bill
              </Input>
              <Input type="number" placeholder="0" icon={personIcon} rangeMin="1">
                Number of People
              </Input>
            </Column>
            <Column bg="contrast">
              <ResultElement mb={true}>Tip Amount</ResultElement>
              <ResultElement>Total</ResultElement>
            </Column>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
