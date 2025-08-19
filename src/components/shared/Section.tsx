"use client";

import clsx from "clsx";

type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
  children: React.ReactNode;
};

export default function Section({
  id,
  title,
  subtitle,
  dark = false,
  children,
}: Props) {
  return (
    <section
      id={id}
      className={clsx(
        "py-20",
        dark ? "bg-stone-800 batik-pattern text-white" : "bg-stone-50"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <h2
            className={clsx(
              "text-4xl md:text-5xl font-heading font-bold font-inter",
              dark ? "text-white" : "text-stone-800"
            )}
          >
            {title}
          </h2>
          <div className="w-24 h-1 bg-amber-600 mx-auto mb-2 mt-3" />
          {subtitle && (
            <p
              className={clsx(
                "text-xl max-w-3xl mx-auto",
                dark ? "text-stone-300" : "text-stone-600"
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
