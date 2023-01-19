import { Outlet } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu';
import { Footer } from 'components/Footer';
import { Suspense } from 'react';
import SuspenedPage from 'components/SuspenedPage';
// import { startTransition } from 'react';

const Layout = () => {
  return (
    <div>
      <UserMenu />

      <Suspense fallback={<SuspenedPage />}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Layout;
