const WORKS_CONTENT = [
  {
    fileName: "The Red-Headed Madman.png",
    link: "https://youtu.be/HXW1Ys2ThgA?si=KecQ1bTuTS8vVPBL",
  },
  {
    fileName: "Mother Mary.png",
    link: "https://youtu.be/UPoFuqzepxo?si=T6qZxlzPkOwytYOc",
  },
  {
    fileName: "Niño Exequiel P Reginaldo.png",
    link: "https://youtu.be/qHSFJkWxC8I?si=WgiqEB9rgVF-5sJu",
  },
  {
    fileName: "Chisato Nishikigi.png",
    link: "https://youtu.be/kmG0HHML9L8?si=yrrrpiOEAOox_73q",
  },
  {
    fileName: "Baby Cael.png",
    link: "https://youtu.be/CZNwWoSBMSE?si=-WdB3PlRuEJjKiEP",
  },
  {
    fileName: "Jenny Climaco.png",
    link: "https://youtu.be/Px4mIm6X7zw?si=jJms-YiX_3zdToY2",
  },
  {
    fileName: "Baby Sopiee.png",
    link: "https://youtu.be/draxBTYCWUs?si=fi3bHX1VcMFSMugv",
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

const WORKS_CONTAINER = document.getElementById("works");

WORKS_CONTENT.forEach((work, i) => {
  WORKS_CONTAINER.innerHTML += `
    <figure class="work${i + 2} works" title="${
    work.fileName.split(".")[0]
  }" data-index="${i}">
      <img
        src="assets/works/${work.fileName}"
        alt="${work.fileName.split(".")[0]}"
        class="works-image"
      />
      <figcaption class="px21">${work.fileName.split(".")[0]}</figcaption>
      <div class="curtain"></div>
      <div class="border"></div>
      <a title="Watch this Work(${
        work.fileName.split(".")[0]
      }) on Youtube" href="${
    work.link
  }" class="watch-button" target="_blank"><i class="fa-brands fa-youtube"></i></a>
      <a title="View ${
        work.fileName.split(".")[0]
      } in Full Screen" href="javascript:void(0);" class="view-button"><i class="fa-solid fa-eye"></i></a>
      <a title="Close ${
        work.fileName.split(".")[0]
      }" href="javascript:void(0);" class="close-button"><i class="fa-solid fa-xmark"></i></a>
    </figure>
      `;
});

const VIEW_BUTTON = document.querySelectorAll("a.view-button");
const TEMPORARY_CONTAINER = document.querySelector("div.temporary-container");
let temporaryElement;
let containerWidth;
let containerHeight;
let target;
let closeButton;

VIEW_BUTTON.forEach((button) => {
  button.addEventListener("click", (e) => {
    target = e.currentTarget.parentElement.outerHTML;
    TEMPORARY_CONTAINER.innerHTML = target;

    TEMPORARY_CONTAINER.style =
      "display: flex; justify-content: center; align-items: center;";
    containerWidth = TEMPORARY_CONTAINER.offsetWidth;
    containerHeight = TEMPORARY_CONTAINER.offsetHeight;

    if (containerHeight > containerWidth) {
      TEMPORARY_CONTAINER.querySelector("figure").style.width = "100%";
      TEMPORARY_CONTAINER.querySelector("figure").style.height = "auto";
    } else {
      TEMPORARY_CONTAINER.querySelector("figure").style.width = "auto";
      TEMPORARY_CONTAINER.querySelector("figure").style.height = "100%";
    }

    closeButton = TEMPORARY_CONTAINER.querySelector("a.close-button");
    closeButton.addEventListener("click", () => {
      TEMPORARY_CONTAINER.innerHTML = "";
      TEMPORARY_CONTAINER.style = "display: none;";
    });
  });
});
