<template>
  <div id="app">
    <MenuHeader/>
    <router-view class="bottom-buffer" />
    <BaseFooter/>
  </div>
</template>

<script>
import MenuHeader from '@/components/MenuHeader.vue'
import BaseFooter from '@/components/BaseFooter.vue'

export default {
  name: 'App',
  components: {
    MenuHeader,
    BaseFooter
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Lato:300,400&display=swap');

#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #C5C6C7;

  min-height: 100vh; 
  overflow: hidden;
  display: block;
  position: relative;
  padding-bottom: 85px; 
}

* {
	margin: 0;
  padding: 0;
}

.bottom-buffer {
  margin-bottom: 85px;
}

html {
  position: relative;
  min-height: 100%;
}

body {
  position: relative;
  min-height: 100%;
  background-color: black !important;
}
</style>
