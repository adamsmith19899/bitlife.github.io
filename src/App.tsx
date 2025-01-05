import React from 'react';
import { AppLayout } from './components/Layout/AppLayout';
import { AppRoutes } from './components/Routes/AppRoutes';
import { TrackingManager } from './components/Analytics/TrackingManager';
import { ScrollToTop } from './components/ScrollRestoration/ScrollToTop';
import { initGA } from './utils/analytics';
import { initAds } from './utils/ads';

function App() {
  React.useEffect(() => {
    initGA();
    initAds();
  }, []);

  return (
    <>
      <ScrollToTop />
      <TrackingManager />
      <AppLayout>
        <AppRoutes />
      </AppLayout>
    </>
  );
}

export default App;