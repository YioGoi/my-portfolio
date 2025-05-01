'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface MobileMenuContextType {
  showMobileMenu: boolean;
  setShowMobileMenu: (val: boolean) => void;
}

const MobileMenuContext = createContext<MobileMenuContextType>({
  showMobileMenu: false,
  setShowMobileMenu: () => {},
});

export const MobileMenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : '';
  }, [showMobileMenu]);

  return (
    <MobileMenuContext.Provider value={{ showMobileMenu, setShowMobileMenu }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export const useMobileMenu = () => useContext(MobileMenuContext);
