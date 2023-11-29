import Header from './components/Header';
import Footer from './components/Footer';
import Column from './components/Column';

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Header />
          <main className="card">
            <Column>left</Column>
            <Column bg="dark-cyan">right</Column>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
