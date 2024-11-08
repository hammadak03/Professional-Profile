let isDarkMode = false;
function toggleDrawer() {
    document.querySelector('.profile').classList.toggle('show-left');
}
function toggleTheme() {
    const body = document.body;
    isDarkMode = !isDarkMode;
    body.classList.toggle('dark-theme', isDarkMode);
}
function updateProfilePhoto(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {
        const profilePhoto = document.getElementById('profile-photo');
        profilePhoto.src = e.target.result;
    };
    if (file) {
        reader.readAsDataURL(file);
    }
}
