import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Bounce from "react-reveal/Bounce";
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

export const useRouter = () => {
  return (
    <Suspense
      fallback={
        <div className={css.loaderContainer}>
          <Bounce top>
            <p className={css.loaderText}>Loading...</p>
          </Bounce>
        </div>
      }
    >
      <Switch>
        <Route exact path="/" component={lazyMain} />
        <Route exact path="/blog" component={lazyBlog} />
        <Route exact path="/services" component={lazyServices} />
        <Route exact path="/about" component={lazyAboutUs} />
        <Route path="*" component={lazy404} />
      </Switch>
    </Suspense>
  );
};
