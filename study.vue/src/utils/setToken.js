//创建一个token
export function setToken(tokenKey,token){
  return localStorage.setItem(tokenKey,token)
}

//获取token
export function getToken(tokenKey){
  return localStorage.getItem(tokenKey)
}

//销毁token
export function removeToken(tokenKey){
  return localStorage.removeItem(tokenKey)
}