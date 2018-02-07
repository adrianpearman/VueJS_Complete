<template lang="html">
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm the User!</p>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail.vue'
import UserEdit from './UserEdit.vue'

export default {
  components: {
    'app-user-detail': UserDetail,
    'app-user-edit': UserEdit
  }
}
</script>

<style>
  div{
    background-color: lightblue
  }
</style>
