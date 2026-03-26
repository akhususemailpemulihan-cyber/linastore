const API_URL = "https://script.google.com/macros/s/AKfycbzxOi4XTYdmUoRVX3UR14OfL-IAe0x7txZnhEvyma1X3K0RbujVD84VBNYWrOJNFOeH/exec";

function cekPoin() {
  const id = document.getElementById("inputId").value;

  // 🔥 tampilkan loading
  document.getElementById("loading").style.display = "flex";

  // 🔥 disable tombol
  document.querySelector("button").disabled = true;

  fetch(API_URL + "?id=" + id
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
