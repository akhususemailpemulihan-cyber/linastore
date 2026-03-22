const poin = parseInt(localStorage.getItem("poin"));
document.getElementById("poin").innerText = poin;

const hadiah = [
  { nama: "Voucher pot. 3.000", poin: 10 },
  { nama: "Voucher pot. 5.000", poin: 13 },
  { nama: "Voucher pot. 8.000", poin: 16 },
  { nama: "Voucher pot. 10.000", poin: 19 },
  { nama: "Voucher pot. 12.000", poin: 23 },
  { nama: "Voucher pot. 15.000", poin: 28 },
  { nama: "Voucher pot. 17.000", poin: 31 },
  { nama: "Voucher pot. 20.000", poin: 36 },
  { nama: "Voucher pot. 25.000", poin: 42 },
  { nama: "VIU sebulan", poin: 50 },
  { nama: "Vidio Platinum HP", poin: 58 },
  { nama: "Voucher pot. 35.000", poin: 60 },
  { nama: "Canva sebulan", poin: 70 },
  { nama: "Netflix 1 bulan sharing", poin: 80 },
  { nama: "WeTV sebulan", poin: 80 },
  { nama: "Loklok sebulan sharing", poin: 80 },
  { nama: "Prime Video", poin: 80 },
  { nama: "Vidio Platinum TV", poin: 80 },
  { nama: "CapCut sebulan sharing", poin: 80 },
  { nama: "HBO Premium HP", poin: 80 },
  { nama: "Youku sebulan", poin: 80 },
  { nama: "Disney Sharing", poin: 90 },
  { nama: "Netflix sebulan 1 device", poin: 90 },
  { nama: "HBO Premium PC / Laptop", poin: 100 },
  { nama: "Netflix sebulan 2 device", poin: 110 },
  { nama: "iQIYI Premium", poin: 114 },
  { nama: "Disney Private", poin: 130 },
  { nama: "CapCut sebulan private", poin: 130 },
  { nama: "HBO Premium TV", poin: 130 },
  { nama: "Loklok sebulan private", poin: 170 }
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