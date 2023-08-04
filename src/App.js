import React from 'react';
import 'boxicons'
import Header from './componentes/Header/Header'
import {BrowserRouter as Router} from 'react-router-dom';
import Paginas from './componentes/Paginas'
import Carrito from './componentes/Carrito/index'
import ProductosLista from './componentes/Productos/index'
import {DataProvider} from './context/Dataprovider'
function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
        <div>
      <Header/>
      <Carrito/>
      <ProductosLista/>
      
      </div>
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
