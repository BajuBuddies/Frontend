document.addEventListener("DOMContentLoaded", function(){
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");
    console.log(id);

    // Mengecek apakah id ada
    if (id) {
        // Mengambil data produk berdasarkan id
        fetch(`https://42e0-111-94-134-70.ngrok-free.app/produk/${id}`, {
            method: "GET",
            headers: {
                "ngrok-skip-browser-warning": "true",
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((data) => {
            // Mengisi nilai input dengan data produk
            document.getElementById("nama").value = data.name;
            document.getElementById("stok").value = data.stok;
            document.getElementById("harga").value = data.harga;
            document.getElementById("deskripsi").value = data.desc;
            document.getElementById("gambar").src = `https://42e0-111-94-134-70.ngrok-free.app${data.gambar}`;
        });
    } else {
        // Menampilkan pesan error jika id tidak ada
        console.error("ID produk tidak ditemukan");
    }
});

document.getElementById("updateForm").addEventListener('submit', function(e) {
    e.preventDefault();
    const databaru = new FormData(this);
    console.log(databaru);
})

if (id) {
    fetch(`https://42e0-111-94-134-70.ngrok-free.app/produk/${id}`, {
        method: "PUT",
        body: databaru   
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('keslaahan data');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data successfully sent:', data);
    })
    .catch(error => {
        console.error('There was an error!', error);
    });
}

//nyerah