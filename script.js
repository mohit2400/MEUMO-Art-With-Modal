const gallery = document.getElementById("gallery");
const modalImage = document.getElementById("modalImage");
const imageModal = new bootstrap.Modal(document.getElementById("imageModal"));

// Sample images array
const images = [
  "img/Meumo - Make It.png",
  "img/Meumo - Working.png",
  "img/Meumo - Invisible Remix.png",
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

