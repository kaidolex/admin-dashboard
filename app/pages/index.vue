<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
    <div class="container mx-auto px-4 py-16">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Header -->
        <h1 class="text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6">Nuxt Admin Dashboard</h1>
        <p class="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          A modern admin dashboard built with Nuxt 4, shadcn-nuxt, and Tailwind CSS. Explore the components and utilities showcase.
        </p>

        <!-- Navigation Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <!-- Test Page Card -->
          <div class="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 transition-transform hover:scale-105">
            <div class="mb-6">
              <div class="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">Component Test Page</h3>
              <p class="text-slate-600 dark:text-slate-400 mb-6">Explore all shadcn button variants, Tailwind utilities, and interactive components in action.</p>
            </div>
            <Button variant="default" size="lg" @click="navigateToTest" class="w-full"> View Test Page → </Button>
          </div>

          <!-- Future Dashboard Card -->
          <div class="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-200 dark:border-slate-700 opacity-60">
            <div class="mb-6">
              <div class="w-16 h-16 bg-slate-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">Admin Dashboard</h3>
              <p class="text-slate-600 dark:text-slate-400 mb-6">Full admin dashboard with charts, tables, forms, and data management features. Coming soon!</p>
            </div>
            <Button variant="outline" size="lg" disabled class="w-full"> Coming Soon </Button>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="flex flex-wrap justify-center gap-4">
          <Button variant="outline" size="sm" @click="toggleTheme">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
            Toggle Theme
          </Button>

          <Button variant="ghost" size="sm" @click="refreshPage">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Refresh
          </Button>
        </div>

        <!-- Tech Stack -->
        <div class="mt-16 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">Built with</p>
          <div class="flex flex-wrap justify-center gap-4 text-sm text-slate-600 dark:text-slate-400">
            <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full">Nuxt 4</span>
            <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full">Vue 3</span>
            <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full">TypeScript</span>
            <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full">shadcn-nuxt</span>
            <span class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full">Tailwind CSS</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";

// Meta data for the page
useSeoMeta({
  title: "Nuxt Admin Dashboard - Home",
  ogTitle: "Nuxt Admin Dashboard - Home",
  description: "A modern admin dashboard built with Nuxt 4, shadcn-nuxt, and Tailwind CSS",
  ogDescription: "A modern admin dashboard built with Nuxt 4, shadcn-nuxt, and Tailwind CSS",
});

// Methods
const navigateToTest = () => {
  navigateTo("/test");
};

const toggleTheme = () => {
  document.documentElement.classList.toggle("dark");
};

const refreshPage = () => {
  window.location.reload();
};
</script>
