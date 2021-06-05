import { useState } from "react";

//Signin ,upコンポーネントからアカウント周りのロジックを抽出
export const useAccountHooks = (initaValue: string) => {
  const [value, setValue] = useState(initaValue);
  return {
    value,
    onChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
      setValue(e.target.value);
    },
  };
};
