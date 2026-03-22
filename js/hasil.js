const poin = parseInt(localStorage.getItem("poin")) || 0;
document.getElementById("poin").innerText = poin;

const hadiah = [
  { nama: "Voucher Potongan Rp3.000", poin: 10, jenis: "Voucher" },
  { nama: "Voucher Potongan Rp5.000", poin: 13, jenis: "Voucher" },
  { nama: "Voucher Potongan Rp8.000", poin: 25, jenis: "Voucher" },
  { nama: "Voucher Potongan Rp10.000", poin: 29, jenis: "Voucher" },
  { nama: "Voucher Potongan Rp12.000", poin: 34, jenis: "Voucher" },
  { nama: "Voucher Potongan Rp15.000", poin: 39, jenis: "Voucher" },
  { nama: "Voucher Potongan Rp17.000", poin: 43, jenis: "Voucher" },
  { nama: "Voucher Potongan Rp20.000", poin: 48, jenis: "Voucher" },
  { nama: "VIU sebulan", poin: 50, jenis: "VIU" },
  { nama: "Voucher Potongan Rp25.000", poin: 53, jenis: "Voucher" },
  { nama: "Vidio Platinum HP", poin: 58, jenis: "Vidio Platinum" },
  { nama: "Voucher pot. 35.000", poin: 60, jenis: "Voucher" },
  { nama: "Canva sebulan", poin: 70, jenis: "Canva" },
  { nama: "Netflix 1 bulan sharing", poin: 80, jenis: "Netflix" },
  { nama: "WeTV sebulan", poin: 80, jenis: "WeTV" },
  { nama: "Loklok sebulan sharing", poin: 80, jenis: "Loklok" },
  { nama: "Prime Video", poin: 80, jenis: "Prime Video" },
  { nama: "Vidio Platinum TV", poin: 80, jenis: "Vidio Platinum" },
  { nama: "CapCut sebulan sharing", poin: 80, jenis: "Capcut" },
  { nama: "HBO Premium HP", poin: 80, jenis: "HBO" },
  { nama: "Disney Sharing", poin: 90, jenis: "Disney" },
  { nama: "Netflix sebulan 1 device", poin: 90, jenis: "Netflix" },
  { nama: "HBO Premium PC / Laptop", poin: 100, jenis: "HBO" },
  { nama: "Netflix sebulan 2 device", poin: 110, jenis: "Netflix" },
  { nama: "iQIYI Premium", poin: 114, jenis: "iQIYI" },
  { nama: "Disney Private", poin: 130, jenis: "Disney" },
  { nama: "CapCut sebulan private", poin: 130, jenis: "Capcut" },
  { nama: "HBO Premium TV", poin: 130, jenis: "HBO" },
  { nama: "Loklok sebulan private", poin: 170, jenis: "Loklok" }
];

const watermarkByJenis = {
  "Voucher": "img/watermark/voucher.png",
  "VIU": "img/watermark/viu.png",
  "Vidio Platinum": "img/watermark/vidio.png",
  "Canva": "img/watermark/canva.png",
  "Netflix": "img/watermark/netflix.png",
  "WeTV": "img/watermark/wetv.png",
  "Loklok": "img/watermark/loklok.png",
  "Prime Video": "img/watermark/prime-video.png",
  "Capcut": "img/watermark/capcut.png",
  "HBO": "img/watermark/hbo.png",
  "Disney": "img/watermark/disney.png",
  "iQIYI": "img/watermark/iqiyi.png"
};

const katalog = document.getElementById("katalog");

hadiah.forEach(item => {
  const bisa = poin >= item.poin;
  const watermark = watermarkByJenis[item.jenis] || "";

  const div = document.createElement("div");
  div.className = "item";
  div.style.backgroundImage = `url('${watermark}')`;

  div.innerHTML = `
    <div class="item-row ${bisa ? "aktif" : "nonaktif"}">
      <div class="item-text">
        <small class="badge-jenis">${item.jenis}</small>
        <h3>${item.nama}</h3>
        <p class="poin-text">${item.poin} poin</p>
      </div>
      <button class="btn-tukar" ${!bisa ? "disabled" : ""} onclick="tukar('${item.nama}')">
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
  window.open(url, "_blank");
}