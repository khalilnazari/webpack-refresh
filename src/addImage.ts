function createElementWithImage(tagName:string, imageUrl:string, imageAlt:string = "") {
  const element = document.createElement(tagName);
  const img = document.createElement("img");
  img.src = imageUrl;
  img.alt = imageAlt;
  //   img.width = "100%";
  img.width = 300;
  element.appendChild(img);
  return element;
}

function addImage(container:string, imagePath:string, alt:string) {
  const imgContainer = document.getElementById(container);
  const imageElement = createElementWithImage("div", imagePath, alt);
  imgContainer?.appendChild(imageElement);
}

export default addImage;
