const API_URL = "https://script.google.com/macros/s/AKfycbzkyX7uXRTu7YwrIPcmCNz10oinjSHvJ9W6O0kVUDZZ8vOfkcAYWdjBP29v2PwFk-j4/exec";

function cekPoin() {
  const id = document.getElementById("inputId").value;

  // 🔥 tampilkan loading
  document.getElementById("loading").style.display = "flex";

  // 🔥 disable tombol
  document.querySelector("button").disabled = true;

  fetch(API_URL + "?id=" + id)
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("poin", data.poin);
      localStorage.setItem("id", id);

      window.location.href = "hasil.html";
    })
    .catch(() => {
      alert("Terjadi kesalahan");
      document.getElementById("loading").style.display = "none";
      document.querySelector("button").disabled = false;
    });
}