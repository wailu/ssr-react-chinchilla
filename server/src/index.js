import Koa from "koa";
import serve from "koa-static";
import mount from "koa-mount";
import router from "./router.js";
import config from "#constants";

const { CLIENT_BUILD_DIRECTORY, STATIC_BASE_PATH } = config;
const port = 3000;

const app = new Koa();
const statik = new Koa();

statik.use(serve(CLIENT_BUILD_DIRECTORY));

app.use(router.routes()).use(router.allowedMethods());
app.use(mount("/" + STATIC_BASE_PATH, statik));

app.listen(port, () => console.log(`Server listening on port ${port}`));

export default app;
