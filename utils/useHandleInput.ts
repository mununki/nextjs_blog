import { useState } from "react";

export const useHandleInput = (initValue: any) => {
  const [value, setValue] = useState(initValue);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};
