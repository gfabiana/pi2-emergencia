<template>
 <div>
  <GmapMap
   :center="{lat:10, lng:10}"
   :zoom="10"
   map-type-id="terrain"
   style="width: 100%; height: 400px"
   >
  <GmapMarker
    :key="index"
    v-for="(posto, index) in postosDeSaude"
    :position="posto.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
  </GmapMap> 
 </div>
</template>

<script>
 export default{

  data() {
    return{
      CAMPO_LATITUDE: SUA_LATITUDE,
      CAMPO_LONGITUDE: SUA_LONGITUDE,
      postosDeSaude: [
        // Array de objetos com informações sobre postos de saúde
        // Exemplo: { name: 'Nome do Posto', location: { lat: LAT, lng: LNG } }
      ],
    }
  },

  //  name: 'GoogleMap'
 }

 </script>

 <style scoped>

 </style>