import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const lazyBlog = lazy(
  () => import("../blog/Blog.js") /* webpackChunkName = "Blog" */
);

const lazyServices = lazy(
  () => import("../services/Services.js") /* webpackChunkName = "Services" */
);

const useRouter = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <Switch>
        {/* <Route exact path="/" component={lazyMain} /> */}
        <Route exact path="/blog" component={lazyBlog} />
        <Route exact path="/services" component={lazyServices} />
      </Switch>
    </Suspense>
  );
};
