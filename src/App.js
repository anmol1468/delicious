import './App.scss';
import Category from './components/Category';
import Pages from './pages/Pages';
import { BrowserRouter } from "react-router-dom"
import Search from './components/Search';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Search />
      <Category />
      <Pages />
    </div>
    </BrowserRouter>
  );
}

export default App;
