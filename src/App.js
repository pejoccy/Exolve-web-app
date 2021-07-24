import './App.css';
import Body from './components/body/body';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  
  return (
    
    <BrowserRouter>
      <Provider store = { store }>

        <div className="App">

          <Route path = '/' exact strict component = { Body } />

        </div>
        
      </Provider>
    </BrowserRouter>
  );
}

export default App;
