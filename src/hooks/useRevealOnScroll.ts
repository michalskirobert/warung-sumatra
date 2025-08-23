"use client";
import { useEffect } from "react";

export const useRevealOnScroll = (selector: string) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const attachObserver = () => {
      const elements = document.querySelectorAll<HTMLElement>(selector);
      elements.forEach((el) => {
        if (!el.classList.contains("visible")) {
          observer.observe(el);
        }
      });
    };

    attachObserver();

    const interval = setInterval(attachObserver, 100);

    return () => {
      clearInterval(interval);
      const elements = document.querySelectorAll<HTMLElement>(selector);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [selector]);
};
