const SkeletonBar = ({ className = "" }: { className?: string }) => (
  <div className={`bg-stone-700 rounded ${className}`} />
);

const MenuItemSkeleton = () => (
  <div className="menu-item border-b border-stone-200 pb-6 last:border-0 last:pb-0">
    <div className="flex justify-between items-start mb-2">
      <SkeletonBar className="h-[28px] w-[130px]" />
      <SkeletonBar className="h-[28px] w-[130px]" />
    </div>
    <SkeletonBar className="h-[24px] w-[130px]" />
  </div>
);

const MenuBlockSkeleton = () => {
  const menuItems = [1, 2, 3, 4];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-stone-200 animate-pulse">
      <div className="mb-8 text-center space-y-1">
        <SkeletonBar className="h-[36px] w-[100px] mx-auto" />
        <SkeletonBar className="h-[20px] w-[130px] mx-auto" />
      </div>
      <div className="space-y-6">
        {menuItems.map((it) => (
          <MenuItemSkeleton key={it} />
        ))}
      </div>
    </div>
  );
};

export const MenuSkeleton = () => (
  <div className="grid lg:grid-cols-2 gap-12">
    <div className="space-y-8">
      <MenuBlockSkeleton />
    </div>
    <div className="space-y-8">
      <MenuBlockSkeleton />
    </div>
  </div>
);
