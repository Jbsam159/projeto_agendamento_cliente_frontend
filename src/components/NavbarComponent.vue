<template>
  <nav class="bg-white shadow-md fixed w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">

        <!-- Logo / Marca -->
        <div class="flex-shrink-0">
          <router-link to="/" class="text-2xl font-bold text-gray-600">Agendamento de Cliente</router-link>
        </div>

        <!-- Menu desktop -->
        <div class="hidden md:flex space-x-6">
          <router-link to="/login" class="text-gray-700 hover:text-blue-600 font-medium">Login</router-link>
          <router-link to="/register" class="text-gray-700 hover:text-blue-600 font-medium">Registrar</router-link>
          <router-link to="/appointments" class="text-gray-700 hover:text-blue-600 font-medium">Agendamentos</router-link>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="mobileMenuOpen = !mobileMenuOpen" type="button" aria-label="Menu" class="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </div>

    <!-- Menu mobile -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white px-4 pt-2 pb-3 space-y-1 shadow">
      <router-link to="/login" class="block px-3 py-2 rounded text-gray-700 hover:bg-blue-100">Login</router-link>
      <router-link to="/register" class="block px-3 py-2 rounded text-gray-700 hover:bg-blue-100">Registrar</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>
