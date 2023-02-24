import React, { Suspense } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ADMIN_ROUTES, ROUTES } from "./store/routes";
import { Header } from "@components/layout/header";
import { useAppService } from "./service";

const App = () => {
  const { isAdmingPage } = useAppService();

  if (isAdmingPage) {
    return (
      <BrowserRouter>
        <Header />
        <Suspense fallback={<>loading...</>}>
          <Routes>
            {ADMIN_ROUTES.map(({ path, component }) => (
              <Route key={path} {...{ path, element: component }} />
            ))}
          </Routes>
        </Suspense>
      </BrowserRouter>
    );
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
