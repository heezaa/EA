let skor = {
    kucing: 0,
    ular: 0,
    garuda: 0
};

let jumlahPertanyaanDijawab = 0;
const totalPertanyaan = 3;

function jawab(kategori) {
    skor[kategori]++;
    jumlahPertanyaanDijawab++;

    // Nonaktifkan tombol setelah dijawab
    const tombolSoal = event.target.parentElement.querySelectorAll('button');
    tombolSoal.forEach(tombol => {
        tombol.disabled = true;
    });

    if (jumlahPertanyaanDijawab === totalPertanyaan) {
        tampilkanHasil();
    }
}

function tampilkanHasil() {
    let hewanTerpilih = '';
    let skorTertinggi = 0;

    for (const kategori in skor) {
        if (skor[kategori] > skorTertinggi) {
            skorTertinggi = skor[kategori];
            hewanTerpilih = kategori;
        }
    }

    let namaHewan;
    switch (hewanTerpilih) {
        case 'kucing':
            namaHewan = "Kucing Lampir";
            break;
        case 'ular':
            namaHewan = "Ular Naga Sakti";
            break;
        case 'garuda':
            namaHewan = "Garuda Emas Perkasa";
            break;
        default:
            namaHewan = "Hewan Misterius";
    }

    document.getElementById('hewan').innerText = namaHewan;
    document.getElementById('hasil').style.display = 'block';
}
