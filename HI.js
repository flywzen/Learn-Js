console.log("Program Penghitungan Pajak");

function hitungPajak(penghasilan) {
    if (penghasilan < 50000000) {
        return penghasilan * 0.05;
    } else {
        return penghasilan * 0.1;
    }
}

console.log("Pajak yang harus dibayar:" (hitungPajak(1000000)));

