const prod = {
  ABS_PATH: "/wp-content/themes/stadium8",
  MAPS_API_KEY: "AIzaSyAQ4wGzedKfUyIE85AUA1vZQt539s4U-4A",
  FB_API_KEY: "844108232681291",
  status: "PROD"
};

const dev = {
  ABS_PATH: "",
  MAPS_API_KEY: "",
  FB_API_KEY: "844108232681291",
  status: "DEV"
};

export const Config = process.env.NODE_ENV === "development" ? dev : prod;
