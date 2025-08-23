const SkeletonBlock = ({ className = "" }: { className?: string }) => (
  <div className={`bg-stone-700 rounded-lg ${className}`} />
);

const SkeletonStat = () => (
  <div className="text-center p-4 bg-white shadow-lg">
    <SkeletonBlock className="mb-2 w-[100px] h-[36px] mx-auto" />
  </div>
);

export const AboutSkeleton = () => (
  <div className="grid lg:grid-cols-2 gap-15 items-center animate-pulse">
    <div className="slide-in-left">
      <SkeletonBlock className="w-full h-95 shadow-2xl" />
    </div>

    <div className="slide-in-right space-y-6">
      <SkeletonBlock className="h-[36px] w-[200px]" />
      <SkeletonBlock className="h-[146px] w-full" />
      <SkeletonBlock className="h-[146px] w-full" />

      <div className="grid grid-cols-2 gap-6">
        <SkeletonStat />
        <SkeletonStat />
      </div>
    </div>
  </div>
);
