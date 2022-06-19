import requests from "./request";

export const reqGetNewsList=()=>requests({url:'/news/wxarticle/demo',method:'get'})