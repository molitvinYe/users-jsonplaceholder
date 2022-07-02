import React from "react";
import { Provider } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { setupStore } from "./store/store";

function App() {
  const store = setupStore();

  return (
    <Provider store={store}>
      <Routes>
        <Route path="*" element={<Navigate to="/home/1" />} />
        <Route path="/home/:userId" element={<HomePage />} />
      </Routes>
    </Provider>
  );
}

export default App;
