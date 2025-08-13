<template>
  <form @submit.prevent="handleSubmit" class="bg-white shadow-lg rounded-lg p-6 w-full max-w-md mx-auto">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">Novo Agendamento</h2>

    <div class="mb-4">
      <label for="clientName" class="block text-sm font-medium text-gray-700 mb-1">Nome do cliente</label>
      <input
        id="clientName"
        v-model="form.clientName"
        required
        class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>

    <div class="mb-4">
      <label for="date" class="block text-sm font-medium text-gray-700 mb-1">Data</label>
      <input
        id="date"
        type="date"
        v-model="form.date"
        required
        class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>

    <div class="mb-6">
      <label for="time" class="block text-sm font-medium text-gray-700 mb-1">Hora</label>
      <input
        id="time"
        type="time"
        v-model="form.time"
        required
        class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>

    <div class="mb-4">
      <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Descrição</label>
      <input
        id="description"
        v-model="form.description"
        required
        class="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>

    <button
      type="submit"
      class="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
    >
      Agendar
    </button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
import { createAppointment } from '@/services/AppointmentsService'

const form = reactive({
  date: '',
  time: '',
  description: ''
})

const emitEvent = defineEmits(['appointment-added'])

async function handleSubmit() {
  try {
    const token = localStorage.getItem('token')
    const clientId = localStorage.getItem('clientId') // pegando ID salvo no login

    if (!clientId) {
      console.error('Client ID não encontrado — usuário não logado corretamente.')
      return
    }

    // Monta datetime no formato esperado pelo backend
    const datetime = `${form.date} ${form.time}:00`

    const appointmentData = {
      clientId: parseInt(clientId),
      datetime,
      description: form.description
    }

    await createAppointment(appointmentData, token)

    emitEvent('appointment-added')

    // Reset
    form.date = ''
    form.time = ''
    form.description = ''
  } catch (err) {
    console.error('Erro ao criar agendamento:', err)
  }
}
</script>
