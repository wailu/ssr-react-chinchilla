const Koa = require("koa");
// const render = require("koa-ejs");
const { createElement } = require("react");
const { renderToString } = require("react-dom/server");
const ejs = require("ejs");
const path = require("path");

const app = new Koa();

app.use(async (ctx) => {
  const page = require("../views/Home.node");
  const pageEl = createElement(page.default);
  const pageHtml = renderToString(pageEl);

  // attach a script to download js file
  // js file should hydrate

  ejs.renderFile(
    path.resolve(__dirname, "../layout.html"),
    {
      body: pageHtml,
    },
    (err, html) => {
      if (err) {
        ctx.body = "Error";
        return;
      }
      ctx.body = html;
    }
  );
});

app.listen(3000);
