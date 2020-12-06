import { FormEvent } from "react";

export const collectFormValues = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const obj = {};
  // @ts-ignore
  for (let i = 0; i < e.target.elements.length; i++) {
    //@ts-ignore
    const item = e.target.elements.item(i);
    if (item.name) {
      //@ts-ignore
      obj[item.name] = item.value;
    }
  }
  return obj;
};
