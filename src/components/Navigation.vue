<template>
  <div class="navbar text-light w-100 d-flex justify-content-between">
    <div class="nav-text m-0">
      <div class="nav_logo">
        <router-link class="about-href" to="/">VThu</router-link>
      </div>
      <div class="nav-freetext">
        <small>寧鳴而死，不默而生。</small>
      </div>
    </div>
    <div class="about">
      <router-link to="/about" class="about-href">關於</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "Navigation",
}
</script>

<style scoped>
h2 {
  font-weight: 600;
}

a:hover {
  color: unset;
}

.navbar {
  z-index: 1;
  background: var(--purple1);
  padding: 0.2em 1em;
}

@media screen and (max-width: 968px) {

  .navbar {
    padding: 1em;
  }
}

.nav-text {
  display: flex;
  width: auto;
}
.nav_logo {
  font-weight: bold;
  font-size: 1.5em;
  padding: 0.2em;
}
.nav-freetext {
  padding-left: 3%;
  padding-top: 6%;
  width: 150px;
 }

.about {
  padding-right: 3%;
}
.about-href {
  text-decoration: none;
  color: #f9fbfc
}
</style>
