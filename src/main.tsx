import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import Routes from "@/routes/Routes.tsx";

import './global.css'
import {Provider} from "react-redux";
import store from "@/store";

import './utils/i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Routes/>
    </Provider>
  </StrictMode>,
)
