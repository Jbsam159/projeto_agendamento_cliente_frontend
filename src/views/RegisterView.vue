<template>
  <div class="register-page">
    <h2>Registrar</h2>
    <form @submit.prevent="handleRegister">
      <input v-model="name" type="text" placeholder="Nome" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Senha" required />
      <input v-model="phone" type="text" placeholder="phone" required />
      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const name = ref('');
const email = ref('');
const password = ref('');
const phone = ref('');
const router = useRouter();

const handleRegister = async () => {
  try {
    await axios.post('http://localhost:3000/auth/register', {
      name: name.value,
      email: email.value,
      password: password.value,
      phone: phone.value
    });
    router.push('/login');
    alert('Cliente Registrado Com Sucesso');
  } catch (err) {
    alert('Erro ao registrar. Tente novamente.');
    console.error(err);
  }
};
</script>
