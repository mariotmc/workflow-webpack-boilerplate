/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
const PageInit = (() => {
  window.addEventListener("load", () => {
    PageDisplay.displayHome();
  });
})();

const PageDisplay = (() => {
  const contentDiv = document.querySelector("#content");

  const clearContent = () => {
    while (contentDiv.firstChild) {
      contentDiv.removeChild(contentDiv.firstChild);
    }
  };

  const displayHome = () => {
    clearContent();

    contentDiv.appendChild(Header.headerContainer);
    contentDiv.appendChild(Home.homeContainer);
    contentDiv.appendChild(Footer.footerContainer);
  };

  const displayMenu = () => {
    clearContent();

    contentDiv.appendChild(Header.headerContainer);
    contentDiv.appendChild(Menu.menuContainer);
    contentDiv.appendChild(Footer.footerContainer);
  };

  const displayContact = () => {
    clearContent();

    contentDiv.appendChild(Header.headerContainer);
    contentDiv.appendChild(Contact.contactContainer);
    contentDiv.appendChild(Footer.footerContainer);
  };

  return { displayHome, displayMenu, displayContact };
})();

const Header = (() => {
  const headerContainer = document.createElement("header");
  headerContainer.classList.add("header");

  const restaurantName = document.createElement("h1");
  restaurantName.textContent = "Luigi's Trattoria";

  const homeButton = document.createElement("button");
  homeButton.classList.add("home-button");
  homeButton.textContent = "Home";

  const menuButton = document.createElement("button");
  menuButton.classList.add("menu-button");
  menuButton.textContent = "Menu";

  const contactButton = document.createElement("button");
  contactButton.classList.add("contact-button");
  contactButton.textContent = "Contact";

  headerContainer.appendChild(restaurantName);
  headerContainer.appendChild(homeButton);
  headerContainer.appendChild(menuButton);
  headerContainer.appendChild(contactButton);

  return { headerContainer, homeButton, menuButton, contactButton };
})();

const Footer = (() => {
  const footerContainer = document.createElement("footer");
  footerContainer.classList.add("footer");
  const copyright = document.createElement("span");
  copyright.textContent = " © 2021";
  const footerContent = document.createElement("p");
  footerContent.textContent = "Luigi's Trattoria";

  footerContainer.appendChild(footerContent);
  footerContainer.appendChild(copyright);

  return { footerContainer };
})();

const Home = (() => {
  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home");

  const reviewContainer = document.createElement("div");
  reviewContainer.classList.add("review");
  const review = document.createElement("p");
  review.classList.add("review");
  review.textContent = `"Luigi's pizza is like a gateway to heaven"`;
  const reviewAuthor = document.createElement("p");
  reviewAuthor.classList.add("review-author");
  reviewAuthor.textContent = "- A Happy Customer";
  reviewContainer.appendChild(review);
  reviewContainer.appendChild(reviewAuthor);

  const chefImageContainer = document.createElement("div");
  chefImageContainer.classList.add("chef-image");
  chefImage = document.createElement("img");
  chefImage.src =
    "https://www.chef-alps.com/sites/chefalps/files/guests/Massimo%20Bottura1_credits%20CALLO%20ALBANESE%20%26%20SUEO.jpg";
  chefImageContainer.appendChild(chefImage);

  homeContainer.appendChild(reviewContainer);
  homeContainer.appendChild(chefImageContainer);

  return { homeContainer };
})();

const Menu = (() => {
  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu");

  const item1 = document.createElement("div");
  item1.classList.add("menu-item");
  item1.classList.add("top");
  item1.classList.add("left");
  const item1Image = document.createElement("img");
  item1Image.src =
    "https://michalosman.github.io/restaurant-page/images/pizzas/salsiccia.png";
  const item1Title = document.createElement("h2");
  item1Title.textContent = "Salsiccia";
  const item1Ingredients = document.createElement("p");
  item1Ingredients.textContent =
    "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil";
  item1.appendChild(item1Image);
  item1.appendChild(item1Title);
  item1.appendChild(item1Ingredients);

  const item2 = document.createElement("div");
  item2.classList.add("menu-item");
  item2.classList.add("top");
  item2.classList.add("right");
  const item2Image = document.createElement("img");
  item2Image.src =
    "https://michalosman.github.io/restaurant-page/images/pizzas/gamberi.png";
  const item2Title = document.createElement("h2");
  item2Title.textContent = "Gamberi";
  const item2Ingredients = document.createElement("p");
  item2Ingredients.textContent =
    "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil";
  item2.appendChild(item2Image);
  item2.appendChild(item2Title);
  item2.appendChild(item2Ingredients);

  const item3 = document.createElement("div");
  item3.classList.add("menu-item");
  item3.classList.add("left");
  const item3Image = document.createElement("img");
  item3Image.src =
    "https://michalosman.github.io/restaurant-page/images/pizzas/pepe.png";
  const item3Title = document.createElement("h2");
  item3Title.textContent = "Pepe";
  const item3Ingredients = document.createElement("p");
  item3Ingredients.textContent =
    "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil";
  item3.appendChild(item3Image);
  item3.appendChild(item3Title);
  item3.appendChild(item3Ingredients);

  const item4 = document.createElement("div");
  item4.classList.add("menu-item");
  item4.classList.add("right");
  const item4Image = document.createElement("img");
  item4Image.src =
    "https://michalosman.github.io/restaurant-page/images/pizzas/carne.png";
  const item4Title = document.createElement("h2");
  item4Title.textContent = "Carne";
  const item4Ingredients = document.createElement("p");
  item4Ingredients.textContent =
    "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli";
  item4.appendChild(item4Image);
  item4.appendChild(item4Title);
  item4.appendChild(item4Ingredients);

  const item5 = document.createElement("div");
  item5.classList.add("menu-item");
  item5.classList.add("left");
  const item5Image = document.createElement("img");
  item5Image.src =
    "https://michalosman.github.io/restaurant-page/images/pizzas/disgustoso.png";
  const item5Title = document.createElement("h2");
  item5Title.textContent = "Disgustoso";
  const item5Ingredients = document.createElement("p");
  item5Ingredients.textContent =
    "Tomato sauce, Bacon, Pineapple, Olives, Basil";
  item5.appendChild(item5Image);
  item5.appendChild(item5Title);
  item5.appendChild(item5Ingredients);

  const item6 = document.createElement("div");
  item6.classList.add("menu-item");
  item6.classList.add("right");
  const item6Image = document.createElement("img");
  item6Image.src =
    "https://michalosman.github.io/restaurant-page/images/pizzas/colorato.png";
  const item6Title = document.createElement("h2");
  item6Title.textContent = "Colorato";
  const item6Ingredients = document.createElement("p");
  item6Ingredients.textContent =
    "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil";
  item6.appendChild(item6Image);
  item6.appendChild(item6Title);
  item6.appendChild(item6Ingredients);

  const item7 = document.createElement("div");
  item7.classList.add("menu-item");
  item7.classList.add("left");
  item7.classList.add("bottom");
  const item7Image = document.createElement("img");
  item7Image.src =
    "https://michalosman.github.io/restaurant-page/images/pizzas/pomodoro.png";
  const item7Title = document.createElement("h2");
  item7Title.textContent = "Pomodoro";
  const item7Ingredients = document.createElement("p");
  item7Ingredients.textContent =
    "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli";
  item7.appendChild(item7Image);
  item7.appendChild(item7Title);
  item7.appendChild(item7Ingredients);

  const item8 = document.createElement("div");
  item8.classList.add("menu-item");
  item8.classList.add("right");
  item8.classList.add("bottom");
  const item8Image = document.createElement("img");
  item8Image.src =
    "https://michalosman.github.io/restaurant-page/images/pizzas/crema.png";
  const item8Title = document.createElement("h2");
  item8Title.textContent = "Crema";
  const item8Ingredients = document.createElement("p");
  item8Ingredients.textContent =
    "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil";
  item8.appendChild(item8Image);
  item8.appendChild(item8Title);
  item8.appendChild(item8Ingredients);

  menuContainer.appendChild(item1);
  menuContainer.appendChild(item2);
  menuContainer.appendChild(item3);
  menuContainer.appendChild(item4);
  menuContainer.appendChild(item5);
  menuContainer.appendChild(item6);
  menuContainer.appendChild(item7);
  menuContainer.appendChild(item8);

  return { menuContainer };
})();

const Contact = (() => {
  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact");

  const contactInformationContainer = document.createElement("div");

  const phoneContainer = document.createElement("div");
  phoneContainer.classList.add("phone");
  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "📞 123 456 789";
  phoneContainer.appendChild(phoneNumber);

  const locationContainer = document.createElement("div");
  locationContainer.classList.add("location");
  const location = document.createElement("p");
  location.textContent = "🏠 123 Legit Street, Real City, CA";
  locationContainer.appendChild(location);

  const mapContainer = document.createElement("div");
  mapContainer.classList.add("map");
  const map = document.createElement("img");
  map.src =
    "https://michalosman.github.io/restaurant-page/images/restaurant-location.png";
  mapContainer.appendChild(map);
  contactInformationContainer.appendChild(phoneContainer);
  contactInformationContainer.appendChild(locationContainer);
  contactInformationContainer.appendChild(mapContainer);

  contactContainer.appendChild(contactInformationContainer);

  return { contactContainer };
})();

const handleContentChange = (() => {
  Header.homeButton.addEventListener("click", () => {
    PageDisplay.displayHome();
  });

  Header.menuButton.addEventListener("click", () => {
    PageDisplay.displayMenu();
  });

  Header.contactButton.addEventListener("click", () => {
    PageDisplay.displayContact();
  });
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JvaWxlcnBsYXRlX25hbWUvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUGFnZUluaXQgPSAoKCkgPT4ge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICBQYWdlRGlzcGxheS5kaXNwbGF5SG9tZSgpO1xyXG4gIH0pO1xyXG59KSgpO1xyXG5cclxuY29uc3QgUGFnZURpc3BsYXkgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblxyXG4gIGNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcclxuICAgIHdoaWxlIChjb250ZW50RGl2LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgY29udGVudERpdi5yZW1vdmVDaGlsZChjb250ZW50RGl2LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRpc3BsYXlIb21lID0gKCkgPT4ge1xyXG4gICAgY2xlYXJDb250ZW50KCk7XHJcblxyXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChIZWFkZXIuaGVhZGVyQ29udGFpbmVyKTtcclxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoSG9tZS5ob21lQ29udGFpbmVyKTtcclxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoRm9vdGVyLmZvb3RlckNvbnRhaW5lcik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGlzcGxheU1lbnUgPSAoKSA9PiB7XHJcbiAgICBjbGVhckNvbnRlbnQoKTtcclxuXHJcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKEhlYWRlci5oZWFkZXJDb250YWluZXIpO1xyXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChNZW51Lm1lbnVDb250YWluZXIpO1xyXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChGb290ZXIuZm9vdGVyQ29udGFpbmVyKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkaXNwbGF5Q29udGFjdCA9ICgpID0+IHtcclxuICAgIGNsZWFyQ29udGVudCgpO1xyXG5cclxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoSGVhZGVyLmhlYWRlckNvbnRhaW5lcik7XHJcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKENvbnRhY3QuY29udGFjdENvbnRhaW5lcik7XHJcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKEZvb3Rlci5mb290ZXJDb250YWluZXIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiB7IGRpc3BsYXlIb21lLCBkaXNwbGF5TWVudSwgZGlzcGxheUNvbnRhY3QgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgoKSA9PiB7XHJcbiAgY29uc3QgaGVhZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICBoZWFkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcclxuXHJcbiAgY29uc3QgcmVzdGF1cmFudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIkx1aWdpJ3MgVHJhdHRvcmlhXCI7XHJcblxyXG4gIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gIGhvbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImhvbWUtYnV0dG9uXCIpO1xyXG4gIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcclxuXHJcbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgbWVudUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibWVudS1idXR0b25cIik7XHJcbiAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xyXG5cclxuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0LWJ1dHRvblwiKTtcclxuICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcblxyXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XHJcbiAgaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xyXG4gIGhlYWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51QnV0dG9uKTtcclxuICBoZWFkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdEJ1dHRvbik7XHJcblxyXG4gIHJldHVybiB7IGhlYWRlckNvbnRhaW5lciwgaG9tZUJ1dHRvbiwgbWVudUJ1dHRvbiwgY29udGFjdEJ1dHRvbiB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCgpID0+IHtcclxuICBjb25zdCBmb290ZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gIGZvb3RlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9vdGVyXCIpO1xyXG4gIGNvbnN0IGNvcHlyaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IFwiIMKpIDIwMjFcIjtcclxuICBjb25zdCBmb290ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZm9vdGVyQ29udGVudC50ZXh0Q29udGVudCA9IFwiTHVpZ2kncyBUcmF0dG9yaWFcIjtcclxuXHJcbiAgZm9vdGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvb3RlckNvbnRlbnQpO1xyXG4gIGZvb3RlckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xyXG5cclxuICByZXR1cm4geyBmb290ZXJDb250YWluZXIgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IGhvbWVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGhvbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhvbWVcIik7XHJcblxyXG4gIGNvbnN0IHJldmlld0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgcmV2aWV3Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJyZXZpZXdcIik7XHJcbiAgY29uc3QgcmV2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcmV2aWV3LmNsYXNzTGlzdC5hZGQoXCJyZXZpZXdcIik7XHJcbiAgcmV2aWV3LnRleHRDb250ZW50ID0gYFwiTHVpZ2kncyBwaXp6YSBpcyBsaWtlIGEgZ2F0ZXdheSB0byBoZWF2ZW5cImA7XHJcbiAgY29uc3QgcmV2aWV3QXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgcmV2aWV3QXV0aG9yLmNsYXNzTGlzdC5hZGQoXCJyZXZpZXctYXV0aG9yXCIpO1xyXG4gIHJldmlld0F1dGhvci50ZXh0Q29udGVudCA9IFwiLSBBIEhhcHB5IEN1c3RvbWVyXCI7XHJcbiAgcmV2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHJldmlldyk7XHJcbiAgcmV2aWV3Q29udGFpbmVyLmFwcGVuZENoaWxkKHJldmlld0F1dGhvcik7XHJcblxyXG4gIGNvbnN0IGNoZWZJbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY2hlZkltYWdlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjaGVmLWltYWdlXCIpO1xyXG4gIGNoZWZJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgY2hlZkltYWdlLnNyYyA9XHJcbiAgICBcImh0dHBzOi8vd3d3LmNoZWYtYWxwcy5jb20vc2l0ZXMvY2hlZmFscHMvZmlsZXMvZ3Vlc3RzL01hc3NpbW8lMjBCb3R0dXJhMV9jcmVkaXRzJTIwQ0FMTE8lMjBBTEJBTkVTRSUyMCUyNiUyMFNVRU8uanBnXCI7XHJcbiAgY2hlZkltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWZJbWFnZSk7XHJcblxyXG4gIGhvbWVDb250YWluZXIuYXBwZW5kQ2hpbGQocmV2aWV3Q29udGFpbmVyKTtcclxuICBob21lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWZJbWFnZUNvbnRhaW5lcik7XHJcblxyXG4gIHJldHVybiB7IGhvbWVDb250YWluZXIgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IE1lbnUgPSAoKCkgPT4ge1xyXG4gIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XHJcblxyXG4gIGNvbnN0IGl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpdGVtMS5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xyXG4gIGl0ZW0xLmNsYXNzTGlzdC5hZGQoXCJ0b3BcIik7XHJcbiAgaXRlbTEuY2xhc3NMaXN0LmFkZChcImxlZnRcIik7XHJcbiAgY29uc3QgaXRlbTFJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgaXRlbTFJbWFnZS5zcmMgPVxyXG4gICAgXCJodHRwczovL21pY2hhbG9zbWFuLmdpdGh1Yi5pby9yZXN0YXVyYW50LXBhZ2UvaW1hZ2VzL3Bpenphcy9zYWxzaWNjaWEucG5nXCI7XHJcbiAgY29uc3QgaXRlbTFUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBpdGVtMVRpdGxlLnRleHRDb250ZW50ID0gXCJTYWxzaWNjaWFcIjtcclxuICBjb25zdCBpdGVtMUluZ3JlZGllbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgaXRlbTFJbmdyZWRpZW50cy50ZXh0Q29udGVudCA9XHJcbiAgICBcIlRvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBUb21hdG8sIEhvbWVtYWRlIHNhdXNhZ2UsIEdhcmxpYywgQmFzaWxcIjtcclxuICBpdGVtMS5hcHBlbmRDaGlsZChpdGVtMUltYWdlKTtcclxuICBpdGVtMS5hcHBlbmRDaGlsZChpdGVtMVRpdGxlKTtcclxuICBpdGVtMS5hcHBlbmRDaGlsZChpdGVtMUluZ3JlZGllbnRzKTtcclxuXHJcbiAgY29uc3QgaXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGl0ZW0yLmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XHJcbiAgaXRlbTIuY2xhc3NMaXN0LmFkZChcInRvcFwiKTtcclxuICBpdGVtMi5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XHJcbiAgY29uc3QgaXRlbTJJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgaXRlbTJJbWFnZS5zcmMgPVxyXG4gICAgXCJodHRwczovL21pY2hhbG9zbWFuLmdpdGh1Yi5pby9yZXN0YXVyYW50LXBhZ2UvaW1hZ2VzL3Bpenphcy9nYW1iZXJpLnBuZ1wiO1xyXG4gIGNvbnN0IGl0ZW0yVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgaXRlbTJUaXRsZS50ZXh0Q29udGVudCA9IFwiR2FtYmVyaVwiO1xyXG4gIGNvbnN0IGl0ZW0ySW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBpdGVtMkluZ3JlZGllbnRzLnRleHRDb250ZW50ID1cclxuICAgIFwiVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIFNocmltcHMsIEZldGEgY2hlZXNlLCBPbGl2ZXMsIEJhc2lsXCI7XHJcbiAgaXRlbTIuYXBwZW5kQ2hpbGQoaXRlbTJJbWFnZSk7XHJcbiAgaXRlbTIuYXBwZW5kQ2hpbGQoaXRlbTJUaXRsZSk7XHJcbiAgaXRlbTIuYXBwZW5kQ2hpbGQoaXRlbTJJbmdyZWRpZW50cyk7XHJcblxyXG4gIGNvbnN0IGl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpdGVtMy5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xyXG4gIGl0ZW0zLmNsYXNzTGlzdC5hZGQoXCJsZWZ0XCIpO1xyXG4gIGNvbnN0IGl0ZW0zSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGl0ZW0zSW1hZ2Uuc3JjID1cclxuICAgIFwiaHR0cHM6Ly9taWNoYWxvc21hbi5naXRodWIuaW8vcmVzdGF1cmFudC1wYWdlL2ltYWdlcy9waXp6YXMvcGVwZS5wbmdcIjtcclxuICBjb25zdCBpdGVtM1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGl0ZW0zVGl0bGUudGV4dENvbnRlbnQgPSBcIlBlcGVcIjtcclxuICBjb25zdCBpdGVtM0luZ3JlZGllbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgaXRlbTNJbmdyZWRpZW50cy50ZXh0Q29udGVudCA9XHJcbiAgICBcIlRvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBDaGlsbGkgZmxha2VzLCBPbGl2ZXMsIEJhc2lsXCI7XHJcbiAgaXRlbTMuYXBwZW5kQ2hpbGQoaXRlbTNJbWFnZSk7XHJcbiAgaXRlbTMuYXBwZW5kQ2hpbGQoaXRlbTNUaXRsZSk7XHJcbiAgaXRlbTMuYXBwZW5kQ2hpbGQoaXRlbTNJbmdyZWRpZW50cyk7XHJcblxyXG4gIGNvbnN0IGl0ZW00ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBpdGVtNC5jbGFzc0xpc3QuYWRkKFwibWVudS1pdGVtXCIpO1xyXG4gIGl0ZW00LmNsYXNzTGlzdC5hZGQoXCJyaWdodFwiKTtcclxuICBjb25zdCBpdGVtNEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBpdGVtNEltYWdlLnNyYyA9XHJcbiAgICBcImh0dHBzOi8vbWljaGFsb3NtYW4uZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcGFnZS9pbWFnZXMvcGl6emFzL2Nhcm5lLnBuZ1wiO1xyXG4gIGNvbnN0IGl0ZW00VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgaXRlbTRUaXRsZS50ZXh0Q29udGVudCA9IFwiQ2FybmVcIjtcclxuICBjb25zdCBpdGVtNEluZ3JlZGllbnRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgaXRlbTRJbmdyZWRpZW50cy50ZXh0Q29udGVudCA9XHJcbiAgICBcIlRvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBIb21lbWFkZSBzYXVzYWdlLCBCYWNvbiwgR2FybGljLCBQZXBwZXIsIENoaWxsaVwiO1xyXG4gIGl0ZW00LmFwcGVuZENoaWxkKGl0ZW00SW1hZ2UpO1xyXG4gIGl0ZW00LmFwcGVuZENoaWxkKGl0ZW00VGl0bGUpO1xyXG4gIGl0ZW00LmFwcGVuZENoaWxkKGl0ZW00SW5ncmVkaWVudHMpO1xyXG5cclxuICBjb25zdCBpdGVtNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaXRlbTUuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcclxuICBpdGVtNS5jbGFzc0xpc3QuYWRkKFwibGVmdFwiKTtcclxuICBjb25zdCBpdGVtNUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBpdGVtNUltYWdlLnNyYyA9XHJcbiAgICBcImh0dHBzOi8vbWljaGFsb3NtYW4uZ2l0aHViLmlvL3Jlc3RhdXJhbnQtcGFnZS9pbWFnZXMvcGl6emFzL2Rpc2d1c3Rvc28ucG5nXCI7XHJcbiAgY29uc3QgaXRlbTVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBpdGVtNVRpdGxlLnRleHRDb250ZW50ID0gXCJEaXNndXN0b3NvXCI7XHJcbiAgY29uc3QgaXRlbTVJbmdyZWRpZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGl0ZW01SW5ncmVkaWVudHMudGV4dENvbnRlbnQgPVxyXG4gICAgXCJUb21hdG8gc2F1Y2UsIEJhY29uLCBQaW5lYXBwbGUsIE9saXZlcywgQmFzaWxcIjtcclxuICBpdGVtNS5hcHBlbmRDaGlsZChpdGVtNUltYWdlKTtcclxuICBpdGVtNS5hcHBlbmRDaGlsZChpdGVtNVRpdGxlKTtcclxuICBpdGVtNS5hcHBlbmRDaGlsZChpdGVtNUluZ3JlZGllbnRzKTtcclxuXHJcbiAgY29uc3QgaXRlbTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGl0ZW02LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XHJcbiAgaXRlbTYuY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIpO1xyXG4gIGNvbnN0IGl0ZW02SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGl0ZW02SW1hZ2Uuc3JjID1cclxuICAgIFwiaHR0cHM6Ly9taWNoYWxvc21hbi5naXRodWIuaW8vcmVzdGF1cmFudC1wYWdlL2ltYWdlcy9waXp6YXMvY29sb3JhdG8ucG5nXCI7XHJcbiAgY29uc3QgaXRlbTZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBpdGVtNlRpdGxlLnRleHRDb250ZW50ID0gXCJDb2xvcmF0b1wiO1xyXG4gIGNvbnN0IGl0ZW02SW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBpdGVtNkluZ3JlZGllbnRzLnRleHRDb250ZW50ID1cclxuICAgIFwiVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIE9uaW9uLCBQZXBwZXIsIENoYW1waWdub25zLCBCYXNpbFwiO1xyXG4gIGl0ZW02LmFwcGVuZENoaWxkKGl0ZW02SW1hZ2UpO1xyXG4gIGl0ZW02LmFwcGVuZENoaWxkKGl0ZW02VGl0bGUpO1xyXG4gIGl0ZW02LmFwcGVuZENoaWxkKGl0ZW02SW5ncmVkaWVudHMpO1xyXG5cclxuICBjb25zdCBpdGVtNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaXRlbTcuY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcclxuICBpdGVtNy5jbGFzc0xpc3QuYWRkKFwibGVmdFwiKTtcclxuICBpdGVtNy5jbGFzc0xpc3QuYWRkKFwiYm90dG9tXCIpO1xyXG4gIGNvbnN0IGl0ZW03SW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGl0ZW03SW1hZ2Uuc3JjID1cclxuICAgIFwiaHR0cHM6Ly9taWNoYWxvc21hbi5naXRodWIuaW8vcmVzdGF1cmFudC1wYWdlL2ltYWdlcy9waXp6YXMvcG9tb2Rvcm8ucG5nXCI7XHJcbiAgY29uc3QgaXRlbTdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICBpdGVtN1RpdGxlLnRleHRDb250ZW50ID0gXCJQb21vZG9yb1wiO1xyXG4gIGNvbnN0IGl0ZW03SW5ncmVkaWVudHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBpdGVtN0luZ3JlZGllbnRzLnRleHRDb250ZW50ID1cclxuICAgIFwiVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIFRvbWF0bywgT25pb24sIEZldGEgY2hlZXNlLCBDaGlsbGlcIjtcclxuICBpdGVtNy5hcHBlbmRDaGlsZChpdGVtN0ltYWdlKTtcclxuICBpdGVtNy5hcHBlbmRDaGlsZChpdGVtN1RpdGxlKTtcclxuICBpdGVtNy5hcHBlbmRDaGlsZChpdGVtN0luZ3JlZGllbnRzKTtcclxuXHJcbiAgY29uc3QgaXRlbTggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGl0ZW04LmNsYXNzTGlzdC5hZGQoXCJtZW51LWl0ZW1cIik7XHJcbiAgaXRlbTguY2xhc3NMaXN0LmFkZChcInJpZ2h0XCIpO1xyXG4gIGl0ZW04LmNsYXNzTGlzdC5hZGQoXCJib3R0b21cIik7XHJcbiAgY29uc3QgaXRlbThJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgaXRlbThJbWFnZS5zcmMgPVxyXG4gICAgXCJodHRwczovL21pY2hhbG9zbWFuLmdpdGh1Yi5pby9yZXN0YXVyYW50LXBhZ2UvaW1hZ2VzL3Bpenphcy9jcmVtYS5wbmdcIjtcclxuICBjb25zdCBpdGVtOFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gIGl0ZW04VGl0bGUudGV4dENvbnRlbnQgPSBcIkNyZW1hXCI7XHJcbiAgY29uc3QgaXRlbThJbmdyZWRpZW50cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGl0ZW04SW5ncmVkaWVudHMudGV4dENvbnRlbnQgPVxyXG4gICAgXCJXaGl0ZSBzYXVjZSwgTW96YXJlbGxhLCBTaHJpbXBzLCBTYWxtb24sIFBpbmVhcHBsZSwgT2xpdmVzLCBCYXNpbFwiO1xyXG4gIGl0ZW04LmFwcGVuZENoaWxkKGl0ZW04SW1hZ2UpO1xyXG4gIGl0ZW04LmFwcGVuZENoaWxkKGl0ZW04VGl0bGUpO1xyXG4gIGl0ZW04LmFwcGVuZENoaWxkKGl0ZW04SW5ncmVkaWVudHMpO1xyXG5cclxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0xKTtcclxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0yKTtcclxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0zKTtcclxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW00KTtcclxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW01KTtcclxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW02KTtcclxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW03KTtcclxuICBtZW51Q29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW04KTtcclxuXHJcbiAgcmV0dXJuIHsgbWVudUNvbnRhaW5lciB9O1xyXG59KSgpO1xyXG5cclxuY29uc3QgQ29udGFjdCA9ICgoKSA9PiB7XHJcbiAgY29uc3QgY29udGFjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29udGFjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udGFjdFwiKTtcclxuXHJcbiAgY29uc3QgY29udGFjdEluZm9ybWF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbiAgY29uc3QgcGhvbmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHBob25lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwaG9uZVwiKTtcclxuICBjb25zdCBwaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIHBob25lTnVtYmVyLnRleHRDb250ZW50ID0gXCLwn5OeIDEyMyA0NTYgNzg5XCI7XHJcbiAgcGhvbmVDb250YWluZXIuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpO1xyXG5cclxuICBjb25zdCBsb2NhdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgbG9jYXRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xyXG4gIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgbG9jYXRpb24udGV4dENvbnRlbnQgPSBcIvCfj6AgMTIzIExlZ2l0IFN0cmVldCwgUmVhbCBDaXR5LCBDQVwiO1xyXG4gIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcclxuXHJcbiAgY29uc3QgbWFwQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBtYXBDb250YWluZXIuY2xhc3NMaXN0LmFkZChcIm1hcFwiKTtcclxuICBjb25zdCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIG1hcC5zcmMgPVxyXG4gICAgXCJodHRwczovL21pY2hhbG9zbWFuLmdpdGh1Yi5pby9yZXN0YXVyYW50LXBhZ2UvaW1hZ2VzL3Jlc3RhdXJhbnQtbG9jYXRpb24ucG5nXCI7XHJcbiAgbWFwQ29udGFpbmVyLmFwcGVuZENoaWxkKG1hcCk7XHJcbiAgY29udGFjdEluZm9ybWF0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHBob25lQ29udGFpbmVyKTtcclxuICBjb250YWN0SW5mb3JtYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25Db250YWluZXIpO1xyXG4gIGNvbnRhY3RJbmZvcm1hdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChtYXBDb250YWluZXIpO1xyXG5cclxuICBjb250YWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvcm1hdGlvbkNvbnRhaW5lcik7XHJcblxyXG4gIHJldHVybiB7IGNvbnRhY3RDb250YWluZXIgfTtcclxufSkoKTtcclxuXHJcbmNvbnN0IGhhbmRsZUNvbnRlbnRDaGFuZ2UgPSAoKCkgPT4ge1xyXG4gIEhlYWRlci5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBQYWdlRGlzcGxheS5kaXNwbGF5SG9tZSgpO1xyXG4gIH0pO1xyXG5cclxuICBIZWFkZXIubWVudUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgUGFnZURpc3BsYXkuZGlzcGxheU1lbnUoKTtcclxuICB9KTtcclxuXHJcbiAgSGVhZGVyLmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIFBhZ2VEaXNwbGF5LmRpc3BsYXlDb250YWN0KCk7XHJcbiAgfSk7XHJcbn0pKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==