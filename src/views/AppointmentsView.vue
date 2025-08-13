<template>
  <div class="space-y-6">
    <AppointmentForm @appointment-added="fetchAppointments" />
    <AppointmentList :appointments="appointments" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { getAllAppointments } from '@/services/AppointmentsService'
import AppointmentForm from '../components/AppointmentForm.vue'
import AppointmentList from '../components/AppointmentList.vue'

const appointments = ref([])

async function fetchAppointments() {

  try {

    const token = localStorage.getItem('token')

    if (!token) {
      console.error('Token não encontrado')
      return
    }

    const data = await getAllAppointments(token)
    appointments.value = data

  } catch (error) {
    console.error('Erro ao buscar agendamentos:', error)
  }
}

onMounted(() => {
  fetchAppointments()
})
</script>
