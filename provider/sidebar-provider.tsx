import React, { useContext, createContext, useState } from "react";

type SidebarContextT = {
  sidebar: boolean;
  toggle: () => void;
};

const SidebarContext = createContext({} as SidebarContextT);

export const useSidebarContext = () => useContext(SidebarContext);

const SidebarProvider = ({ children }: { children: React.ReactNode }) => {
  const [sidebar, setSidebar] = useState(true);
  function toggle() {
    setSidebar((prev) => !prev);
  }
  return (
    <SidebarContext.Provider value={{ sidebar, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarProvider;
