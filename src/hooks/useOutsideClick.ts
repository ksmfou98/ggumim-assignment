import { useCallback, useEffect, useRef } from "react";

export default function useOutSideClick(isOpen: boolean, onClose: () => void) {
  const targetEl = useRef<HTMLDivElement>(null);

  const onClickOutside = useCallback(
    (e: MouseEvent) => {
      const { target } = e;
      if (target instanceof Node) {
        if (isOpen && !targetEl.current?.contains(target)) {
          onClose();
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
