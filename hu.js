// Slideshow cho section mùa hè
const slideImages = [
  [
    "mùa hè/hình ảnh/503980800_1265350428932089_8752821637204634031_n.jpg",
    "mùa hè/hình ảnh/504118333_1265343365599462_3249902276333660781_n.jpg",
    "mùa hè/hình ảnh/504192430_1265343452266120_5386920517387857735_n.jpg",
    "mùa hè/hình ảnh/504216483_1265346542265811_1809431267857476179_n.jpg"
  ],
  [
    "mùa hè/hình ảnh/515930722_1292751912858607_2899505620636028372_n.jpg",
    "mùa hè/hình ảnh/515441308_1292771326189999_100096071837502207_n.jpg",
    "mùa hè/hình ảnh/515437638_1292749092858889_289735604060007087_n.jpg",
    "mùa hè/hình ảnh/515995440_1292748699525595_8343745265488619047_n.jpg"
  ],
  [
    "mùa hè/hình ảnh/514024667_1285284766938655_9050842454585652817_n.jpg",
    "mùa hè/hình ảnh/513912654_1285284596938672_6411925033541079420_n.jpg",
    "mùa hè/hình ảnh/513912050_1285284616938670_878838285280003557_n.jpg",
    "mùa hè/hình ảnh/513904457_1285284750271990_3240698776542235455_n.jpg"
  ]
];

let slideIndexes = [0, 0, 0];

function showSlide(slideNum, blockIdx) {
  const imgElement = document.getElementById(`slide-img-${blockIdx}`);
  if (imgElement) {
    imgElement.src = slideImages[blockIdx][slideNum];
  }
}

function prevSlide(blockIdx) {
  slideIndexes[blockIdx] = (slideIndexes[blockIdx] - 1 + slideImages[blockIdx].length) % slideImages[blockIdx].length;
  showSlide(slideIndexes[blockIdx], blockIdx);
}

function nextSlide(blockIdx) {
  slideIndexes[blockIdx] = (slideIndexes[blockIdx] + 1) % slideImages[blockIdx].length;
  showSlide(slideIndexes[blockIdx], blockIdx);
}

// Auto-slide function
function autoSlide() {
  for (let i = 0; i < slideIndexes.length; i++) {
    nextSlide(i);
  }
}

// Initialize slideshows
function initSlideshows() {
  showSlide(0, 0);
  showSlide(0, 1);
  showSlide(0, 2);
  
  // Start auto-slide every 3 seconds
  setInterval(autoSlide, 3000);
}

// === Popup học bổng ===
document.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById('scholarship-popup-overlay');
  var closeBtn = document.getElementById('scholarship-popup-close');
  if (popup && closeBtn) {
    popup.style.display = 'flex';
    closeBtn.onclick = function() {
      popup.style.display = 'none';
    };
    // Đóng popup khi bấm ra ngoài vùng popup
    popup.onclick = function(e) {
      if (e.target === popup) popup.style.display = 'none';
    };
  }
});

// === Hero background slideshow ===
document.addEventListener('DOMContentLoaded', function() {
  var slides = document.querySelectorAll('.hero-bg-slide');
  var idx = 0;
  if (slides.length > 0) {
    slides[0].classList.add('active');
    setInterval(function() {
      slides[idx].classList.remove('active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('active');
    }, 4000);
  }
});

// === Tradition Hero background slideshow ===
document.addEventListener('DOMContentLoaded', function() {
  var slides = document.querySelectorAll('.tradition-hero-bg-slide');
  var idx = 0;
  if (slides.length > 0) {
    slides[0].classList.add('active');
    setInterval(function() {
      slides[idx].classList.remove('active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('active');
    }, 4000);
  }
});

// Hero Banner Slideshow auto slide
(function() {
  var slides = document.querySelectorAll('.hero-banner-slideshow .slide-bg');
  var idx = 0;
  if (slides.length > 0) {
    slides[0].classList.add('active');
    setInterval(function() {
      slides[idx].classList.remove('active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('active');
    }, 4000);
  }
})();

// Typewriter effect for Hero Banner slogan
function runTypewriter(selector, text, speed = 38) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.textContent = '';
  let i = 0;
  function type() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}
document.addEventListener('DOMContentLoaded', function() {
  const slogan = document.querySelector('.tradition-hero-slogan.typewriter');
  if (slogan) {
    const text = slogan.textContent;
    slogan.textContent = '';
    setTimeout(() => runTypewriter('.tradition-hero-slogan.typewriter', text), 800);
  }
});

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initSlideshows);