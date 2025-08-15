<template>

  <div class="p-6 space-y-6">

    <h1 class="text-2xl font-bold mb-4">Lista de Clientes</h1>

    <table class="w-full border-collapse bg-white shadow rounded-lg">

      <thead>

        <tr class="bg-gray-100 text-left">

          <th class="p-3">Nome</th>

          <th class="p-3">Telefone</th>

        </tr>

      </thead>

      <tbody>
        <tr v-for="client in clients" :key="client.id" class="border-t hover:bg-gray-50">
          <td class="p-3">{{ client.name }}</td>
          <td class="p-3">{{ client.phone }}</td>
          <td class="py-2 px-4 border-b text-center">
            <button
              @click="editClient(client.id)"
              class="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded mr-2"
            >
              Editar
            </button>
            <button
              @click="removeClient(client.id)"
              class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getAllClients, deleteClient } from "@/services/ClientsService";
import { useRouter } from "vue-router";

const router = useRouter();
const clients = ref([]);

const loadClients = async () => {
  const token = localStorage.getItem("token");
  const data = await getAllClients(token);
  clients.value = data;
};

const editClient = (id) => {
  router.push(`/clients/${id}/edit`);
};

const removeClient = async (id) => {

  if(confirm("Tem certeza que deseja excluir esse cliente?")) {

    const token = localStorage.getItem("token")
    await deleteClient(id,token)
    await loadClients()

  }

}

onMounted(loadClients);

const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });
};
</script>
