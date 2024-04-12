"use client";
import { useEffect, useRef, useState } from "react";
import { SideBarItem } from "./SideBarItem";
import { GoHomeFill } from "react-icons/go";

export const SideBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const firstItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observerCallback = ([entry]: IntersectionObserverEntry[]) => {
      setIsVisible(entry.isIntersecting);
    };

    const asideElement = document.querySelector("aside");
    if (asideElement && window.matchMedia("(min-width: 1042px)").matches) {
      const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.5,
      });
      observer.observe(asideElement);

      return () => observer.disconnect();
    } else {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (isVisible && firstItemRef.current) {
      firstItemRef.current.focus();
    }
  }, [isVisible]);
  return (
    <aside className="left-0 top-0 hidden h-screen w-[280px] border-r border-white lg:flex">
      <SideBarItem
        ref={firstItemRef}
        title="Home"
        icon={GoHomeFill}
        size={25}
      />
    </aside>
  );
};
