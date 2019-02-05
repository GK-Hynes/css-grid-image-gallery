const gallery = document.querySelector(".gallery");
const overlay = document.querySelector(".overlay");
const overlayImage = overlay.querySelector("img");
const overlayCloseBtn = overlay.querySelector(".close");

// Generate an image and overlay with random height and width
function generateHTML([h, v]) {
  return `
  <div class="item h${h} v${v}">
    <img src="images/${randomNumber(12)}.jpg">
    <div class="item__overlay">
      <button>View →</button>
    </div>
  </div> 
  `;
}

// Generate a random number with an upper limit
function randomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}

// Generate an array with 50 random pairs of numbers
const digits = Array.from({ length: 50 }, () => [
  randomNumber(4),
  randomNumber(4)
]);

// Pass the digits array into generateHTML()
const html = digits.map(generateHTML).join("");

// Set the result as the HTML of the gallery
gallery.innerHTML = html;
