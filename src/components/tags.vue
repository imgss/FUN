<template>
<div >
    <div v-for='(tag, i) in tags'>
        <div>
            {{ tag }}
        </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'tags',
  data () {
    return {
    }
  },
  props: ['tags']
}
</script>


<style>

</style>
