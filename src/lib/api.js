export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
export const MAPON_API_KEY = process.env.REACT_APP_MAPON_API_KEY;

export const VEHICLES_API = `https://mapon.com/api/v1/unit/list.json?key=${MAPON_API_KEY}`;
export const ROUTES_API = `https://mapon.com/api/v1/route/list.json?key=${MAPON_API_KEY}`;
