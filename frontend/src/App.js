import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import { store, persistor } from './redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import { Login } from './pages/Login';
import { Conta } from './pages/Conta';
import { DefaultLayout } from './layouts/DefaultLayout';
import { GlobalStyle } from './styles/GlobalStyles';
import { Dashboard } from "./pages/Dashboard";
import './App.css'


function App() {

  const ProtectedRoute = ({ element: Element, ...rest }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    
  
    if (isAuthenticated) {
      return <Element {...rest} />;
    } else {
      return <Navigate to="/login" />;
    }
  };
  return (
    
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
              path="/"
              element={<ProtectedRoute element={DefaultLayout} />}
            >
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/account/:id' element={<Conta/>} />
          </Route>
        </Routes>
          
            
        
      </div>
      </PersistGate>
      </Provider>
    
      <GlobalStyle />
    </Router>
    
  );
}

export default App;
