function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");

  document.querySelectorAll("nav ul li a").forEach(link => link.classList.remove("active"));
  document.querySelector(`nav ul li a[href="#${id}"]`).classList.add("active");
}

function closeModal() {
  document.getElementById("popupModal").classList.remove("active");
}

function openModal() {
  document.getElementById("popupModal").classList.add("active");
}

window.onload = function () {
  setTimeout(openModal, 2000); // Show modal after 2 seconds
};
