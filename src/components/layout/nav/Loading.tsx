export default function Skeleton() {
  return (
    <nav className="fixed top-0 w-full z-40 transition-all duration-300 py-4 mx-auto px-4">
      <div className="flex justify-between items-center">
        <div className="h-12 bg-stone-700 animate-pulse w-50" />
        <div className="hidden md:flex w-1/2 justify-end items-center gap-4">
          <div className="h-10 bg-stone-700 animate-pulse w-full" />
          <div className="h-10 bg-stone-700 animate-pulse w-full" />
          <div className="h-10 bg-stone-700 animate-pulse w-full" />
          <div className="h-10 bg-stone-700 animate-pulse w-full" />
          <div className="h-10 bg-stone-700 animate-pulse w-full" />
          <div className="h-12 bg-stone-700 animate-pulse w-full" />
        </div>
        <div className="sm:hidden h-10 bg-stone-700 animate-pulse w-14" />
      </div>
    </nav>
  );
}
