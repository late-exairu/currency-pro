"use client";

import { usePersonStore } from "@/state/store";

export default function FilterInput(props: { className?: string }) {
  const { className } = props;
  const filterString = usePersonStore((state) => state.filterString);
  const handleFilterStringInput = usePersonStore(
    (state) => state.setFilterString,
  );

  return (
    <div className={`${className}`}>
      {/* {filterString && (
        <p className="text-sm text-text-heavy">
          Showing results for: {filterString}
        </p>
      )} */}
      <input
        onChange={(e) => handleFilterStringInput(e.target.value)}
        type="text"
        placeholder="Search"
        className="w-full rounded-md border border-surface-heavy bg-white px-3 py-2 text-text-heavy outline-none focus:ring-2 focus:ring-accent dark:bg-surface"
      />
    </div>
  );
}
