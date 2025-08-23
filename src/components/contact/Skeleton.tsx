const SkeletonBar = ({ className = "" }: { className?: string }) => (
  <div className={`bg-stone-700 rounded ${className}`} />
);

const SkeletonCircle = ({ size = 6 }: { size?: number }) => (
  <div
    className={`bg-stone-700 rounded-full`}
    style={{ width: `${size}rem`, height: `${size}rem` }}
  />
);

export const ContactSkeleton = () => (
  <div className="grid lg:grid-cols-2 gap-12 animate-pulse">
    <div className="slide-in-left">
      <div className="bg-white rounded-2xl p-8 shadow-2xl space-y-6">
        <SkeletonBar className="h-8 w-48 mb-4" />
        <div className="flex items-start space-x-4">
          <span className="text-xl mt-1">📍</span>
          <div className="space-y-2">
            <SkeletonBar className="h-4 w-32" />
            <div className="w-[300px] h-[130px] bg-stone-700 rounded-lg" />
            <SkeletonBar className="h-4 w-40" />
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <span className="text-xl mt-1">📞</span>
          <div className="space-y-2">
            <SkeletonBar className="h-4 w-32" />
            <SkeletonBar className="h-4 w-32" />
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <span className="text-xl mt-1">🕒</span>
          <div className="space-y-1">
            <SkeletonBar className="h-4 w-32" />
            <SkeletonBar className="h-4 w-48" />
          </div>
        </div>
        <div className="border-t border-stone-200 pt-4">
          <SkeletonBar className="h-5 w-40 mb-2" />
          <div className="flex space-x-2">
            <SkeletonCircle size={6} />
            <SkeletonCircle size={6} />
            <SkeletonCircle size={6} />
          </div>
        </div>
      </div>
    </div>

    <div className="slide-in-right">
      <div className="bg-white rounded-2xl p-8 shadow-2xl space-y-4">
        <SkeletonBar className="h-8 w-48 mb-4" />
        <div className="space-y-4">
          <SkeletonBar className="h-10 w-full" />
          <SkeletonBar className="h-10 w-full" />
          <SkeletonBar className="h-24 w-full" />
          <SkeletonBar className="h-12 w-32" />
        </div>
      </div>
    </div>
  </div>
);
