<template>
              <footer class="mdl-mini-footer centered" v-if='show'>
              <div class="mdl-mini-footer--center-section">
                          powered by Vue, <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="rgb(158,158,158)" d="M14.6,16.6L19.2,12L14.6,7.4L16,6L22,12L16,18L14.6,16.6M9.4,16.6L4.8,12L9.4,7.4L8,6L2,12L8,18L9.4,16.6Z" />
          </svg> with <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="rgb(158,158,158)" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C8.17,3 8.82,3.12 9.44,3.33L13,9.35L9,14.35L12,21.35V21.35M16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35L11,14.35L15.5,9.35L12.85,4.27C13.87,3.47 15.17,3 16.5,3Z" />
          </svg> by imgss
              </div>
            </footer>
</template>
<script>
export default {
  data () {
    return {}
  },
  props: ['show']
}
</script>

<style lang='stylus'>
.centered.mdl-mini-footer
  justify-content: center
</style>
