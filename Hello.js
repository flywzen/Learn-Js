console.log("Hello JSHT!")
function cekGenapGanjil(angka) {
    if (angka % 2 === 0) {
        return "Genap";
    } else {
        return "Ganjil";
    }
}

// Contoh penggunaan:
console.log(cekGenapGanjil(4));  // Output: "Genap"
console.log(cekGenapGanjil(7));  // Output: "Ganjil"

let name = prompt("Masukkan nama Anda:");
console.log("Nama Anda adalah:", name);
