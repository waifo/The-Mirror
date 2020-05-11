import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Spinner from "../components/Spinner";

const Home = lazy(() => import("../pages/home"));

const Routes = () => (
  <div>
    <Header />
    <Switch>
      <Suspense fallback={<Spinner />}>
        <Route exact={true} path="/" component={Home} />
      </Suspense>
    </Switch>
    <Footer />
  </div>
);

export default Routes;
