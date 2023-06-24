const Koa = require("koa");
const { createElement } = require("react");
const { renderToString } = require("react-dom/server");
const serverBundle = require("../views/bundle.node");

const app = new Koa();

app.use(async (ctx) => {
  const element = createElement(serverBundle.default);
  const html = renderToString(element);

  ctx.body = html;
});

app.listen(3000);
