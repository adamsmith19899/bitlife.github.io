// Google Analytics Configuration
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 tracking ID

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Initialize Google Analytics
export const initGA = () => {
  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function() {
    window.dataLayer.push(arguments);
  };

  // Load GA script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  
  script.onload = () => {
    window.gtag('js', new Date());
    window.gtag('config', GA_TRACKING_ID);
  };
  
  document.head.appendChild(script);
};

// Track page views
export const pageView = (url: string) => {
  if (window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};