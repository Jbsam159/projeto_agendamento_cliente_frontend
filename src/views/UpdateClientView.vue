<template>
  <div class="max-w-lg mx-auto p-6 bg-white shadow rounded-lg">
    <h1 class="text-2xl font-bold mb-4">Atualizar Cliente</h1>

    <form @submit.prevent="handleUpdate">
      <div class="mb-4">
        <label class="block text-sm font-medium">Nome</label>
        <input v-model="form.name" type="text" class="w-full border rounded p-2" required />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium">Email</label>
        <input v-model="form.email" type="email" class="w-full border rounded p-2" required />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium">Telefone</label>
        <input v-model="form.phone" type="text" class="w-full border rounded p-2" />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium">Notas</label>
        <textarea v-model="form.notes" class="w-full border rounded p-2"></textarea>
      </div>

      <button
        type="submit"
        class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Salvar Alterações
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getClientById, updateClient } from "@/services/ClientsService";

const route = useRoute();
const router = useRouter();
const form = ref({
  name: "",
  email: "",
  phone: "",
  notes: "",
});

onMounted(async () => {
  const token = localStorage.getItem("token");
  const clientData = await getClientById(route.params.id, token);
  form.value = clientData;
});

const handleUpdate = async () => {
  const token = localStorage.getItem("token");
  await updateClient(route.params.id, form.value, token);
  router.push("/clients");
};
</script>
