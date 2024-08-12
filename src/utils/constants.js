export const HOST = import.meta.env.VITE_SERVER_URL;

export const USER_ROUTES = "api/v1/users";
export const POST_ROUTE = "api/v1/posts";
export const COMMENT_ROUTE = "api/v1/comments/";
export const LIKE_ROUTE = "api/v1/likes/toggle/p/";
export const REGISTER_ROUTE = `${USER_ROUTES}/register`;
export const LOGIN_ROUTE = `${USER_ROUTES}/login`;
export const LOGOUT_ROUTE = `${USER_ROUTES}/logout`;
export const GET_ALL_POSTS = `${POST_ROUTE}`;
export const CREATE_POST_ROUTE = `${POST_ROUTE}`;

// export const GET_USER_INFO = `${AUTH_ROUTES}/user-info`;