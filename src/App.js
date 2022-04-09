import './App.css';
import Heading from './components/Heading';
import SearchAPI from './components/SearchAPI';

function App() {
  return (
    <div className="font-Mulish">
      <Heading title="Everything you want to know about Star Wars" description="Grab any information about the Star Wars universe you could possibly want to know. This website is powered by the wonderful Star Wars API!"/>
      <SearchAPI />
    </div>
  );
}

export default App;
