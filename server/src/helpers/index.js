import { createElement } from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import App from "#client/build/App.node.mjs";

const AppViewEl = createElement(App, null);

export const createPageStream = (additionalBootstrapScripts = []) => {
  return (ctx) =>
    new Promise((_, reject) => {
      const clientAppEl = createElement(
        StaticRouter,
        { location: ctx.url },
        AppViewEl
      );

      let didError = false;

      const stream = renderToPipeableStream(clientAppEl, {
        bootstrapScripts: [
          `http://${ctx.host}/static/bootstrap.js`,
          ...additionalBootstrapScripts,
        ],
        onShellReady() {
          ctx.type = "text/html";
          ctx.status = didError ? 500 : 200;
          stream.pipe(ctx.res);
        },
        onError(err) {
          didError = true;
          console.error("Error:", err);
          reject();
        },
      });
    });
};

export const getChunkUrl = (host, pageName) =>
  `http://${host}/static/pages_${pageName}.chunk.js`;
