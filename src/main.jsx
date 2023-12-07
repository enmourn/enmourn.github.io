import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { GlobalStyle } from "./assets/components/Common"
import "@fontsource/dm-mono"
import "@fontsource/coda"
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyDX5lvTse_s_b6iwpwj7g3X-eNv2HMEOJ4",
  authDomain: "en-mourn-portfolio.firebaseapp.com",
  projectId: "en-mourn-portfolio",
  storageBucket: "en-mourn-portfolio.appspot.com",
  messagingSenderId: "1013246995902",
  appId: "1:1013246995902:web:966bb8c79a867d14e51def",
  measurementId: "G-7S6FZKRVHF",
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
