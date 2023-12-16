"use client";

import { useStore } from "@/state/store";

export default function FilterInput(props: {
  className?: string;
  isBaseCurrency: boolean;
}) {
  const { className, isBaseCurrency } = props;
  // const filterBaseString = useStore((state) => state.filterBaseString);
  // const filterTargetString = useStore(
  //   (state) => state.filterTargetString,
  // );

  const handleFilterBaseStringInput = useStore(
    (state) => state.setFilterBaseString,
  );

  const handleFilterTargetStringInput = useStore(
    (state) => state.setFilterTargetString,
  );

  return (
    <div className={`${className}`}>
      {/* {isBaseCurrency ? (
        <p className="text-text-heavy text-sm">
          Showing results for: {filterBaseString}
        </p>
      ) : (
        <p className="text-text-heavy text-sm">
          Showing results for: {filterTargetString}
        </p>
      )} */}
      <input
        onChange={(e) =>
          isBaseCurrency
            ? handleFilterBaseStringInput(e.target.value)
            : handleFilterTargetStringInput(e.target.value)
        }
        type="text"
        placeholder="Search"
        className="w-full rounded-md border border-surface-heavy bg-white px-3 py-2 text-text-heavy outline-none transition-shadow focus:ring-2 focus:ring-accent dark:bg-surface"
      />
    </div>
  );
}
