var example = [
  "Welcome To My Website,",
  "I Am Tanish Mehta,",
  "A Coder/Developer/Programmer,",
  "An Editor,",
  "An Indian,",
];

textSequence(0);
function textSequence(i) {
  if (example.length > i) {
    setTimeout(function () {
      document.getElementById("sequence").innerHTML = example[i];
      textSequence(++i);
    }, 1000); // 1 second (in milliseconds)
  } else if (example.length == i) {
    // Loop
    textSequence(0);
  }
}

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 40,
  loop: false,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="dot swiper-pagination-bullet">${index}</span>`;
    },
  },
});

var message = "Bruh, What You Wanna Do?";
function clickIE4() {
  if (event.button == 2) {
    alert(message);
    return false;
  }
}
function clickNS4(e) {
  if (document.layers || (document.getElementById && !document.all)) {
    if (e.which == 2 || e.which == 3) {
      alert(message);
      return false;
    }
  }
}
if (document.layers) {
  document.captureEvents(Event.MOUSEDOWN);
  document.onmousedown = clickNS4;
} else if (document.all && !document.getElementById) {
  document.onmousedown = clickIE4;
}
document.oncontextmenu = new Function("return false");

const firstScrollSpyEl = document.querySelector('[data-bs-spy="scroll"]');
firstScrollSpyEl.addEventListener("activate.bs.scrollspy", () => {
  // do something...
});
