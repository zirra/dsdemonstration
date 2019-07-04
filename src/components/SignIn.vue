<template>
  <div class="content-container">
    <div class="login">
      <h2 class="apricot" style="margin-top:32px; font-weight: 700;">sign in</h2>
      <p><input placeholder="EMAIL ADDRESS" v-model="username"/></p>
      <p><input placeholder="PASSWORD" type="password" v-model="password"/></p>
      <p><button @click="login" class="btn-ds-main">SIGN IN</button></p>
      <p>This portal is for demonstration purposes only, the data set and captured is refreshed routinely.</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      password: null,
      username: null
    }
  },
  methods: {
    login () {
      let user = { username: this.username, password: this.password}
      this.loginUser(user)
    },
    ...mapActions([
      'setCurrentNav',
      'loginUser'
    ])
  }
}
</script>

<style>
.login {
  margin: 0px auto;
  width: 80%;

  border-top: solid 4px #404040;
  border-bottom: solid 4px #404040;
  text-align: center;
  margin-top: 64px;
}
</style>
