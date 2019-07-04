<template>
  <div class="content-pillbox">
    <div class="content-pillbox-container">
      <h3>{{item.title}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pillbox-view',
  props: [
    'item'
  ]
}
</script>

<style>
.content-pillbox {
  width: 32%;
  float: left;
  background-color: #fff;
  border-radius: 10px;
  min-height: 200px; /* minimum height */
  position: relative;
}
.content-pillbox-container {
  font-size: 1.2em;
  text-align: left;
  padding: 15px 25px;
  color: #404040;
}
</style>
