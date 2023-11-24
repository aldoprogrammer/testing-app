import logo from './logo.svg';
import Header from './components/Header';
import Container from './components/Container';
import FooterContainer from './components/Content/FooterContainer';

function App() {
  return (
    <div className='overflow-x-hidden'>
      <Header/>
      <Container/>
      <FooterContainer />
    </div>
  );
}

export default App;
