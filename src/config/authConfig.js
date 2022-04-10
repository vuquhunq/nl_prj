export const access_user = localStorage.getItem("clientToken");
export const access_token = localStorage.getItem("access_token");
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
console.log(access_token && parseJwt(access_token))
export const info_admin = access_token && parseJwt(access_token)