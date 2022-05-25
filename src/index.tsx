import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import React from 'react'

import reportWebVitals from './reportWebVitals'
import { store } from './states'

import AdvertiseManage from 'routes/advertiseManage'
import Layout from 'components/layout'
import Home from 'routes/home'
import './styles/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='advertiseManage' element={<AdvertiseManage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)

reportWebVitals()
