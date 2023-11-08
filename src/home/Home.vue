<template>
 <main>
 <div class="text-top"><h1>Busca Emergência</h1></div>
 <div>
  <GmapMap
   :center="{lat:-22.89551203026097, lng:-47.06448160600627}"
   :zoom="20"
   map-type-id="terrain"
   style="width: 500px; height: 300px"
   >
  <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="true"
    @click="center=m.position"
  />
  </GmapMap> 
 </div>
 </main>
</template>

<script>
 export default{
    name: 'Home'
 }
</script>

<style scoped>
 main{
    background-color: var(--color-background-home);
    justify-content: center;
    align-items: center;
 }

 .text-top{
    color: var(--color-text-light);
    font-size:22px;
    margin-bottom: 20px;
 }

</style>