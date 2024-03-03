import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Navigation from "components/Navigation/Navigation";
import Loader from "components/Loader/Loader";

export default function Layout() {
  return (
    <>
      <header className="container mx-auto px-4 py-6">
        <Navigation />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
