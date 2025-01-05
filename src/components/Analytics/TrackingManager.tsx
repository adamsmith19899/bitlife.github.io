import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { pageView } from '../../utils/analytics';

export const TrackingManager: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Delay the first pageview to ensure gtag is loaded
    const timeout = setTimeout(() => {
      pageView(location.pathname + location.search);
    }, 100);

    return () => clearTimeout(timeout);
  }, [location]);

  return null;
};