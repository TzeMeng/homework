<template>
  <div id="app">
    <FirebaseBubble></FirebaseBubble>
  </div>
</template>

<script>
//import BubbleChart from './components/BubbleChart.vue'
import FirebaseBubble from './components/FirebaseData.vue'
export default {
  name: 'app',
  components: {
    FirebaseBubble
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
