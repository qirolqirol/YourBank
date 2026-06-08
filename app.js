const passwordField = document.getElementById('passwordField');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', function () {
  // Agar parol yashirin bo'lsa ko'rsatadi, aks holda yashiradi
  if (passwordField.type === 'password') {
    passwordField.type = 'text';
    this.style.color = '#007BFF'; // Ko'rsatilganda ko'zcha rangini o'zgartirish (ixtiyoriy)
  } else {
    passwordField.type = 'password';
    this.style.color = '#59595A'; // Yashirilganda eski rangga qaytarish
  }
});