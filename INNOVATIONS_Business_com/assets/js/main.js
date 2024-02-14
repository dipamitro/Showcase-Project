// Navbar Hover Dropdown
// Close dropdown when clicking outside
// jquary javascript
// $(document).ready(function () {
//   $(".dropdown").hover(
//     function () {
//       $(this).addClass("show");
//       $(this).find(".dropdown-menu").addClass("show");
//     },
//     function () {
//       $(this).removeClass("show");
//       $(this).find(".dropdown-menu").removeClass("show");
//     }
//   );
// });

// // vanila Javascript
// document.addEventListener("DOMContentLoaded", function () {
//   var dropdowns = document.getElementsByClassName("dropdown");

//   for (var i = 0; i < dropdowns.length; i++) {
//     dropdowns[i].addEventListener("mouseenter", function () {
//       this.classList.add("show");
//       var dropdownMenu = this.getElementsByClassName("dropdown-menu")[0];
//       if (dropdownMenu) {
//         dropdownMenu.classList.add("show");
//       }
//     });

//     dropdowns[i].addEventListener("mouseleave", function () {
//       this.classList.remove("show");
//       var dropdownMenu = this.getElementsByClassName("dropdown-menu")[0];
//       if (dropdownMenu) {
//         dropdownMenu.classList.remove("show");
//       }
//     });
//   }
// });
// male navbar go to top and comeback with different background
window.addEventListener("scroll", function () {
    var navbar = document.getElementById("header");
    if (window.pageYOffset >= 100) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
  // side bar navigation
  var sidebar = document.getElementById("side-bar");
  var closeBtn = document.getElementsByClassName("close-icon-menu")[0];
  var sidebarBack = document.getElementById("sidebarBack");
  var sidebarBackToggle = document.querySelector(".side-back.show");
  
  function showSidebar() {
    sidebar.classList.add("show");
    sidebarBack.classList.add("show");
  }
  
  function removeShow() {
    sidebarBack.classList.remove("show");
    sidebar.classList.remove("show");
  }
  
  // Footer Gellary Bootstrap popup image
  // let galleryItems = document.querySelectorAll(".gallery-item");
  // let modalImage = document.getElementById("modalImage");
  
  // galleryItems.forEach(function (item) {
  //   item.addEventListener("click", function () {
  //     let src = this.getAttribute("data-bs-src");
  //     modalImage.setAttribute("src", src);
  //   });
  // });
  
  // PROGRESS BACK TO TOP
  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  
  updateProgress();
  
  $(window).scroll(updateProgress);
  
  var offset = 50;
  var duration = 550;
  
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });
  
  jQuery(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
  
  // Testimonial Swiper skuder
  
  let swiper = new Swiper(".testimonial-slider", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    parallax: true,
    speed: 1600,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-paginations",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  // dollar to taka
  // const themeTogglerContainer = document.querySelector(
  //   ".theme-toggler-container"
  // );
  // let themeToggler = document.querySelector(".theme-toggler");
  // let theme = document.querySelectorAll(".theme");
  // let currency = document.querySelectorAll(".currency");
  
  // themeTogglerContainer.onclick = () => {
  //   themeToggler.classList.toggle("active");
  //   if (themeToggler.classList.contains("active")) {
  //     for (let i = 0; i < currency.length; i++) {
  //       currency[i].innerText = "৳";
  //     }
  //     for (let k = 0; k < theme.length; k++) {
  //       theme[k].innerText = theme[k].innerText * 108.44;
  //     }
  //   } else {
  //     for (let i = 0; i < currency.length; i++) {
  //       currency[i].innerText = "$";
  //     }
  //     for (let k = 0; k < theme.length; k++) {
  //       theme[k].innerText = theme[k].innerText / 108.44;
  //     }
  //   }
  // };
  // THEME CHANGE
  // document.addEventListener("DOMContentLoaded", function themeChange() {
  //   const themeLink = document.getElementById("theme-blue");
  //   const themeTogglerContainer = document.querySelector(
  //     ".theme-toggler-container"
  //   );
  //   const original = document.getElementsByClassName("original");
  //   const blue = document.getElementsByClassName("blue");
  
  //   // Toggle the theme by adding/removing the theme CSS file
  //   if (themeLink.getAttribute("href") === "") {
  //     themeLink.setAttribute("href", "./assets/css/theme-blue.css");
  //     themeTogglerContainer.classList.add("active");
  //     original.classList.add("no-display");
  //     blue.classList.remove("no-display");
  //   } else {
  //     themeLink.setAttribute("href", "");
  //     themeTogglerContainer.classList.remove("active");
  //     blue.classList.add("no-display");
  //     original.classList.remove("no-display");
  //   }
  // });
  
  // const themeLink = document.getElementById("theme-blue");
  // const themeTogglerContainer = document.querySelector(
  //   ".theme-toggler-container"
  // );
  // const themeToggler = document.querySelector(".theme-toggler");
  // const original = document.getElementsByClassName("original");
  // const blue = document.getElementsByClassName("blue");
  // themeTogglerContainer.onclick = () => {
  //   // Toggle the theme by adding/removing the theme CSS file
  //   if (themeLink.getAttribute("href") == "#") {
  //     themeLink.setAttribute("href", "./assets/css/theme-blue.css");
  //     themeTogglerContainer.classList.add("active");
  //     themeToggler.classList.add("active");
  //     // original.classList.add("no-display");
  //     // blue.classList.remove("no-display");
  //   } else {
  //     themeLink.setAttribute("href", "#");
  //     themeTogglerContainer.classList.remove("active");
  //     themeToggler.classList.remove("active");
  //     // blue.classList.add("no-display");
  //     // original.classList.remove("no-display");
  //   }
  // };
  
  // let currentTheme = "original"; // Initially set to "original"
  
  // function setTheme(theme) {
  //   if (theme === "blue") {
  //     document.documentElement.style.setProperty(
  //       "--color-primary",
  //       "var(--color-primary-blue)"
  //     );
  //     document.documentElement.style.setProperty(
  //       "--color-secondary",
  //       "var(--color-secondary-blue)"
  //     );
  //   } else if (theme === "orange") {
  //     document.documentElement.style.setProperty(
  //       "--color-primary",
  //       "var(--color-primary-orange)"
  //     );
  //     document.documentElement.style.setProperty(
  //       "--color-secondary",
  //       "var(--color-secondary-orange)"
  //     );
  //   }
  
  //   // Store the selected theme in local storage to persist it across page loads
  //   localStorage.setItem("selected-theme", theme);
  
  //   // Update the current theme variable
  //   currentTheme = theme;
  // }
  
  // function toggleTheme() {
  //   const themeLink = document.getElementById("theme-blue");
  //   const themeTogglerContainer = document.querySelector(
  //     ".theme-toggler-container"
  //   );
  //   const themeToggler = document.querySelector(".theme-toggler");
  //   const blueText = document.querySelector(".blue-text");
  //   const originalText = document.querySelector(".original-text");
  
  //   if (currentTheme === "original") {
  //     themeLink.setAttribute("href", "#");
  //     themeTogglerContainer.classList.add("active");
  //     themeToggler.classList.add("active");
  //     setTheme("blue"); // Set to "blue" theme
  //   } else {
  //     themeLink.setAttribute("href", "");
  //     themeTogglerContainer.classList.remove("active");
  //     themeToggler.classList.remove("active");
  //     setTheme("original"); // Set back to "original" theme
  //   }
  // }
  
  let currentTheme = "original"; // Initially set to "original"
  
  function setTheme(theme) {
    if (theme === "blue") {
      document.documentElement.style.setProperty(
        "--color-primary",
        "var(--color-primary-blue)"
      );
      document.documentElement.style.setProperty(
        "--color-secondary",
        "var(--color-secondary-blue)"
      );
      document.documentElement.style.setProperty(
        "--color-background-secondary",
        "var(--color-background-secondary-blue)"
      );
      document.documentElement.style.setProperty(
        "--color-background-shade",
        "var(--color-background-shade-blue)"
      );
      document.documentElement.style.setProperty(
        "--color-background-white",
        "var(--color-background-white-blue)"
      );
      document.documentElement.style.setProperty(
        "--color-text-shade",
        "var(--color-text-shade-blue)"
      );
      document.documentElement.style.setProperty(
        "--color-shape-shade",
        "var(--color-shape-shade-blue)"
      );
      document.documentElement.style.setProperty(
        "--font-primary",
        "var(--font-primary-blue)"
      );
      document.documentElement.style.setProperty(
        "--font-secondary",
        "var(--font-secondary-blue)"
      );
      document.documentElement.style.setProperty(
        "--font-footer",
        "var(--font-footer-blue)"
      );
      document.documentElement.style.setProperty(
        "--border-radius-primary",
        "var(--border-radius-primary-blue)"
      );
    } else if (theme === "original") {
      document.documentElement.style.removeProperty("--color-primary");
      document.documentElement.style.removeProperty("--color-secondary");
      document.documentElement.style.removeProperty(
        "--color-background-secondary"
      );
      document.documentElement.style.removeProperty("--color-background-shade");
      document.documentElement.style.removeProperty("--color-background-white");
      document.documentElement.style.removeProperty("--color-text-shade");
      document.documentElement.style.removeProperty("--color-shape-shade");
      document.documentElement.style.removeProperty("--font-primary");
      document.documentElement.style.removeProperty("--font-secondary");
      document.documentElement.style.removeProperty("--font-footer");
      document.documentElement.style.removeProperty("--border-radius-primary");
    }
  
    // Store the selected theme in local storage to persist it across page loads
    localStorage.setItem("selected-theme", theme);
  
    // Update the current theme variable
    currentTheme = theme;
  
    // Update the text of the theme toggler
    updateThemeTogglerText();
  }
  
  function toggleTheme() {
    const themeLink = document.getElementById("theme-blue");
    const themeTogglerContainer = document.querySelector(
      ".theme-toggler-container"
    );
    const themeToggler = document.querySelector(".theme-toggler");
  
    // const themeLogoImage = document.getElementById("theme-logo-image");
  
    const orText = document.querySelector(".orange-text");
    const blText = document.querySelector(".blue-text");
  
    if (currentTheme === "original") {
      // themeLogoImage.setAttribute("src", "./img/application.png");
      themeTogglerContainer.classList.add("active");
      themeToggler.classList.add("active");
  
      setTheme("blue"); // Set to "blue" theme
    } else {
      // themeLogoImage.setAttribute("src", "./img/theme.png");
      themeTogglerContainer.classList.remove("active");
      themeToggler.classList.remove("active");
  
      setTheme("original"); // Set back to "original" theme
    }
  }
  
  // function updateThemeTogglerText() {
  //   const themeNameElement = document.querySelector(".theme-name");
  //   themeNameElement.textContent =
  //     currentTheme === "original"
  //       ? `<i class="fa-solid fa-moon fa-2xs"><i>` // Moon icon for the "original" theme
  //       : `<i class="fa-solid fa-circle fa-2xs"></i>`; // Circle icon for the "blue" theme
  // }
  // function updateThemeTogglerLogo() {
  //   const themeLogoImage = document.getElementById("theme-logo-image");
  //   // Replace "path/to/your/logo.png" with the path to your logo image for the "blue" theme
  //   const blueLogoPath = "./img/application.png";
  //   // Replace "path/to/your/logo-original.png" with the path to your logo image for the "original" theme
  //   const originalLogoPath = "./img/theme.png";
  
  //   themeLogoImage.src =
  //     currentTheme === "original" ? originalLogoPath : blueLogoPath;
  // }
  
  document.addEventListener("DOMContentLoaded", function () {
    const savedTheme = localStorage.getItem("selected-theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  });
  