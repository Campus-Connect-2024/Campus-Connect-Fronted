export const HOST = import.meta.env.VITE_SERVER_URL;
console.log(HOST);
export const USER_ROUTES = "api/v1/users";
export const CURRENT_USER_ROUTES = "api/v1/users/current-user";
export const POST_ROUTE = "api/v1/posts";
export const COMMENT_ROUTE = "api/v1/comments/";
export const LIKE_ROUTE = "api/v1/likes/toggle/p/";
export const REGISTER_ROUTE = `${USER_ROUTES}/register`;
export const LOGIN_ROUTE = `${USER_ROUTES}/login`;
export const LOGOUT_ROUTE = `${USER_ROUTES}/logout`;
export const GET_ALL_POSTS = `${POST_ROUTE}`;
export const GET_ALL_POSTS_BY_USER = `${POST_ROUTE}/user/`;
export const CREATE_POST_ROUTE = `${POST_ROUTE}`;
export const GET_USER_FOLLOWERS = `api/v1/followers/u/`;

// export const GET_USER_INFO = `${AUTH_ROUTES}/user-info`;

import Homesvg from "/src/assets/Home.svg";
import msgSvg from "/src/assets/message.svg";

import groupsvg from "/src/assets/peoplegroup.svg";

export const navLinks = [
  {
    name: "Home",
    path: "/",
    image: Homesvg,
  },
  {
    name: "Message",
    path: "/message",
    image: msgSvg,
  },
  {
    name: "Community",
    path: "/communities",
    image: groupsvg,
  },
  {
    name: "All people",
    path: "/all-people",
    image: groupsvg,
  },
];
