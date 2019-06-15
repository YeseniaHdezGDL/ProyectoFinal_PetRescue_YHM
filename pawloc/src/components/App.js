//En App van todos los elementos que SIEMPRE van a aparecer en todas las páginas
import React from 'react';

//components que siempre van a estar
import Header from './Header/Header';
import Footer from './Footer/Footer';

//components
import Login from './Header/UserArea/Login/Login';
import Dashboard from './Dashboard/Dashboard';
import Register from './Header/UserArea/Login/Register/Register';
import Main from './Main/Main';

//estilo para página principal
import './App.css';

//componentes del router
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
//import Dashboard from './Dashboard/Dashboard'; //OJO CHECAR

function App() {
  return (
    <BrowserRouter>
      <Route component={Header} /> {/*Componentes sin path, siempre aparecen*/}
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Main} />
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} /> {/*Esto siempre tienen que ir en medio de header y footer*/}
      <Route component={Footer} />
    </BrowserRouter>
  );
}

export default App;
