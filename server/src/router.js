import Router from "@koa/router";
import { createPageStream, getChunkUrl } from "./helpers/index.js";

const router = new Router();

const routeToPageMap = {
  "/": "home",
  "/about": "about",
};

router.get(Object.keys(routeToPageMap), async (ctx) => {
  await createPageStream([getChunkUrl(ctx.host, routeToPageMap[ctx.url])])(ctx);
});

export default router;
