<template>
    <div id='tagCloud'>
        <svg width='100%' height='100%' @mousemove='listener($event)'>
            <a v-for = 'tag in textTags'>
                <text :x='tag.x' :y='tag.y' @click='tagClick($event)' :font-size='height / 20 * (600 / (600-tag.z))' :fill-opacity='((400+tag.z)/600)'>{{tag.text}}</text>
            </a>
        </svg>
    </div>
</template>
<script>
export default{
  props: ['tags', 'width', 'height', 'r'],
  data () {
    return {
      speedX: Math.PI / 360,
      speedY: Math.PI / 360,
      textTags: null
    }
  },
  computed: {
    CX () {
      return this.width / 2
    },
    CY () {
      return this.height / 2
    }
  },
  mounted () {
  },
  watch: {
    'tags': 'getTags',
    'textTags': 'rotate'
  },
  methods: {
    getTags () {
      console.log(this.tags)
      let tags = []
      let tagsNum = this.tags.length
      console.log(tagsNum)
      for (let i = 0; i < tagsNum; i++) {
        let tag = {}
        let k = -1 + (2 * (i + 1) - 1) / tagsNum
        let a = Math.acos(k)
        let b = a * Math.sqrt(tagsNum * Math.PI)
        tag.text = this.tags[i]
        tag.x = this.CX + this.r * Math.sin(a) * Math.cos(b)
        tag.y = this.CY + this.r * Math.sin(a) * Math.sin(b)
        tag.z = this.r * Math.cos(a)
        tag.href = `/tags?tag=${tag.text}`
        tags.push(tag)
      }
      this.textTags = tags
    },
    rotate () {
      setInterval(() => {
        this.rotateX(this.speedX)
        this.rotateY(this.speedY)
      }, 17)
    },
    rotateX (angleX) {
      var cos = Math.cos(angleX)
      var sin = Math.sin(angleX)
      for (let tag of this.textTags) {
        var y1 = (tag.y - this.CY) * cos - tag.z * sin + this.CY
        var z1 = tag.z * cos + (tag.y - this.CY) * sin
        tag.y = y1
        tag.z = z1
      }
    },
    rotateY (angleY) {
      var cos = Math.cos(angleY)
      var sin = Math.sin(angleY)
      for (let tag of this.textTags) {
        var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX
        var z1 = tag.z * cos + (tag.x - this.CX) * sin
        tag.x = x1
        tag.z = z1
      }
    },
    listener (event) {
      var x = event.clientX - this.CX
      var y = event.clientY - this.CY
      this.speedX = x * 0.0001 > 0 ? Math.min(this.r * 0.00002, x * 0.0001) : Math.max(-this.r * 0.00002, x * 0.0001)
      this.speedY = y * 0.0001 > 0 ? Math.min(this.r * 0.00002, y * 0.0001) : Math.max(-this.r * 0.00002, y * 0.0001)
    },
    tagClick (evt) {
      console.log(evt.target.innerHTML)
      this.$emit('tagClick', evt.target.innerHTML)
    }
  }
}
</script>

<style lang='stylus'>
#tagCloud
  min-height: 300px
  &:before
    font-size: 5em
    color: #ddd
    position: relative

</style>
