function createElementWithImage(tagName, imageUrl, imageAlt = "") {
  const element = document.createElement(tagName);
  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = imageAlt;
  //   img.width = "100%";
  img.width = 300;
  element.appendChild(img);
  return element;
}

function addImage(container, imagePath, alt) {
  const imgContainer = document.getElementById(container);
  const imageElement = createElementWithImage("div", imagePath, alt);
  imgContainer.appendChild(imageElement);
}

export default addImage;
