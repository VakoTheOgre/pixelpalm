export default {
    data() {
      return {
        windowWidth: 0,
        device: ''
      }
    },
    mounted() {
      this.windowWidth = window.innerWidth
      if(this.windowWidth > 1400) {
        this.device = 'desktop'
      } else {
        this.device = 'mobile'
      }
      this.$nextTick(() => {
        window.addEventListener('resize', () => {
          this.windowWidth = window.innerWidth
          if(this.windowWidth > 1200) {
            this.device = 'desktop'
          } else {
            this.device = 'mobile'
          }
        });
      })
    },
  }
  