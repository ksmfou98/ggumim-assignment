import { SelectedImageIdType } from "components/ProductImageContent";
import { useCallback, useEffect, useRef } from "react";

export default function useOutSideClick(
  isOpen: boolean,
  onClose: (id: SelectedImageIdType) => void
) {
  const targetEl = useRef<HTMLDivElement>(null);

  const onClickOutside = useCallback(
    (e: MouseEvent) => {
      const { target } = e;
      if (target instanceof Node) {
        if (isOpen && !targetEl.current?.contains(target)) {
          console.log("Dd");
          onClose(null);
        }
      }
    },
    [isOpen, onClose]
  );

  useEffect(() => {
    window.addEventListener("click", onClickOutside);
    return () => {
      window.removeEventListener("click", onClickOutside);
    };
  }, [onClickOutside]);

  return { targetEl };
}
