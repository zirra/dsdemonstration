<template>
  <div class="content-pillbox">
    <div class="content-pillbox-container">
      test
    </div>
  </div>
</template>

<script>
export default {
  name: 'pillbox-view'
}
</script>

<style>
.content-pillbox {
  width: 32%;
  float: left;
  height:240px;
  background-color: #fff;
  border-radius: 15px;
  min-height: 200px; /* minimum height */
  position: relative;
}
.content-pillbox-container {
  font-size: 1.2em;
  text-align: center;
  padding: 25px 0;
  color: #404040;
}
</style>
