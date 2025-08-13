<template>
  <div class="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl mx-auto mt-6">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Agendamentos</h2>

    <ul v-if="appointments.length" class="divide-y divide-gray-200">
      <li
        v-for="(appointment, index) in appointments"
        :key="appointment.id || index"
        class="py-3"
      >
        <p class="font-semibold text-gray-800">{{ appointment.client.name }}</p>
        <p class="text-sm text-gray-500">{{ appointment.description }} {{ appointment.datetime }} às {{ appointment.time }}</p>
      </li>
    </ul>

    <p v-else class="text-gray-500 italic">Nenhum agendamento cadastrado.</p>
  </div>
</template>

<script setup>
defineProps({
  appointments: {
    type: Array,
    required: true
  }
})
</script>
