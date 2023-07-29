import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useAppService } from "./service";

import { Header } from "@components/layout/header";
import { Footer } from "@components/layout/footer";
import { ROUTES } from "@routes/index";
import { Loader } from "@components/layout/loader";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

const App = () => {
  const { isAppLoading } = useAppService();

  if (isAppLoading) return <Loader />;

  return (
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <Header />
        <Routes>
          {ROUTES.map(({ path, component }) => (
            <Route key={path} {...{ path, element: component }} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </I18nextProvider>
  );
};

export default App;
