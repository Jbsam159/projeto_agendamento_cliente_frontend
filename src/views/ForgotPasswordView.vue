<template>
  <div class="max-w-md mx-auto mt-20 bg-white shadow rounded p-6">
    <h1 class="text-2xl font-bold mb-4">Esqueci minha senha</h1>
    <input v-model="email" type="email" placeholder="Seu e-mail"
          class="w-full border p-2 rounded mb-4"/>
    <button @click="submitEmail"
            class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full">
      Enviar link de redefinição
    </button>
    <p v-if="message" class="mt-4 text-green-600">{{ message }}</p>
    <p v-if="error" class="mt-4 text-red-600">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { forgotPassword } from "@/services/AuthService";

const email = ref("");
const message = ref("");
const error = ref("");

const submitEmail = async () => {
  try {
    const { data } = await forgotPassword(email.value);
    message.value = data.message;
    error.value = "";
  } catch (err) {
    error.value = err.response?.data?.message || "Erro ao enviar e-mail";
    message.value = "";
  }
};
</script>
