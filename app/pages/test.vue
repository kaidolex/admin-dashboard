<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
    <!-- Header Section -->
    <div class="container mx-auto px-4 py-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">shadcn-nuxt Button & Tailwind Test Page</h1>
        <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          A comprehensive showcase of shadcn button components with various Tailwind CSS utilities and responsive design patterns.
        </p>
      </div>

      <!-- Button Variants Section -->
      <section class="mb-16">
        <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-8 text-center">Button Variants</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Default Buttons -->
          <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
            <h3 class="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">Default</h3>
            <div class="space-y-3">
              <Button variant="default" size="sm" @click="handleClick('Default Small')"> Small Button </Button>
              <Button variant="default" @click="handleClick('Default Medium')"> Medium Button </Button>
              <Button variant="default" size="lg" @click="handleClick('Default Large')"> Large Button </Button>
            </div>
          </div>

          <!-- Destructive Buttons -->
          <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
            <h3 class="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">Destructive</h3>
            <div class="space-y-3">
              <Button variant="destructive" size="sm" @click="handleClick('Destructive Small')"> Delete Item </Button>
              <Button variant="destructive" @click="handleClick('Destructive Medium')"> Remove User </Button>
              <Button variant="destructive" size="lg" @click="handleClick('Destructive Large')"> Permanently Delete </Button>
            </div>
          </div>

          <!-- Outline Buttons -->
          <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
            <h3 class="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">Outline</h3>
            <div class="space-y-3">
              <Button variant="outline" size="sm" @click="handleClick('Outline Small')"> Cancel </Button>
              <Button variant="outline" @click="handleClick('Outline Medium')"> Learn More </Button>
              <Button variant="outline" size="lg" @click="handleClick('Outline Large')"> View Details </Button>
            </div>
          </div>

          <!-- Secondary Buttons -->
          <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
            <h3 class="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">Secondary</h3>
            <div class="space-y-3">
              <Button variant="secondary" size="sm" @click="handleClick('Secondary Small')"> Settings </Button>
              <Button variant="secondary" @click="handleClick('Secondary Medium')"> Preferences </Button>
              <Button variant="secondary" size="lg" @click="handleClick('Secondary Large')"> Configuration </Button>
            </div>
          </div>

          <!-- Ghost Buttons -->
          <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
            <h3 class="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">Ghost</h3>
            <div class="space-y-3">
              <Button variant="ghost" size="sm" @click="handleClick('Ghost Small')"> Skip </Button>
              <Button variant="ghost" @click="handleClick('Ghost Medium')"> Maybe Later </Button>
              <Button variant="ghost" size="lg" @click="handleClick('Ghost Large')"> Not Now </Button>
            </div>
          </div>

          <!-- Link Buttons -->
          <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
            <h3 class="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">Link</h3>
            <div class="space-y-3">
              <Button variant="link" size="sm" @click="handleClick('Link Small')"> Small Link </Button>
              <Button variant="link" @click="handleClick('Link Medium')"> Medium Link </Button>
              <Button variant="link" size="lg" @click="handleClick('Link Large')"> Large Link </Button>
            </div>
          </div>
        </div>
      </section>

      <!-- Interactive Buttons with Icons -->
      <section class="mb-16">
        <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-8 text-center">Interactive Buttons with Actions</h2>

        <div class="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Button variant="default" @click="incrementCounter" class="w-full h-16 flex-col gap-1">
              <span class="text-xl font-bold">{{ counter }}</span>
              <span class="text-xs">Click to increment</span>
            </Button>

            <Button variant="destructive" @click="resetCounter" class="w-full h-16 flex-col gap-1">
              <span class="text-sm">Reset Counter</span>
              <span class="text-xs">Back to zero</span>
            </Button>

            <Button variant="outline" @click="toggleTheme" class="w-full h-16 flex-col gap-1">
              <span class="text-sm">Toggle Theme</span>
              <span class="text-xs">{{ isDark ? "Light" : "Dark" }} mode</span>
            </Button>

            <Button variant="secondary" @click="showAlert" class="w-full h-16 flex-col gap-1">
              <span class="text-sm">Show Alert</span>
              <span class="text-xs">Test interaction</span>
            </Button>
          </div>
        </div>
      </section>

      <!-- Tailwind Utilities Showcase -->
      <section class="mb-16">
        <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-8 text-center">Tailwind CSS Utilities Showcase</h2>

        <!-- Responsive Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          <!-- Colors & Gradients -->
          <div class="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
            <h3 class="text-lg font-bold mb-3">Gradients & Colors</h3>
            <div class="space-y-2">
              <div class="w-full h-3 bg-gradient-to-r from-red-500 to-yellow-500 rounded"></div>
              <div class="w-full h-3 bg-gradient-to-r from-green-500 to-blue-500 rounded"></div>
              <div class="w-full h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded"></div>
            </div>
          </div>

          <!-- Spacing & Layout -->
          <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
            <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">Spacing & Layout</h3>
            <div class="space-y-4">
              <div class="p-2 bg-blue-100 dark:bg-blue-900 rounded text-center text-sm">p-2</div>
              <div class="p-4 bg-green-100 dark:bg-green-900 rounded text-center text-sm">p-4</div>
              <div class="p-6 bg-purple-100 dark:bg-purple-900 rounded text-center text-sm">p-6</div>
            </div>
          </div>

          <!-- Typography -->
          <div class="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md">
            <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100 mb-3">Typography</h3>
            <div class="space-y-2">
              <p class="text-xs text-slate-600 dark:text-slate-400">Extra small text</p>
              <p class="text-sm text-slate-600 dark:text-slate-400">Small text</p>
              <p class="text-base text-slate-600 dark:text-slate-400">Base text</p>
              <p class="text-lg font-medium text-slate-900 dark:text-slate-100">Large text</p>
              <p class="text-xl font-bold text-slate-900 dark:text-slate-100">Extra large text</p>
            </div>
          </div>
        </div>

        <!-- Flexbox & Grid Examples -->
        <div class="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg">
          <h3 class="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6 text-center">Flexbox & Grid Layouts</h3>

          <!-- Flexbox Example -->
          <div class="mb-8">
            <h4 class="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">Flexbox Layout</h4>
            <div class="flex flex-wrap gap-4 justify-center items-center p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <Button variant="default" size="sm">Flex Item 1</Button>
              <Button variant="outline" size="sm">Flex Item 2</Button>
              <Button variant="secondary" size="sm">Flex Item 3</Button>
              <Button variant="ghost" size="sm">Flex Item 4</Button>
            </div>
          </div>

          <!-- Grid Example -->
          <div>
            <h4 class="text-lg font-medium text-slate-900 dark:text-slate-100 mb-4">Grid Layout</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <Button variant="default" class="col-span-2">Spanning 2 columns</Button>
              <Button variant="destructive">Grid 1</Button>
              <Button variant="outline">Grid 2</Button>
            </div>
          </div>
        </div>
      </section>

      <!-- State Display -->
      <section class="mb-16">
        <h2 class="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-8 text-center">Component State & Interactions</h2>

        <div class="bg-white dark:bg-slate-800 rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
          <div class="text-center space-y-4">
            <div class="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <p class="text-slate-600 dark:text-slate-400">Current Counter Value:</p>
              <p class="text-3xl font-bold text-slate-900 dark:text-slate-100">{{ counter }}</p>
            </div>

            <div class="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <p class="text-slate-600 dark:text-slate-400">Last Button Clicked:</p>
              <p class="text-lg font-medium text-slate-900 dark:text-slate-100">
                {{ lastClickedButton || "None yet" }}
              </p>
            </div>

            <div class="p-4 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <p class="text-slate-600 dark:text-slate-400">Theme Mode:</p>
              <p class="text-lg font-medium text-slate-900 dark:text-slate-100">
                {{ isDark ? "Dark Mode" : "Light Mode" }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="text-center py-8 border-t border-slate-200 dark:border-slate-700">
        <p class="text-slate-600 dark:text-slate-400">Built with Nuxt 4, shadcn-nuxt, and Tailwind CSS</p>
        <div class="flex justify-center gap-4 mt-4">
          <Button variant="link" size="sm" @click="navigateHome"> ← Back to Home </Button>
          <Button variant="link" size="sm" @click="refreshPage"> Refresh Page </Button>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";

// Meta data for the page
useSeoMeta({
  title: "shadcn-nuxt Button & Tailwind Test Page",
  ogTitle: "shadcn-nuxt Button & Tailwind Test Page",
  description: "A comprehensive showcase of shadcn button components with various Tailwind CSS utilities.",
  ogDescription: "A comprehensive showcase of shadcn button components with various Tailwind CSS utilities.",
});

// Reactive state
const counter = ref(0);
const lastClickedButton = ref<string>("");
const isDark = ref(false);

// Methods
const incrementCounter = () => {
  counter.value++;
  lastClickedButton.value = "Increment Counter";
};

const resetCounter = () => {
  counter.value = 0;
  lastClickedButton.value = "Reset Counter";
};

const handleClick = (buttonName: string) => {
  lastClickedButton.value = buttonName;
};

const toggleTheme = () => {
  isDark.value = !isDark.value;
  lastClickedButton.value = "Toggle Theme";
  // Note: In a real app, you'd implement actual theme switching logic here
  document.documentElement.classList.toggle("dark");
};

const showAlert = () => {
  lastClickedButton.value = "Show Alert";
  alert("Hello from the shadcn button test page! 🎉");
};

const navigateHome = () => {
  navigateTo("/");
};

const refreshPage = () => {
  window.location.reload();
};

// Initialize theme on mount
onMounted(() => {
  isDark.value = document.documentElement.classList.contains("dark");
});
</script>
