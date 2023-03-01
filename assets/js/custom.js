(function () {
  window.addEventListener('load', function () {
    // screen loader
    const screen_loader = document.getElementsByClassName('screen_loader');
    if (screen_loader?.length) {
      screen_loader[0].classList.add('animate__fadeOut');
      setTimeout(() => {
        document.body.removeChild(screen_loader[0]);
      }, 200);
    }

    // set rtl layout
    Alpine.store('app').setRTLLayout();

    // feather icon
    feather.replace();
  });

  // perfect scrollbar
  const initPerfectScrollbar = () => {
    const container = document.querySelectorAll('.perfect-scrollbar');
    for (let i = 0; i < container.length; i++) {
      new PerfectScrollbar(container[i], {
        wheelPropagation: true,
        // suppressScrollX: true,
      });
    }
  };
  initPerfectScrollbar();

  document.addEventListener('alpine:init', () => {
    Alpine.data('collapse', () => ({
      collapse: false,

      collapseSidebar() {
        this.collapse = !this.collapse;
      },
    }));

    Alpine.data('dropdown', (initialOpenState = false) => ({
      open: initialOpenState,

      toggle() {
        this.open = !this.open;
      },
    }));
    Alpine.data('modal', (initialOpenState = false) => ({
      open: initialOpenState,

      toggle() {
        this.open = !this.open;
      },
    }));

    // Magic: $tooltip
    Alpine.magic('tooltip', (el) => (message, placement) => {
      let instance = tippy(el, {
        content: message,
        trigger: 'manual',
        placement: placement || undefined,
        allowHTML: true,
      });

      instance.show();
    });

    Alpine.directive('dynamictooltip', (el, { expression }, { evaluate }) => {
      let string = evaluate(expression);
      tippy(el, {
        content: string.charAt(0).toUpperCase() + string.slice(1),
      });
    });

    // Directive: x-tooltip
    Alpine.directive('tooltip', (el, { expression }) => {
      tippy(el, {
        content: expression,
        placement: el.getAttribute('data-placement') || undefined,
        allowHTML: true,
        delay: el.getAttribute('data-delay') || 0,
        animation: el.getAttribute('data-animation') || 'fade',
        theme: el.getAttribute('data-theme') || '',
      });
    });

    // Magic: $popover
    Alpine.magic('popover', (el) => (message, placement) => {
      let instance = tippy(el, {
        content: message,
        placement: placement || undefined,
        interactive: true,
        allowHTML: true,
        // hideOnClick: el.getAttribute("data-dismissable") ? true : "toggle",
        delay: el.getAttribute('data-delay') || 0,
        animation: el.getAttribute('data-animation') || 'fade',
        theme: el.getAttribute('data-theme') || '',
        trigger: el.getAttribute('data-trigger') || 'click',
      });

      instance.show();
    });

    // main - custom functions
    Alpine.data('main', (value) => ({}));

    Alpine.store('app', {
      // theme
      theme: Alpine.$persist('light'),
      toggleTheme(val) {
        if (!val) {
          val = this.theme || 'light'; // light|dark|system
        }

        this.theme = val;
      },

      // navigation menu
      menu: Alpine.$persist('vertical'),
      toggleMenu(val) {
        if (!val) {
          val = this.menu || 'vertical'; // vertical, collapsible-vertical, horizontal
        }
        this.sidebar = false; // reset sidebar state
        this.menu = val;
      },

      // layout
      layout: Alpine.$persist('full'),
      toggleLayout(val) {
        if (!val) {
          val = this.layout || 'full'; // full, boxed-layout
        }

        this.layout = val;
      },

      // rtl support
      rtlClass: Alpine.$persist('ltr'),
      toggleRTL(val) {
        if (!val) {
          val = this.rtlClass || 'ltr'; // rtl, ltr
        }

        this.rtlClass = val;
        this.setRTLLayout();
      },

      setRTLLayout() {
        document.querySelector('html').setAttribute('dir', this.rtlClass || 'ltr');
      },

      // animation
      animation: Alpine.$persist(''),
      toggleAnimation(val) {
        if (!val) {
          val = this.animation || ''; // animate__fadeIn, animate__fadeInDown, animate__fadeInLeft, animate__fadeInRight
        }

        this.animation = val;
      },

      // navbar type
      navbar: Alpine.$persist('navbar-sticky'),
      toggleNavbar(val) {
        if (!val) {
          val = this.navbar || 'navbar-sticky'; // navbar-sticky, navbar-floating, navbar-static
        }

        this.navbar = val;
      },

      // semidark 
      semidark: Alpine.$persist(false),
      toggleSemidark(val) {
        if (!val) {
          val = this.semidark || false;
        }

        this.semidark = val;
      },

      // multi language
      locale: Alpine.$persist('en'),
      toggleLocale(val) {
        if (!val) {
          val = this.locale || 'en';
        }

        this.locale = val;
      },

      // sidebar
      sidebar: false,
      toggleSidebar() {
        this.sidebar = !this.sidebar;
      },
    });
  });
})();
