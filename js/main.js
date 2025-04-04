$(document).ready(function() {

  // THEME SWITCHER
  var darkTheme = true;
  // dark theme
  let darkThemeColor = getComputedStyle(document.documentElement).getPropertyValue("--dark-theme").trim();
  let darkThemeBodyBgColor = getComputedStyle(document.documentElement).getPropertyValue("--dark-theme-primary-color-1").trim();
  let darkThemeElementBgColor = getComputedStyle(document.documentElement).getPropertyValue("--dark-theme-primary-color-2").trim();
  let darkThemeElementBrColor = getComputedStyle(document.documentElement).getPropertyValue("--dark-theme-primary-color-3").trim();
  let darkThemeTextColor = getComputedStyle(document.documentElement).getPropertyValue("--dark-theme-text-color").trim();
  // light theme
  let lightThemeColor = getComputedStyle(document.documentElement).getPropertyValue("--light-theme").trim();
  let lightThemeBodyBgColor = getComputedStyle(document.documentElement).getPropertyValue("--light-theme-primary-color-1").trim();
  let lightThemeElementBgColor = getComputedStyle(document.documentElement).getPropertyValue("--light-theme-primary-color-2").trim();
  let lightThemeElementBrColor = getComputedStyle(document.documentElement).getPropertyValue("--light-theme-primary-color-3").trim();
  let lightThemeTextColor = getComputedStyle(document.documentElement).getPropertyValue("--light-theme-text-color").trim();

  $("#toggle-theme").click(function() {
    // Change button text label
    let currentText = $(this).text();
    $(this).text(currentText === "Light Theme" ? "Dark Theme" : "Light Theme");

    // set to Dark Theme
    if (darkTheme === false) {
      $("html").css({
        colorScheme: darkThemeColor,
      });

      $("body").css({
        color: darkThemeTextColor,
        backgroundColor: darkThemeBodyBgColor
      });

      $("header").css({
        borderBottomColor: darkThemeElementBrColor,
      });

      $("nav").css({
        borderRightColor: darkThemeElementBrColor,
      });

      $("footer").css({
        borderTopColor: darkThemeElementBrColor,
      });

      $(".theme").css({
        backgroundColor: darkThemeElementBgColor
      });
      
      darkTheme = true;
    }
    // set to Light Theme
    else if (darkTheme === true) {
      $("html").css({
        colorScheme: lightThemeColor,
      });

      $("body").css({
        color: lightThemeTextColor,
        backgroundColor: lightThemeBodyBgColor
      });

      $("header").css({
        borderBottomColor: lightThemeElementBrColor,
      });

      $("nav").css({
        borderRightColor: lightThemeElementBrColor,
      });

      $("footer").css({
        borderTopColor: lightThemeElementBrColor,
      });

      $(".theme").css({
        backgroundColor: lightThemeElementBgColor
      });
      
      darkTheme = false;
    }
  });

  // SIDE NAV ANIMATION
  var toggleMenuTrigger = false;
  $("#toggle-menu").click(function() {
    let currentText = $(this).text();
    $(this).text(currentText === "Close Menu" ? "Open Menu" : "Close Menu")

    if (toggleMenuTrigger === true) {
      $("#side-nav").animate({
        left: 0,
        opacity: 1
      });

      $("#main-content").css({
        width: "calc(100% - 16rem)"
      }).animate({
        marginLeft: "16rem"
      });

      $("footer").css({
        width: "calc(100% - 16rem)"
      }).animate({
        marginLeft: "16rem"
      });
      
      toggleMenuTrigger = false;
    }
    else if (toggleMenuTrigger === false) {
      $("#side-nav").animate({
        left: "-16rem",
        opacity: 0
      });

      $("#main-content").css({
        width: "100%"
      }).animate({
        marginLeft: 0
      });

      $("footer").css({
        width: "100%"
      }).animate({
        marginLeft: 0
      });
      
      toggleMenuTrigger = true;
    }
  });

  
  // DYNAMIC NAV MENU
  const menuData = {
    "menu": [
      {
        "name": "Home",
        "link": "index.html",
        "submenu": []
      },
      {
        "name": "About",
        "link": "about.html",
        "submenu": [
          {
            "name": "Our Story",
            "link": "our-story.html"
          },
          {
            "name": "Our Company",
            "link": "our-company.html"
          }
        ]
      },
      {
        "name": "Blog",
        "link": "blog.html",
        "submenu": [
          {
            "name": "Tech Blog",
            "link": "tech-blog.html"
          }
        ]
      }
    ]
  };
  const menuContainer = $("#side-menu");
  menuData.menu.forEach(function(item) {
    let listItem = `<li><a id="nav-link" href="${item.link}">${item.name}</a></li>`;

    if (item.submenu.length > 0) {
      listItem += `<ul class="submenu">`;
      item.submenu.forEach(function(subItem) {
        listItem += `<li><a id="nav-link" href="${subItem.link}">${subItem.name}</a></li>`;
      });
      listItem += `</ul>`;
    }

    listItem += `</li>`;
    menuContainer.append(listItem);
  });

  // NAVIGATION MENU
  var currentPage = window.location.pathname.split("/").pop();
  // Loop through each navigation link
  $("#side-menu a").each(function() {
    if ($(this).attr("href") === currentPage) {
      $(this).addClass("active");
    }
  });

  // GET CURRENT YEAR
  let currentYear = new Date().getFullYear();
  $("#year").text(currentYear);
});