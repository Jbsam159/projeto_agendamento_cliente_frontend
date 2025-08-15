import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import AppointmentsView from '@/views/AppointmentsView.vue'
import ClientsView from '@/views/ClientsView.vue'
import UpdateClientView from '@/views/UpdateClientView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/login", name: "Login", component: LoginView },
    { path: "/register", name: "Register", component: RegisterView },
    { path: "/appointments", name: "Appointments", component: AppointmentsView },
    { path: "/clients", name: "Clients", component: ClientsView },
    { path: "/clients/:id/edit", name: "UpdateClient", component: UpdateClientView },

  ],
})

export default router
