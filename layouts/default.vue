<template>
  <div
  class="theme-container"
    
    @touchstart="onTouchStart"
    @touchend="onTouchEnd">
    <Navbar
      @toggle-sidebar="toggleSidebar"
    />
    <nuxt-link to="/">Accueil</nuxt-link>
    <nuxt-link to="/hello">Hello</nuxt-link>
    <nuxt-link to="/">About </nuxt-link>
    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    ></div>

    <Sidebar
      @toggle-sidebar="toggleSidebar"
    >
      <slot
        name="sidebar-top"
        slot="top"
      />
      <slot
        name="sidebar-bottom"
        slot="bottom"
      />
    </Sidebar>


    <Page>
      <slot
        name="page-top"
        slot="top"
      />
      <slot
        name="page-bottom"
        slot="bottom"
      />
      
    </Page>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      isSidebarOpen: false
    }
  },
  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
    },
    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      }
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x
      const dy = e.changedTouches[0].clientY - this.touchStart.y
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true)
        } else {
          this.toggleSidebar(false)
        }
      }
    }

  }
}
</script>


