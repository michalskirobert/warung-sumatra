import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ADMIN_ROUTES, ROUTES } from "./store/routes";
import { Header } from "@components/layout/header";
import { useAppService } from "./service";
import { AuthRoute } from "@components/pages/admin/auth-route";
import { Footer } from "@components/layout/footer";

const App = () => {
  const { isAdmingPage } = useAppService();

  if (isAdmingPage) {
    return (
      <BrowserRouter>
        <AuthRoute>
          <Header />
          <Routes>
            {ADMIN_ROUTES.map(({ path, component }) => (
              <Route key={path} {...{ path, element: component }} />
            ))}
          </Routes>
        </AuthRoute>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {ROUTES.map(({ path, component }) => (
          <Route key={path} {...{ path, element: component }} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
