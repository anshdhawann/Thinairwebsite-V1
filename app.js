document.addEventListener('DOMContentLoaded', () => {

  /* ───────── Desktop “Thin Air Sites” dropdown ───────── */
  const sitesDropdownTrigger = document.getElementById('sitesDropdownTrigger');
  const dropdownMenu         = document.getElementById('dropdown-menu');

  if (sitesDropdownTrigger && dropdownMenu){
    sitesDropdownTrigger.addEventListener('click', e => {
      e.stopPropagation();
      dropdownMenu.style.display =
        dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', e => {
      if (!sitesDropdownTrigger.contains(e.target)){
        dropdownMenu.style.display = 'none';
      }
    });
  }

  /* ───────── Back-to-top button ───────── */
  const backToTop = document.querySelector('.back-to-top');
  if (backToTop){
    window.addEventListener('scroll', () => {
      backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
  }

  /* ───────── Horizontal media carousel ───────── */
  const carousel     = document.getElementById('infinite-carousel');
  const leftArrow    = document.getElementById('carousel-left');
  const rightArrow   = document.getElementById('carousel-right');

  leftArrow  && leftArrow.addEventListener ('click', () => carousel.scrollBy({left:-320, behavior:'smooth'}));
  rightArrow && rightArrow.addEventListener('click', () => carousel.scrollBy({left: 320, behavior:'smooth'}));

  /* ───────── Mobile full-screen menu ───────── */
  const menuOverlay      = document.getElementById('menuOverlay');
  const burgerButton     = document.getElementById('burgerButton');
  const closeMenuButton  = document.getElementById('closeMenuButton');

  if (menuOverlay && burgerButton && closeMenuButton){

    /* open / close helpers (single source of truth) */
    const openMobileMenu  = () => {
      menuOverlay.classList.add('is-open');
      document.body.classList.add('no-scroll');     // ✕ shows, burger hides
    };

    const closeMobileMenu = () => {
      menuOverlay.classList.remove('is-open');
      document.body.classList.remove('no-scroll');  // burger returns

      /* collapse the “Thin Air Sites” sub-dropdown if it was open */
      const mobileDrop = document.getElementById('dropdown-menu-mobile');
      mobileDrop?.classList.remove('show');
    };

    /* button clicks */
    burgerButton .addEventListener('click', openMobileMenu);
    closeMenuButton.addEventListener('click', closeMobileMenu);

    /* tap outside the nav column */
    menuOverlay.addEventListener('click', e => {
      if (e.target === menuOverlay) closeMobileMenu();
    });

    /* nav links inside the overlay */
    const mobileLinks = menuOverlay.querySelectorAll('.nav-mobile a');
    mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));
  }

  /* ───────── Mobile “Thin Air Sites” dropdown inside the overlay ───────── */
  const mobileSitesTrigger = document.getElementById('sitesDropdownMobileTrigger');
  const mobileSitesMenu    = document.getElementById('dropdown-menu-mobile');

  if (mobileSitesTrigger && mobileSitesMenu){
    mobileSitesTrigger.addEventListener('click', e => {
      e.stopPropagation();
      mobileSitesMenu.classList.toggle('show');
    });
  }

});   // end DOMContentLoaded
