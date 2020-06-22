import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import css from "./router.module.css";

const lazyMain = lazy(
  () => import("../main/Main.js") /* webpackChunkName: 'Main' */
);
const lazyBlog = lazy(
  () => import("../blog/Blog.js") /* webpackChunkName = "Blog" */
);
const lazyServices = lazy(
  () => import("../services/Services.js") /* webpackChunkName = "Services" */
);
const lazy404 = lazy(
  () =>
    import("../pages/page404/PageNotFound.js") /* webpackChunkName = "404" */
);
const lazyAboutUs = lazy(
  () =>
    import(
      "../pages/aboutUsPage/AboutUsPage.js"
    ) /* webpackChunkName = "About" */
);
// const lazyPortfolio = lazy(
//   () =>
//     import(
//       "../pages/portfolioPage/PortfolioPage.js"
//     ) /* webpackChunkName = "Portfolio" */
// );

export const useRouter = () => {
  return (
    <Suspense
      fallback={
        <div className={css.loaderContainer}>
          <img
            src={require("../../assets/loader/loader.gif")}
            width="auto"
            height="auto"
            alt="dancing_loader"
          />
          <p>Пока мы загружаем страницу - станцуйте с нами!</p>
        </div>
      }
    >
      <Switch>
        <Route exact path="/" component={lazyMain} />
        <Route exact path="/blog" component={lazyBlog} />
        <Route exact path="/services" component={lazyServices} />
        <Route exact path="/about" component={lazyAboutUs} />
        {/* <Route exact path="/portfolio" component={lazyPortfolio} /> */}
        <Route path="*" component={lazy404} />
      </Switch>
    </Suspense>
  );
};
