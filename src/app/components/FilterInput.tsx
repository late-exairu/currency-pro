"use client";

import { usePersonStore } from "@/state/store";

export default function FilterInput(props: {
  className?: string;
  isBaseCurrency: boolean;
}) {
  const { className, isBaseCurrency } = props;
  // const filterBaseString = usePersonStore((state) => state.filterBaseString);
  // const filterTargetString = usePersonStore(
  //   (state) => state.filterTargetString,
  // );

  const handleFilterBaseStringInput = usePersonStore(
    (state) => state.setFilterBaseString,
  );

  const handleFilterTargetStringInput = usePersonStore(
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
        className="border-surface-heavy text-text-heavy focus:ring-accent dark:bg-surface w-full rounded-md border bg-white px-3 py-2 outline-none transition-shadow focus:ring-2"
      />
    </div>
  );
}
