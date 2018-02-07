<template>
  <div class="container">
    <app-header></app-header>
    <hr />
    <div class="row">
      <app-servers></app-servers>
      <app-server-detail></app-server-detail>
    </div>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Shared/Header.vue'
import Footer from './components/Shared/Footer.vue'
import Server from './components/Server/Servers.vue'
import ServerDetails from './components/Server/ServerDetails.vue'


export default{
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-servers': Server,
    'app-server-detail': ServerDetails
  }
}
</script>

<style>
</style>
