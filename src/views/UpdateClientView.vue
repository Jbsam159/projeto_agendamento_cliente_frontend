<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
      <h1 class="text-xl font-bold mb-4 text-center">Atualizar Cliente</h1>
      
      <form @submit.prevent="updateClient">
        <div class="mb-4">
          <label class="block text-gray-700">Nome</label>
          <input v-model="name" type="text" class="w-full border rounded-lg p-2" />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input v-model="email" type="email" class="w-full border rounded-lg p-2" />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">Telefone</label>
          <input v-model="phone" type="text" class="w-full border rounded-lg p-2" />
        </div>

        <div class="mb-4">
          <label class="block text-gray-700">Notas</label>
          <textarea v-model="notes" class="w-full border rounded-lg p-2"></textarea>
        </div>

        <button type="submit" class="w-full bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700">
          Salvar Alterações
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("Admin 2");
const email = ref("admin2@example.com");
const phone = ref("(22)2222-2222");
const notes = ref("Admin 2");

const updateClient = () => {
  console.log("Atualizando cliente...");
};
</script>
