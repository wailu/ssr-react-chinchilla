const Koa = require("koa");
const Router = require("@koa/router");
const serve = require("koa-static");
const mount = require("koa-mount");
const { createElement } = require("react");
const { renderToString } = require("react-dom/server");
const ejs = require("ejs");
const path = require("path");

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
      hydrate: `
  <script>
    if (window.pages === undefined || window.pages.Home === undefined) {
      const scriptElement = document.createElement("script");
      scriptElement.src = "http://localhost:3000/public/Home.js";
      const scriptLoaded = new Promise((resolve, reject) => {
        scriptElement.onload = resolve;
        scriptElement.onerror = reject;
      });
      document.body.appendChild(scriptElement);
      scriptLoaded
        .then(() => {
          const Home = window.pages.Home.default;
          ReactDOM.hydrateRoot(
            document.getElementById("root"),
            React.createElement(Home)
          );
        })
        .finally(() => scriptElement.remove());
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

app.use(mount("/public", serve(path.resolve(__dirname, "../public"))));
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);
