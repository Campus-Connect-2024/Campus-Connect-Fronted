export const HOST = import.meta.env.VITE_SERVER_URL;

export const USER_ROUTES = "api/v1/users";
export const POST_ROUTE = "api/v1/posts";
export const REGISTER_ROUTE = `${USER_ROUTES}/register`;
export const LOGIN_ROUTE = `${USER_ROUTES}/login`;
export const GET_ALL_POSTS = `${POST_ROUTE}`;
// export const GET_USER_INFO = `${AUTH_ROUTES}/user-info`;