const API_URL = "https://script.google.com/macros/s/AKfycbzxOi4XTYdmUoRVX3UR14OfL-IAe0x7txZnhEvyma1X3K0RbujVD84VBNYWrOJNFOeH/exec";

function cekPoin() {
  const id = document.getElementById("inputId").value.trim();

  if (!id) {
    alert("Silakan masukkan nomor HP terlebih dahulu.");
    return;
  }

  document.getElementById("loading").style.display = "flex";
  document.querySelector("button").disabled = true;

  fetch(API_URL + "?id=" + encodeURIComponent(id))
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("poin", data.poin || 0);
      localStorage.setItem("id", id);
      window.location.href = "hasil.html";
    })
    .catch(err => {
      console.error(err);
      alert("Terjadi kesalahan saat mengambil data.");
      document.getElementById("loading").style.display = "none";
      document.querySelector("button").disabled = false;
    });
}