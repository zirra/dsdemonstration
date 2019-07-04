<template>
  <div class="content-container">
    <p>This is the management tool to create, modify or remove portal applications, promotions or giveaways.</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'home',
  mounted () {
    if (this.$route.name !== this.navCurrent){
      this.setCurrentNav(this.$route.name)
    }
  },
  methods: {
    ...mapActions([
      'setCurrentNav'
    ])
  },
  computed: {
    ...mapGetters([
      'navCurrent',
      'user'
    ])
  }
}
</script>
