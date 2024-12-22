// Sidebar toggle functionality
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', () => {
  sidebar.classList.toggle('open'); // Toggle the 'open' class on the sidebar
});

// Function to update the current time
function updateTime() {
  const timeDisplay = document.getElementById("timeDisplay"); // Get the time display element
  const now = new Date(); // Get the current date and time
  const timeString = now.toLocaleTimeString(); // Format time as a locale string
  timeDisplay.textContent = timeString; // Update the text content with the current time
}

// Update the time every second
setInterval(updateTime, 1000);

// Initialize the time on page load
updateTime();

document.querySelectorAll('.notification-btn, .settings-btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    btn.nextElementSibling.classList.toggle('show');
  });
});

document.body.addEventListener('click', () => {
  document.querySelectorAll('.notification-dropdown, .settings-dropdown').forEach((dropdown) => {
    dropdown.classList.remove('show');
  });
});

const notificationBtn = document.getElementById('notification-btn');
const notificationDropdown = document.getElementById('notification-dropdown');

notificationBtn.addEventListener('click', function() {
  notificationDropdown.style.display = notificationDropdown.style.display === 'block' ? 'none' : 'block';
});

const settingsBtn = document.getElementById('settings-btn');
const settingsDropdown = document.getElementById('settings-dropdown');

settingsBtn.addEventListener('click', function() {
  settingsDropdown.style.display = settingsDropdown.style.display === 'block' ? 'none' : 'block';
});

window.addEventListener('click', function(event) {
  if (!event.target.closest('.notification-container') && !event.target.closest('.settings-container')) {
    notificationDropdown.style.display = 'none';
    settingsDropdown.style.display = 'none';
  }
});
<<<<<<< Updated upstream
=======

document.querySelector('a[href="#logout"]').addEventListener('click', function () {
  // Tambahkan logika logout, seperti redirect atau AJAX call
  alert('Logout berhasil!');
});

document.addEventListener("DOMContentLoaded", function () {
  const profileIcon = document.getElementById("profileIcon");
  const dropdownMenu = document.getElementById("dropdownMenu");
  const profile = document.querySelector(".profile");
  const viewProfile = document.getElementById("viewProfile");

  // Menampilkan dropdown menu saat klik avatar
  profileIcon.addEventListener("click", function () {
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
  });

  // Menampilkan profil saat menu "Profile" diklik
  viewProfile.addEventListener("click", function (event) {
    event.preventDefault(); // Menghindari reload halaman
    profile.classList.toggle("active"); // Toggle class 'active' pada elemen profile
  });

  // Menutup dropdown jika klik di luar
  window.addEventListener("click", function (event) {
    if (!profileIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.style.display = "none";
    }
  });
});

function previewImage(event) {
  const reader = new FileReader();
  reader.onload = function () {
    const preview = document.getElementById("profilePreview");
    preview.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

>>>>>>> Stashed changes
