function loadAnalyticsScripts() {
  const loadGoogleAnalytics = () => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-EQKBSZDBB1";
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };

    window.gtag("js", new Date());
    window.gtag("config", "G-EQKBSZDBB1", { anonymize_ip: true });
  };

  const loadClarity = () => {
    (function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "rnc9ise1gp");
  };

  const idleLoad = () => {
    loadGoogleAnalytics();
    loadClarity();
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(idleLoad, { timeout: 3000 });
    return;
  }

  setTimeout(idleLoad, 1200);
}

window.addEventListener("load", loadAnalyticsScripts, { once: true });
