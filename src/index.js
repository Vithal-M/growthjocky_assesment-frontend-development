// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

// const rootElement = document.getElementById("root");
// const root = createRoot(rootElement);

// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css'; // Add your CSS file if you have one

ReactDOM.render(
  <React.StrictMode>
    <App />
    <link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
/>

  </React.StrictMode>,
  document.getElementById('root')
);
