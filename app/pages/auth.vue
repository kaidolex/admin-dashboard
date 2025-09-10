<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <!-- Header -->
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-2">Welcome Back</h1>
        <p class="text-slate-600 dark:text-slate-400">Sign in to your admin dashboard</p>
      </div>

      <!-- Login Form Card -->
      <Card class="shadow-lg border-slate-200 dark:border-slate-700">
        <CardHeader class="space-y-1 pb-6">
          <CardTitle class="text-2xl font-semibold text-center text-slate-900 dark:text-slate-100"> Sign In </CardTitle>
        </CardHeader>

        <CardContent class="space-y-6">
          <form @submit.prevent="handleLogin" class="space-y-4">
            <!-- Email Field -->
            <div class="space-y-2">
              <Label for="email" class="text-slate-700 dark:text-slate-300"> Email Address </Label>
              <Input id="email" v-model="email" type="email" placeholder="admin@example.com" required class="h-11" :class="{ 'border-red-500 dark:border-red-400': emailError }" />
              <p v-if="emailError" class="text-sm text-red-500 dark:text-red-400">
                {{ emailError }}
              </p>
            </div>

            <!-- Password Field -->
            <div class="space-y-2">
              <Label for="password" class="text-slate-700 dark:text-slate-300"> Password </Label>
              <div class="relative">
                <Input
                  id="password"
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="••••••••"
                  required
                  class="h-11 pr-10"
                  :class="{ 'border-red-500 dark:border-red-400': passwordError }"
                />
                <button
                  type="button"
                  @click="togglePasswordVisibility"
                  class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300 transition-colors"
                >
                  <svg v-if="showPassword" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                    />
                  </svg>
                </button>
              </div>
              <p v-if="passwordError" class="text-sm text-red-500 dark:text-red-400">
                {{ passwordError }}
              </p>
            </div>

            <!-- Remember Me Checkbox -->
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <Checkbox id="remember" v-model:checked="rememberMe" class="border-slate-300 dark:border-slate-600" />
                <Label for="remember" class="text-sm text-slate-600 dark:text-slate-400 cursor-pointer"> Remember me </Label>
              </div>
            </div>

            <!-- Submit Button -->
            <Button type="submit" class="w-full h-11 text-base font-medium" :disabled="isLoading">
              <svg v-if="isLoading" class="w-4 h-4 mr-2 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              {{ isLoading ? "Signing In..." : "Sign In" }}
            </Button>
          </form>
        </CardContent>
      </Card>

      <!-- Footer -->
      <div class="mt-8 text-center">
        <p class="text-sm text-slate-500 dark:text-slate-400">Admin Dashboard v1.0</p>
        <div class="mt-4">
          <Button variant="ghost" size="sm" @click="toggleTheme">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            Toggle Theme
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

// Meta data for the page
useSeoMeta({
  title: "Admin Dashboard - Sign In",
  ogTitle: "Admin Dashboard - Sign In",
  description: "Sign in to your admin dashboard",
  ogDescription: "Sign in to your admin dashboard",
});

// Form state
const email = ref("");
const password = ref("");
const rememberMe = ref(false);
const showPassword = ref(false);
const isLoading = ref(false);

// Validation errors
const emailError = ref("");
const passwordError = ref("");

// Form validation
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

// Methods
const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const toggleTheme = () => {
  document.documentElement.classList.toggle("dark");
};

const handleLogin = async () => {
  // Reset errors
  emailError.value = "";
  passwordError.value = "";

  // Validate form
  let hasErrors = false;

  if (!email.value) {
    emailError.value = "Email is required";
    hasErrors = true;
  } else if (!validateEmail(email.value)) {
    emailError.value = "Please enter a valid email address";
    hasErrors = true;
  }

  if (!password.value) {
    passwordError.value = "Password is required";
    hasErrors = true;
  } else if (!validatePassword(password.value)) {
    passwordError.value = "Password must be at least 6 characters";
    hasErrors = true;
  }

  if (hasErrors) return;

  // Start loading state
  isLoading.value = true;

  try {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Use auth composable to login
    const { login } = useAuth();
    const result = await login(email.value, password.value, rememberMe.value);

    if (result.success) {
      // Redirect to dashboard will be handled by middleware
      await navigateTo("/");
    } else {
      passwordError.value = result.error || "Login failed";
    }
  } catch (error) {
    console.error("Login error:", error);
    passwordError.value = "An unexpected error occurred";
  } finally {
    isLoading.value = false;
  }
};
</script>
