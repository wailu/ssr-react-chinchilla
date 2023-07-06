import Koa from "koa";
import Router from "@koa/router";
import { createElement } from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.js";
import AppView from "../views/App.js";

const port = 3000;

const app = new Koa();
const router = new Router();

router.get("/", async (ctx) => {
  await new Promise(() => {
    const clientAppEl = createElement(
      StaticRouter,
      { location: ctx.url },
      createElement(AppView, null)
    );

    const stream = renderToPipeableStream(clientAppEl, {
      bootstrapScripts: ["http://localhost:3001/bootstrap.js"],
      onShellReady() {
        ctx.type = "text/html";
        ctx.status = 200;
        stream.pipe(ctx.res);
      },
      onError(err) {
        console.log("something went wrong!!!", err);
      },
    });
  });
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => console.log(`Server listening on port ${port}`));
