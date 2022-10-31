export default function authenticate(response, next) {
  if (window !== "undefined") {
    //เก็บข้อมูลลงใน session storage
    sessionStorage.setItem("token", JSON.stringify(response.data.token));
    sessionStorage.setItem("user", JSON.stringify(response.data.username));
  }
  next();
}
