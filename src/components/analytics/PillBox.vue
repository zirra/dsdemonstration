<template>
  <div class="content-pillbox">
    <div class="content-pillbox-container">
      <h3>{{item.title}}</h3>
      <div style="width:100%; margin:0px auto; font-size: 5em; font-weight: 300; line-height: .78em;">{{item.value}}</div>
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
  min-height: 180px; /* minimum height */
  position: relative;
}
.content-pillbox-container {
  font-size: 1.2em;
  text-align: center;
  padding: 0px 25px;
  color: #404040;
}
</style>
