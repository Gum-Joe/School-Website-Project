// Root JS file

/**
 * Handle clicking of hamburger
 */
function handleHamburgerClick() {
  // Use the global hack
  if (!window.sidebarOpen) {
    $(".sidebar").addClass("sidebar-active");
    $("main").addClass("sidebar-active-content");
    window.sidebarOpen = true;
  } else {
    $(".sidebar").removeClass("sidebar-active");
    $("main").removeClass("sidebar-active-content");
    window.sidebarOpen = false;
  }
}
