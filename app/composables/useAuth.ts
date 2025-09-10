export const useAuth = () => {
  // Mock authentication state
  const isAuthenticated = ref(false);
  const user = ref<{ email: string; name: string } | null>(null);

  // Initialize auth state on client side
  onMounted(() => {
    if (typeof window !== "undefined") {
      const authState = localStorage.getItem("isAuthenticated");
      const userData = localStorage.getItem("user");

      isAuthenticated.value = authState === "true";
      user.value = userData ? JSON.parse(userData) : null;
    }
  });

  // Login function
  const login = async (email: string, password: string, rememberMe: boolean = false) => {
    // Mock validation - in real app, this would call an API
    if (email && password.length >= 6) {
      const emailParts = email.split("@");
      const emailPrefix: string = emailParts[0] || "User";
      const mockUser = {
        email,
        name: emailPrefix.charAt(0).toUpperCase() + emailPrefix.slice(1),
      };

      // Set auth state
      isAuthenticated.value = true;
      user.value = mockUser;

      // Persist to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("user", JSON.stringify(mockUser));

        if (rememberMe) {
          localStorage.setItem("rememberMe", "true");
        }
      }

      return { success: true };
    }

    return { success: false, error: "Invalid credentials" };
  };

  // Logout function
  const logout = () => {
    isAuthenticated.value = false;
    user.value = null;

    if (typeof window !== "undefined") {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("user");
      localStorage.removeItem("rememberMe");
    }

    navigateTo("/auth");
  };

  return {
    isAuthenticated: readonly(isAuthenticated),
    user: readonly(user),
    login,
    logout,
  };
};
