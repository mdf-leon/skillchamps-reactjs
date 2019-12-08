import React from "react"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import { Router } from "react-router-dom"

import "./config/Reactotron"

import Routes from "./routes"
import GlobalStyle from "./styles/globalStyle"
import history from "./services/history"

import { store, persistor } from "./store"

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App
