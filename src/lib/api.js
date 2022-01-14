export const googleMapsApiKey = process.env.REACT_APP_GOOGLE_API_KEY;
export const mapOnApiKey = process.env.REACT_APP_MAPON_API_KEY;

export const carDataApi = `https://mapon.com/api/v1/unit/list.json?key=${mapOnApiKey}`;
export const routeDataApi = `https://mapon.com/api/v1/route/list.json?key=${mapOnApiKey}`;
