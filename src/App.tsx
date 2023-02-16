import React, { Suspense } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ROUTES } from "./store/routes";
import { Header } from "@components/layout/header";
import { useAppService } from "./service";

const App = () => {
  const { isAdmingPage } = useAppService();

  if (isAdmingPage) {
    return <div>Works</div>;
  }

  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<>loading...</>}>
        <Routes>
          {ROUTES.map(({ path, component }) => (
            <Route key={path} {...{ path, element: component }} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
