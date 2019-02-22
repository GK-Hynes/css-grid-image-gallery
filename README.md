# CSS Grid Image Gallery

An image gallery composed of 100px grid cells filled with images which are randomly sized.

The JavaScript generates elements that receive a random image from the images folder and are set to span between one and four columns and rows.

```js
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
```

```css
.item.v2 {
  grid-row: span 2;
}
```

The grid then uses `auto-fill` and `grid-auto-flow: dense` to fit all of the random images in.

```css
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-auto-rows: 100px;
  grid-auto-flow: dense;
}
```

[See the project live](https://gk-hynes.github.io/css-grid-image-gallery/)

![Screenshot of CSS Grid image gallery project](https://res.cloudinary.com/gerhynes/image/upload/q_auto/v1550872067/Screenshot_2019-02-22_CSS_Grid_Image_Gallery_xwdsdf.jpg)
