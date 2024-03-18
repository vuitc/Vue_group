<template>
 <HeaderComponent></HeaderComponent>
 <div id="content">
  <router-view></router-view>
 </div>
<Footer></Footer>
</template>

<script>

import HeaderComponent from './components/partition/Header.vue'
import Footer from './components/partition/Footer.vue';
export default {
  name: 'IndexCompoment',
  components: {
    HeaderComponent,
    Footer
  }
}
</script>

<style>

</style>
