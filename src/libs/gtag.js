export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// PVを測定する
export const pageview = (path) => {
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: path,
  });
};

// GAイベントを発火させる
export const event = ({ action, category, label, value = "" }) => {
  if (!existsGaId) {
    return;
  }

  window.gtag("event", action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  });
};
