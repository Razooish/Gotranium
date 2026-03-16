window.addEventListener(
  "DOMContentLoaded",
  () => {
    if (typeof emailjs !== "undefined") {
      emailjs.init({
        publicKey: "8k4-7oxN_rWduwj81",
      });
    }
  },
  { once: true }
);
