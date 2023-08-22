import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider} from "@auth0/auth0-react"


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider 
    domain="dev-vdx4gwjy1vea4mzf.us.auth0.com"
    clientId="RsUqAAj44RUNpmdxC5WL6Zk7iR8mNifL"
    authorizationParams={{
      redirect_uri: "http://localhost:5173"
    }}
    audience=""
    scope="openid profile email"
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>
);
