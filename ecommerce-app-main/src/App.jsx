import { useState } from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './utilities/global.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';


function App() {

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
          <Header />
          <Routes>
            <Route path='/home' element={<Home />}></Route>
          </Routes>
        </QueryClientProvider>
    </BrowserRouter>
    </>
  )
}

export default App
