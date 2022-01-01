<template>
  <Navigation></Navigation>
  <router-view/>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  components: {Navigation}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --white1: #ffffff;
  --white2: #f9fbfc;
  --white3: #f0f0f0;
  --black1: #30333d;
  --purple1: #6a00ffb3;
  --purple1hover: linear-gradient(
      90deg,
      rgba(106, 0, 255, 0.42930675688244047) 0%,
      rgba(209, 0, 255, 0.43) 100%
  );
  --purple2: #e9eff4;
  --gray1: #a4acb2;
}
body {
  height: 100%;
  scroll-behavior: smooth;
  font-family: 'Nunito', sans-serif;
  font-display: auto;
  overflow: hidden;
}

</style>

