"use client";
import React, {
  ReactNode,
  Dispatch,
  SetStateAction,
  createContext,
  useState,
  useContext,
  useEffect,
} from "react";

type LayoutContextType = {
  layout: string | undefined;
  setLayout: Dispatch<SetStateAction<string | undefined>>;
};

const LayoutContext = createContext<LayoutContextType>({
  layout: undefined,
  setLayout: () => {},
});

interface LayoutContextProviderProps {
  children: ReactNode;
}

export default function LayoutContextProvider({
  children,
}: LayoutContextProviderProps) {
  const [layout, setLayout] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (layout) {
      const element = document.getElementById(layout);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [layout]);

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      {children}
    </LayoutContext.Provider>
  );
}

const useLayoutContext = (): LayoutContextType => useContext(LayoutContext);

export { useLayoutContext };
