// export const AsideService = {
//   saveToggleState: (toggle) => {
//     window.localStorage.setItem("aside_type", `${toggle}`);
//   },
//   getToggleState: () => {
//     const t = window.localStorage.getItem("aside_type");
//     return t ? t === "true" : true;
//   },}

  export const saveToLocalStorage = (key, value) => {
    window.localStorage.setItem(key, `${value}`);
  };

  export const getFromLocalStorage = (key) => {
    return window.localStorage.getItem(key);
  };
  export const getLimitedSalesData = (data, limit = 6) => {
    return data.slice(0, limit);
  };