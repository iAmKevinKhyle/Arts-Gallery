const data = {
  user: "Jomar Nedroda",
  desc: "Hello, I am Jomar Nedroda, a passionate artist who finds joy in expressing emotions and ideas through visual art. With a love for both traditional and digital mediums, I explore various themes in my work, ranging from the beauty of nature to the complexities of human emotions.",
  link: "@oh_ri_on",
  url: "https://www.facebook.com/jomar.nedroda.73",
  number: "nedroda24@gmail.com",
};

const links = [
  {
    iconName: "facebook",
    href: "https://www.facebook.com/Nedsj26",
  },
  {
    iconName: "youtube",
    href: "https://www.youtube.com/@jomarnedrodaart26",
  },
  {
    iconName: "instagram",
    href: "https://www.instagram.com/Nedsj25",
  },
];

// BEFORE YOU MODIFY THE ABOVE ITEMS MAKE SURE YOU KNOW WHAT YOURE DOING
// #
// #
// #
// #
// #
// #
// #
// #
// #
// #
// #
// #
// #
// #
// #
// #
// #
// #
// #
// DO NOT CHANGE ANYTING FROM BELOW HERE

const NAME = document.querySelector(".figure-name");
const DESC = document.querySelector(".figure-desc");
const LINK = document.querySelector(".link a");
const ICON_CONTAINER = document.querySelector(".icon-container");
const CONTACT_ICON_CONTAINER = document.querySelector(
  "article#contact > div.right-content > div.container"
);
const FOOTER_CONTAINER = document.querySelector("footer.footer > div.content");
let result = "";
let footerResult = "";

function createElement() {
  links.forEach((link) => {
    result += `<a href="${link.href}" title="${
      link.href
    }" class="link-icon px24"
         target="_blank"><i class="fa-brands fa-${link.iconName.toLocaleLowerCase()}"></i
      ></a>`;
  });
}

createElement();

window.addEventListener("DOMContentLoaded", () => {
  NAME.textContent = data.user;
  DESC.textContent = data.desc;
  LINK.textContent = data.link;
  let date = new Date();

  footerResult += `
      <a href="javascript:void(0);" class="number px24">${data.number}</a>
      <p>jnag.blog ©${date.getFullYear()}</p>
      <a href="${data.url}" class="ig px24" target="_blank">${data.link}</a>
      `;

  ICON_CONTAINER.innerHTML = result;
  CONTACT_ICON_CONTAINER.innerHTML = result;
  FOOTER_CONTAINER.innerHTML = footerResult;
});
