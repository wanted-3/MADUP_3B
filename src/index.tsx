import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Ad from 'routes/ad'
import Home from 'routes/home'
import Layout from 'components/layout'
import reportWebVitals from './reportWebVitals'
import './styles/index.scss'
import { Provider } from 'react-redux'
import { store } from './states'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='ad' element={<Ad />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
