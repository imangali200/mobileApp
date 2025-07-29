export default defineNuxtRouteMiddleware(() => {
  const token = useCookie("token");


  if (!token) {
    return navigateTo("/auth/login");
  }
});
