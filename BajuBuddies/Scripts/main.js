const postproduk = document.querySelector('.data-produk');
const addProduk = document.querySelector('.add-produk');
const namaValue = document.getElementById('nama-value');
const stokValue = document.getElementById('stok-value');
const hargaValue = document.getElementById('harga-value');
const deskripsiValue = document.getElementById('deskripsi-value');
const gambarValue = document.getElementById('gambar-value');

let output = '';

//get data
const produkPost = (posts) => {
    posts.forEach(product => {
        output += `
        <tr>
            <td>${product.id}</td>
            <td>${product.name} || ${product.nama}</td>
            <td>${product.stok} </td>
            <td>${product.harga}</td>
            <td>${product.desc}</td>
            <td><img src="https://42e0-111-94-134-70.ngrok-free.app${product.gambar}" alt=""></td>
            <td class="action-button">
                <button class="delete-button" id="delete-post"> <i class="fa fa-trash"></i> Delete</button>
                <a href="update.html">
                    <button class="update-button" id="update-post" > <i class="fa fa-pencil"></i> Update</button>
                </a>
            </td>
        </tr>
    `;
    });
    postproduk.innerHTML = output;
}

const url = 'https://42e0-111-94-134-70.ngrok-free.app/produk';
fetch(url, {
    // ngasih tau kalo kita lagi request cors
     mode: "cors",
     method: "GET",
     headers: {
       "ngrok-skip-browser-warning": "true",
     },
   })
.then(res => res.json())
.then(response => produkPost(response.data));



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
        window.location.replace('index.html');
    })
    .catch(error => console.error('Error:', error));
})