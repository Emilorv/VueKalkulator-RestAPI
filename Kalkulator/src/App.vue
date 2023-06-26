<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Kalkulator</router-link>
      <router-link to="/kontaktskjema">Kontakt </router-link>
    </div>
    <router-view />
  </div>
</template>

<script></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap");
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: "Poppins", sans-serif;
}
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #000;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
.container {
  transition: width 4s, height 3s;
}
.kalk:hover {
  height: 300px;
  width: 600px;
}
#nav {
  text-align: center;
  margin-top: 20px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 10px;
  padding: 10px;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
