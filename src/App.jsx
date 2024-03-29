import React, { Suspense } from "react";
import Website from "./pages/website";
import Properties from "./pages/properties/properties";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./compenants/layout/layout";
import {QueryClient, QueryClientProvider } from 'react-query'
import Login from "./pages/login/login"
import Signup from "./pages/signup/signup"

function App() {
  const queryClient =new QueryClient()


  return (
    <QueryClientProvider client={queryClient}>

    
    <BrowserRouter>
      <Suspense
        fallback={
          /* ALL THIS CODE A YOUSSEF IS JUST FOR THE LOADING OPAGE ICON OF THE PENCIL */
          <div>
            <div class="box-of-star1">
              <div class="star star-position1"></div>
              <div class="star star-position2"></div>
              <div class="star star-position3"></div>
              <div class="star star-position4"></div>
              <div class="star star-position5"></div>
              <div class="star star-position6"></div>
              <div class="star star-position7"></div>
            </div>
            <div class="box-of-star2">
              <div class="star star-position1"></div>
              <div class="star star-position2"></div>
              <div class="star star-position3"></div>
              <div class="star star-position4"></div>
              <div class="star star-position5"></div>
              <div class="star star-position6"></div>
              <div class="star star-position7"></div>
            </div>
            <div class="box-of-star3">
              <div class="star star-position1"></div>
              <div class="star star-position2"></div>
              <div class="star star-position3"></div>
              <div class="star star-position4"></div>
              <div class="star star-position5"></div>
              <div class="star star-position6"></div>
              <div class="star star-position7"></div>
            </div>
            <div class="box-of-star4">
              <div class="star star-position1"></div>
              <div class="star star-position2"></div>
              <div class="star star-position3"></div>
              <div class="star star-position4"></div>
              <div class="star star-position5"></div>
              <div class="star star-position6"></div>
              <div class="star star-position7"></div>
            </div>
            <div data-js="astro" class="astronaut">
              <div class="head"></div>
              <div class="arm arm-left"></div>
              <div class="arm arm-right"></div>
              <div class="body">
                <div class="panel"></div>
              </div>
              <div class="leg leg-left"></div>
              <div class="leg leg-right"></div>
              <div class="schoolbag"></div>
            </div>
          </div>
        }
      > 
        <Routes>
          <Route element={<Layout />}>
             <Route path="/" element={<Website />} />
             <Route path="/properties" element={<Properties/>} />
             <Route path="/login" element={<Login/>} />
             <Route path="/signup" element={<Signup/>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
