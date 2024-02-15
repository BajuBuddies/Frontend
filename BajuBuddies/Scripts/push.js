// push produk
addProduk.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', namaValue.value);
    formData.append('stok', stokValue.value);
    formData.append('harga', hargaValue.value);
    formData.append('desc', deskripsiValue.value);
    formData.append('image', gambarValue.files[0]);

    
    fetch(url, {
        method: "POST",
        body: formData
    })
    .then(res => res.json())
    .then(response => {
        const dataArr = [];
        dataArr.push(response);
        produkPost(dataArr);
        window.location.href = ('index.html');
    })
    .catch(error => console.error('Error:', error));
    
})