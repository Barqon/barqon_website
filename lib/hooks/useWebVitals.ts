import { useEffect } from 'react';
import { Metric, onCLS, onFCP, onLCP, onTTFB } from 'web-vitals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type WindowWithGtag = Window & { gtag?: (...args: any[]) => void };

export function useWebVitals() {
  useEffect(() => {
    const reportWebVitals = (metric: Metric) => {
      // You can send these metrics to your analytics service
      // console.log(metric); // Uncomment for debugging web vitals
      
      // Example: Send to Google Analytics
      if (typeof window !== 'undefined' && typeof (window as WindowWithGtag).gtag === 'function') {
        (window as WindowWithGtag).gtag?.('event', metric.name, {
          value: Math.round(metric.value * 1000) / 1000,
          metric_id: metric.id,
          metric_value: metric.value,
          metric_delta: metric.delta,
        });
      }
    };

    // Report Web Vitals
    onCLS(reportWebVitals);
    onFCP(reportWebVitals);
    onLCP(reportWebVitals);
    onTTFB(reportWebVitals);
  }, []);
} 