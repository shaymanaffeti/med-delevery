<template>
  <div class="wrapper">
    <button class="button-24" role="button" @click="logout()">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout: function () {
      sessionStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
/* CSS */
.button-24 {
  background: #6d0805;
  border: 1px solid #6d0805;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: nunito, roboto, proxima-nova, "proxima nova", sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  margin-left: 50px;
  margin-bottom: 50px;
}

.button-24:hover,
.button-24:active {
  background-color: initial;
  background-position: 0 0;
  color: #6d0805;
}

.button-24:active {
  opacity: 0.5;
}
</style>
