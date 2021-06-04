import { createContext, useState } from "react";

import { ReactNode } from "react";
//react側で型定義や参照をしている JSXもある

export const StyleHomeContext = createContext<[boolean, (styles: boolean) => void]>(
  [false, () => {}]
);
//tuple型になる  <> の中はvalueにも継承される.
// Recoil ,redux

export const StyleProvider = ({ children }: { children: ReactNode }) => {
  const [styles, setStyles] = useState(false);
  return (
    <StyleHomeContext.Provider value={[styles, setStyles]}>
      {children}
    </StyleHomeContext.Provider>
  );
};
