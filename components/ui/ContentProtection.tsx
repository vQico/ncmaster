"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ContentProtection() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Completely disable protection on admin pages so admin interactions work 100% smoothly
    if (pathname && pathname.startsWith("/admin")) {
      return;
    }

    // 2. Prevent right-click context menu on public site
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        return true;
      }
      e.preventDefault();
      return false;
    };

    // 3. Prevent F12, Ctrl+Shift+I/J/C, Ctrl+U, Ctrl+S on public site
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "F12" || e.keyCode === 123) {
        e.preventDefault();
        return false;
      }

      if (
        e.ctrlKey &&
        e.shiftKey &&
        (e.key === "I" ||
          e.key === "i" ||
          e.key === "J" ||
          e.key === "j" ||
          e.key === "C" ||
          e.key === "c")
      ) {
        e.preventDefault();
        return false;
      }

      if (e.ctrlKey && (e.key === "U" || e.key === "u")) {
        e.preventDefault();
        return false;
      }

      if (e.ctrlKey && (e.key === "S" || e.key === "s")) {
        e.preventDefault();
        return false;
      }
    };

    // 4. Prevent image drag
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, [pathname]);

  return null;
}
