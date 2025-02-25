export default function decorate(block) {
  // Label marquee items
  const items = [...block.children];

  items.forEach((item, index) => {
    item.classList.add(`marquee-item`);
    item.setAttribute('id', `marquee-${index + 1}`);
  });

  const marqueeContent = document.querySelector(".marquee");
  const clone = marqueeContent.cloneNode(true);
  marqueeContent.parentElement.appendChild(clone);

  // Create marquee track

  const marqueeBlocks = document.querySelectorAll(".marquee.images");

  if (marqueeBlocks.length > 0) {
    const newWrapper = document.createElement("div");
    newWrapper.classList.add("marquee-track");

    const parentElement = marqueeBlocks[0].parentNode;

    parentElement.insertBefore(newWrapper, marqueeBlocks[0]);

    marqueeBlocks.forEach((block) => {
      newWrapper.appendChild(block);
    });
  }
}