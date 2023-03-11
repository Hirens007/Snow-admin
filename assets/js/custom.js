(function () {
    
 
  document.addEventListener('alpine:init', () => {
    Alpine.data('collapse', () => ({
      collapse: false,

      collapseSidebar() {
        this.collapse = !this.collapse;
      },
    }));


    // main - custom functions
    Alpine.data('main', (value) => ({}));

    Alpine.store('app', {
       
      // navigation menu
      menu: Alpine.$persist('vertical'),
      toggleMenu(val) {
        if (!val) {
          val = this.menu || 'vertical'; // vertical, collapsible-vertical, horizontal
        }
        this.sidebar = false; // reset sidebar state
        this.menu = val;
      },
      // animation
      animation: Alpine.$persist(''),
      toggleAnimation(val) {
        if (!val) {
          val = this.animation || ''; // animate__fadeIn, animate__fadeInDown, animate__fadeInLeft, animate__fadeInRight
        }

        this.animation = val;
      },

      // sidebar
      sidebar: false,
      toggleSidebar() {
        this.sidebar = !this.sidebar;
      },

      //right sidebar
      rightsidebar: false,
      rightSidebar() {
        this.rightsidebar = !this.rightsidebar;
      }
    });
  });
})();
