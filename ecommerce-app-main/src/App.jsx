import { useState } from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './utilities/global.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login_customer from './components/Login_customer/Login_customer';


function App() {

  const [loggedIn, setLoggedin] = useState(false);


  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        cacheTime: Infinity
      }
    }
  })

  return (
    <>
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Header loggedIn={loggedIn} />
          <Routes>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/login-customer-page' element={<Login_customer loggedIn={loggedIn} setLoggedin={setLoggedin} />} />
          </Routes>
        </QueryClientProvider>
    </BrowserRouter>
    </>
  )
}

export default App
