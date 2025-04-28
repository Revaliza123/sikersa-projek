import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRouting from "./app/AppRouting";
import React from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <Suspense>
              <AppRouting />
            </Suspense>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
