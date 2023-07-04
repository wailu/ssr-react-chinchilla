import { createElement } from "react";
import { hydrateRoot } from "react-dom/client";

const rootEle = document.getElementById("root");

export const hydrateAtRoot = (component: any) => {
  if (rootEle) hydrateRoot(rootEle, createElement(component));
};
