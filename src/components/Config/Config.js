const prod = {
  ABS_PATH: "/wp-content/themes/stadium8",
  MAPS_API_KEY: "AIzaSyAQ4wGzedKfUyIE85AUA1vZQt539s4U-4A",
  status: "PROD"
};

const dev = {
  ABS_PATH: "",
  MAPS_API_KEY: "",
  status: "DEV"
};

export const Config = process.env.NODE_ENV === "development" ? dev : prod;
