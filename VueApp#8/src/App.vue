<template>
    <div class="container">
      <app-header> </app-header>
      <app-server></app-server>
      <app-footer
      ></app-footer
      >
    </div>
</template>

<script>
  import Header from './components/Shared/Header.vue'
  import Server from './components/Server/Server.vue'
  import Footer from './components/Shared/Footer.vue'

  export default{
    components:{
      'app-header': Header,
      'app-server': Server,
      'app-footer': Footer
    }
  }
</script>

<style>

</style>
