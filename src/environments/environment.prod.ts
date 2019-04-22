export let Api_Url = "";
switch (window.location.hostname) {
  case "https://localhost:4200":
  Api_Url = "http://localhost:51594";
  break;
  default:
  Api_Url = "https://vacationsunitedwebapi20190422124815.azurewebsites.net";
  break;
};

export const environment = {
  production: true
};

