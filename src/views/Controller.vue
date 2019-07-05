<template>
  <div class="content-container">
    <stadium-controller />
  </div>
</template>

<script>
import StadiumControl from '@/components/navigation/StadiumControl'
export default {
  name: 'controller-view',
  components: {
    'stadium-controller': StadiumControl
  }
}
</script>

<style>

</style>
