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
  color: black;

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

.light-content {
  display: flex;
  flex-direction: column;
  background-color: #C5C6C7;
}

.text-background {
  display: flex;
  flex: 1;
  justify-content: center;
  background-color: black;
  padding: 20px;
}

.text-accent {
  width: 90%;
  display: flex;
  justify-content: center;
  background-color: #45A29E;
  margin: 30px;
}

.text-container {
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:white;
  border-right: 30px solid black;
  border-left: 30px solid black;
  padding: 50px 0px 50px 0px;
}

.map-container {
  width: 98%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:white;
  border-right: 30px solid black;
  border-left: 30px solid black;
  padding: 50px 0px 50px 0px;
}

  /* Mobile Styles */
@media only screen and (max-width: 959px) {
  .text-background {
    padding: 0;
  }
  
  .text-accent {
    width: 100%;
    margin: 8px;
  }
  
  .text-container {
    width: 95%;
    border-right: 0;
    border-left: 0;
  }


  .map-container {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color:white;
    border-right: none;
    border-left: none;
    padding: none;
  }
}

</style>
