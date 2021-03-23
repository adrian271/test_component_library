function imgShadow(options) {
  let images = document.querySelectorAll('.imgShadow');

  if (options.shadow_type === 'hard') {
    options.shadow_type = 'Opx';
  } else {
    options.shadow_type = '15px';
  }

  images.forEach((image) => {
    image.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,.2)`;

    if (options.padding) {
      image.style.padding = `1em`;
    }
  });
}

module.exports.imgShadow = imgShadow;
