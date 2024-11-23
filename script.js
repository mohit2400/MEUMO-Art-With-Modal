const gallery = document.getElementById("gallery");
const modalImage = document.getElementById("modalImage");
const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));

// Sample images array
const images = [
  "img/magicstudio-art.jpg",
  "img/magicstudio-art (1).jpg",
  "img/magicstudio-art (2).jpg",
  "img/magicstudio-art (3).jpg",
  "img/magicstudio-art (4).jpg",
  "img/magicstudio-art (5).jpg",
  "img/magicstudio-art (6).jpg",
  "img/magicstudio-art (7).jpg",
  "img/magicstudio-art (8).jpg",
  "img/magicstudio-art (9).jpg",
  "img/magicstudio-art (10).jpg",
  "img/magicstudio-art (11).jpg",
  "img/magicstudio-art (12).jpg",
  "img/magicstudio-art (13).jpg",
  "img/magicstudio-art (14).jpg",
  "img/magicstudio-art (15).jpg",
  "img/magicstudio-art (16).jpg",
  "img/magicstudio-art (17).jpg",
  "img/magicstudio-art (18).jpg",
  "img/magicstudio-art (19).jpg",
  "img/magicstudio-art (20).jpg",
  "img/magicstudio-art (21).jpg",
  "img/magicstudio-art (22).jpg",
  "img/magicstudio-art (23).jpg",
];

// Function to render the gallery
function renderGallery() {
  gallery.innerHTML = "";
  images.forEach((src, index) => {
    const col = document.createElement("div");
    col.className = "col-md-4 gallery-item";
    col.innerHTML = `<img src="${src}" alt="Image ${
      index + 1
    }" class="img-thumbnail" onclick="openModal('${src}')">`;
    gallery.appendChild(col);
  });
}

// Open modal with the clicked image
function openModal(src) {
  modalImage.src = src;
  imageModal.show();
}

// Add a new image
function addImage(url) {
  images.push(url);
  renderGallery();
}

// Remove an image by index
function removeImage(index) {
  if (index >= 0 && index < images.length) {
    images.splice(index, 1);
    renderGallery();
  }
}

// Initialize gallery
renderGallery();
