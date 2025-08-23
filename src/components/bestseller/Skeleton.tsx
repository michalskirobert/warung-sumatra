const CardSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full">
    <div className="w-full h-[256px] bg-stone-700 animate-pulse rounded-t-2xl" />
    <div className="p-6 flex flex-col gap-4">
      <div className="h-[32px] w-full bg-stone-700 animate-pulse rounded" />
      <div className="h-[52px] w-full bg-stone-700 animate-pulse rounded" />
    </div>
  </div>
);

export const BestsellerSkeleton = () => (
  <div className="grid md:grid-cols-3 gap-8 w-full">
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
  </div>
);
