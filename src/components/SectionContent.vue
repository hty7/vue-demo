<template>
  <section class="section-content">
    <div class="content">
      <!-- 正文内容 -->
      <div>
        <slot name="body"></slot>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    needPadded: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
  },
  created () {}
}
</script>
<style lang="scss" scoped>
</style>
