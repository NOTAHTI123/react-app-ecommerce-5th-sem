import { useState } from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './utilities/global.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login_customer from './components/Login_customer/Login_customer';
import Footer from './components/Footer/Footer';
import Customer_account_create from './components/Create_account/Customer_account_create/Customer_account_create';
import Customer_forgot_password from './components/Forgot_password/Customer_forgot_password/Customer_forgot_password';
import Customer_profile from './components/User_related/Customer_profile/Customer_profile';


function App() {

  const [loggedIn, setLoggedin] = useState(false);
  const [email, setEmail] = useState("Test");
  const [username, setUsername] = useState("Test");
  const [phone, setPhone] = useState("Test");
  const [address, setAddress] = useState("");


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
            <Route path='/' element={<Home />}></Route>
            <Route path='/login-customer-page' element={<Login_customer loggedIn={loggedIn} setLoggedin={setLoggedin} />} />
            <Route path='/create-customer-account' element={<Customer_account_create loggedIn={loggedIn} />} />
            <Route path='/forgot-password-customer-page' element={<Customer_forgot_password loggedIn={loggedIn} />} />
            <Route path='/customer-profile' element={<Customer_profile loggedIn={loggedIn} username={username} phone={phone} email={email} />} />
          </Routes>
          <Footer />
        </QueryClientProvider>
    </BrowserRouter>
    </>
  )
}

export default App
