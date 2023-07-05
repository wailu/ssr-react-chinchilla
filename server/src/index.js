const Koa = require("koa");
const Router = require("@koa/router");
const { createElement } = require("react");
const { renderToString } = require("react-dom/server");
const ejs = require("ejs");
const path = require("path");

const port = 3000;

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  const page = require("../views/Home.node");
  const pageEl = createElement(page.default);
  const pageHtml = renderToString(pageEl);

  ejs.renderFile(
    path.resolve(__dirname, "../layout.html"),
    {
      body: pageHtml,
      provider: '<script src="http://localhost:3001/remoteEntry.js"></script>',
      hydrate: `
    <script>
      if (window.provider) {
        (async () => {
          const [{ hydrateAtRoot }, component] = await Promise.all([
            window.provider.get("utils"),
            window.provider.get("Home"),
          ]).then(([f, g]) => [f(), g()]);
          hydrateAtRoot(component.default);
        })();
      }
    </script>
    `,
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

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => console.log(`Server listening on port ${port}`));
