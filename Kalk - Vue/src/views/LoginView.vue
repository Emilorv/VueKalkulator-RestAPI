<template>
  <div class="container">
    <div class="login">
    <div id="loginTitle">
      <label>Welcome! Please log in!</label>
    </div>
    <div id="username">
      <label id="usernameLabel">Username:</label>
      <input type="text" v-model="username">
    </div>
    <div id="password">
      <label id="passwordLabel">Password: </label>
      <input  type="text" v-model="password" id="password">
      <button class="btn" v-on:click="handleLoginClick" id="signinbutton">Sign in</button>
      <label id="loginstatusLabel">{{ loginStatus }}</label>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import router from '../router';
export default {
  name: "LoginView",
  methods: {
    handleLoginClick() {
      router.push("/Kalkulator");
    },
  },
  data() {
    return {
      username: "",
      password: "",
      loginStatus: "",
    };
  },
};
</script>

<style scoped>
.login{
  justify-content: center;
}
#loginTitle{
  font-size: x-large;
  font-weight: bold;
  margin: 10px;
}
</style>
