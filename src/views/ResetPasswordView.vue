<template>
  <div class="max-w-md mx-auto mt-20 bg-white shadow rounded p-6">
    <h1 class="text-2xl font-bold mb-4">Redefinir senha</h1>
    <input v-model="password" type="password" placeholder="Nova senha"
          class="w-full border p-2 rounded mb-4"/>
    <button @click="submitNewPassword"
            class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full">
      Alterar senha
    </button>
    <p v-if="message" class="mt-4 text-green-600">{{ message }}</p>
    <p v-if="error" class="mt-4 text-red-600">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { resetPassword } from "@/services/AuthService";

const route = useRoute();
const router = useRouter();

const password = ref("");
const message = ref("");
const error = ref("");

const submitNewPassword = async () => {
  try {
    const token = route.params.token;
    const { data } = await resetPassword(token, password.value);
    message.value = data.message;
    error.value = "";
    setTimeout(() => router.push("/login"), 2000);
  } catch (err) {
    error.value = err.response?.data?.message || "Erro ao redefinir senha";
    message.value = "";
  }
};
</script>
