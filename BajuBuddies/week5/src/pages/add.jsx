import React, { useState } from 'react';
import './style.css'; // Import stylesheet
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const [formData, setFormData] = useState({
        nama: '',
        stok: '',
        harga: '',
        deskripsi: '',
        gambar: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, gambar: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = 'https://8e23-103-139-10-197.ngrok-free.app/produk';
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.nama);
        formDataToSend.append('stok', formData.stok);
        formDataToSend.append('harga', formData.harga);
        formDataToSend.append('desc', formData.deskripsi);
        formDataToSend.append('image', formData.gambar);

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: formDataToSend
            });
            if (!response.ok) {
                throw new Error('Failed to add product');
            }
            // Jika berhasil, reset form
            setFormData({
                nama: '',
                stok: '',
                harga: '',
                deskripsi: '',
                gambar: null
            });
            console.log('Product added successfully');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div className="container">
            <div className="box form-box">
                <header>Input Data</header>
                <form onSubmit={handleSubmit} className="add-produk">
                    <div className="field input">
                        <label htmlFor="nama-value">Nama</label>
                        <input type="text" name="nama" id="nama-value" value={formData.nama} onChange={handleChange} />
                    </div>
                    <div className="field input">
                        <label htmlFor="stok-value">Stok</label>
                        <input type="text" name="stok" id="stok-value" value={formData.stok} onChange={handleChange} />
                    </div>
                    <div className="field input">
                        <label htmlFor="harga-value">Harga</label>
                        <input type="text" name="harga" id="harga-value" value={formData.harga} onChange={handleChange} />
                    </div>
                    <div className="field input">
                        <label htmlFor="deskripsi-value">Deskripsi</label>
                        <textarea name="deskripsi" id="deskripsi-value" value={formData.deskripsi} onChange={handleChange} />
                    </div>
                    <div className="field input">
                        <label htmlFor="gambar-value">Gambar</label>
                        <input type="file" id="gambar-value" name="gambar" accept="image/*" onChange={handleFileChange} />
                    </div>
                    <div className="field">
                        <input type="submit" className="btn-submit" name="submit" value="Submit" required />
                        <button type="button" className="btn-cancel" onClick={() => window.history.back()}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;
