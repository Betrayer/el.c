import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

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
const lazyPortfolio = lazy(
  () =>
    import(
      "../pages/portfolio/Portfolio.js"
    ) /* webpackChunkName = "Portfolio" */
);

export const useRouter = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Switch>
        <Route exact path="/" component={lazyMain} />
        <Route exact path="/blog" component={lazyBlog} />
        <Route exact path="/services" component={lazyServices} />
        <Route exact path="/portfolio" component={lazyPortfolio} />
        <Route path="*" component={lazy404} />
      </Switch>
    </Suspense>
  );
};
