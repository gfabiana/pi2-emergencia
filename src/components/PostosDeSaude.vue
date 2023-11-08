<template>
    <div>
      <!-- Seu código para exibir o mapa aqui -->
      <div v-for="posto in postosDeSaude" :key="posto.id">
        {{ posto.nome }} - Lat: {{ posto.latitude }}, Lng: {{ posto.longitude }}
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        postosDeSaude: [],
      };
    },
    mounted() {
      axios.get('http://localhost:3000/api/postos-de-saude') // Substitua a URL com o endpoint correto
        .then(response => {
          this.postosDeSaude = response.data;
        })
        .catch(error => {
          console.error('Erro ao buscar os postos de saúde:', error);
        });
    },
  };
  </script>  