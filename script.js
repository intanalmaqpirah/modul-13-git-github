function tampilPesan() {
    alert("Halo!");
}
console.log("Selamat datang di Modul 13");
const deskripsi = document.getElementById("deskripsi");

const btnUbah = document.getElementById("btnUbah");

btnUbah.addEventListener("click", function() {

  deskripsi.textContent = "Deskripsi berhasil diubah menggunakan JavaScript.";

});

