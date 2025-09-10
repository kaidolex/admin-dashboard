export default defineNuxtRouteMiddleware((to) => {
  // Mock authentication state
  // In a real app, this would check a JWT token, session, or call an API
  const isAuthenticated = typeof window !== "undefined" ? localStorage.getItem("isAuthenticated") === "true" : false;

  // If user is not authenticated and trying to access protected routes
  if (!isAuthenticated && to.path !== "/auth") {
    return navigateTo("/auth");
  }

  // If user is authenticated and trying to access auth page, redirect to dashboard
  if (isAuthenticated && to.path === "/auth") {
    return navigateTo("/");
  }
});
