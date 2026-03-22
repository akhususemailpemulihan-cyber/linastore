const poin = parseInt(localStorage.getItem("poin"));
document.getElementById("poin").innerText = poin;

const hadiah = [
  { nama: "Netflix 1 bulan sharing", poin: 80 },
  { nama: "Disney Sharing", poin: 90 },
  { nama: "Netflix sebulan 1 device", poin: 90 },
  { nama: "Netflix sebulan 2 device", poin: 110 },
  { nama: "Disney Private", poin: 130 }
];

const katalog = document.getElementById("katalog");

hadiah.forEach(item => {
  const bisa = poin >= item.poin;

  const div = document.createElement("div");
  div.className = "item";

  div.innerHTML = `
  <div class="item-row ${bisa ? "aktif" : "nonaktif"}">
    
    <div class="item-text">
      <h3>${item.nama}</h3>
      <p class="poin-text">${item.poin} poin</p>
    </div>

    <button class="btn-tukar" ${!bisa ? "disabled" : ""}
      onclick="tukar('${item.nama}')">
      Tukar
    </button>

  </div>
`;

  katalog.appendChild(div);
});

function tukar(nama) {
  const nomor = "6285645927136";

  const pesan = `Hallo kak, saya ingin menukarkan poin saya dengan hadiah "${nama}"`;

  const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

  window.open(url);
}