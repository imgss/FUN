export default {
  install (Vue, options) {
    Vue.component('load', {
      props: ['text'],
      data: () => {
        return {}
      },
      template: `
        <div class='wrapper'>
          <div style = 'display:flex; justify-content:space-between; ' class='loading'>
            <span style='width:20px' v-for='char in text'>{{char}}</span>
          </div>
        </div>
      `
    })
  }
}
