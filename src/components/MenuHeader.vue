<template>
  <b-navbar toggleable="lg" class="navbar-light" variant="info">
    <b-navbar-brand><router-link to="/"><img src="@/assets/circleLogo.png" class="menu-image"></router-link></b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <router-link class="nav-link bg-black" to="/">Home</router-link>
        <router-link class="nav-link bg-black" to="/github-info">Github Info</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>  
</template>


<script>
export default {
  name: 'MenuHeader'
}
</script>

<style scoped>
.menu-image {
  height: 35px;
}

.navbar-light {
  background-color: #C5C6C7 !important;
}

.router-link-exact-active {
  text-decoration: underline !important;
}

.nav-link:hover {
  background-color: white;
}

.nav-link {
  border-left: 1px solid black;
  color: black !important;
}

</style>