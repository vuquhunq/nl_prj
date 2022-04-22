export const access_token = localStorage.getItem("access_token");
export const access_admin_token = localStorage.getItem("access_admin_token")
function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
export const infoUser = access_token && parseJwt(access_token)
export const infoAdmin = access_admin_token && parseJwt(access_admin_token) 
export const cartDetail = localStorage.getItem("cart-detail")