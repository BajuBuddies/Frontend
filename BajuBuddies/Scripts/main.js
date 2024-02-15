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
        <tr data-id=${product.id}>
            <td>${product.id}</td>
            <td class="nama-produk">${product.name}</td>
            <td class="stok-produk">${product.stok} </td>
            <td class="harga-produk">${product.harga}</td>
            <td class="desc-produk">${product.desc}</td>
            <td class="img-produk"><img src="https://42e0-111-94-134-70.ngrok-free.app${product.gambar}" alt=""></td>
            <td class="action-button">
                <button class="delete-button" data-id="${product.id}"> <i class="fa fa-trash"></i> Delete</button>
                <button class="update-button" id="update-post" data-id="${product.id}" > <i class="fa fa-pencil"></i> Update</button>
            </td>
        </tr>
    `;
});
postproduk.innerHTML = output;
}

const url = 'https://42e0-111-94-134-70.ngrok-free.app/produk';
fetch(url, {
     mode: "cors",
     method: "GET",
     headers: {
       "ngrok-skip-browser-warning": "true",
     },
   })
.then(res => res.json())
.then(response => produkPost(response.data));

postproduk.addEventListener('click', async function(event){
    
    if (event.target.classList.contains(('update-button'))){
        console.log("hai")
        const productId = event.target.dataset.productId; 
        window.location.href = `update.html?id=${event.target.dataset.id}`;
    }
});




