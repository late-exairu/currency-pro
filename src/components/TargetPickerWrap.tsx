"use client";

import { useStore } from "@/state/store";

export default function TargetPickerWrap(props: any) {
  const { children } = props;
  const baseCurrency = useStore((state) => state.baseCurrency);

  if (!baseCurrency) {
    return null;
  }

  return children;
}
