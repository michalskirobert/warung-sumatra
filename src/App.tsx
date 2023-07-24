import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@components/layout/header";
import { Footer } from "@components/layout/footer";
import { ROUTES } from "@routes/index";
import { useEffect, useState } from "react";
import { Loader } from "@components/layout/loader";

const App = () => {
  const [isAppLoading, setIsAppLoading] = useState<boolean>(true);

  useEffect(() => {
    const parallaxItems = document.querySelectorAll("[data-parallax-item]");

    let x: number, y: number;

    window.addEventListener("mousemove", function (event) {
      x = (event.clientX / window.innerWidth) * 10 - 5;
      y = (event.clientY / window.innerHeight) * 10 - 5;

      x = x - x * 2;
      y = y - y * 2;

      for (let i = 0, len = parallaxItems.length; i < len; i++) {
        x =
          x * Number((parallaxItems[i] as HTMLElement).dataset?.parallaxSpeed);
        y =
          y * Number((parallaxItems[i] as HTMLElement).dataset?.parallaxSpeed);

        parallaxItems[i].setAttribute(
          "transform",
          `translate3d(${x}px, ${y}px, 0px)`
        );
      }
    });
  });

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsAppLoading(false);
    });
  }, []);

  if (isAppLoading) return <Loader />;

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
