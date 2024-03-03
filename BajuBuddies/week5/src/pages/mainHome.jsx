import React, { useState, useEffect } from 'react';
import './style.css'; // Import stylesheet
import { Link } from 'react-router-dom';

const MainData = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://8e23-103-139-10-197.ngrok-free.app/produk', {
                    mode: "cors",
                    method: "GET",
                    headers: {
                        "ngrok-skip-browser-warning": "true",
                    },
                });
                const data = await response.json();
                setProducts(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleDelete = async (productId) => {
        try {
            await fetch(`https://8e23-103-139-10-197.ngrok-free.app/produk/${productId}`, {
                method: 'DELETE'
            });
            setProducts(products.filter(product => product.id !== productId));
            console.log('Product deleted from server');
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const renderProductRows = () => {
        return products.map(product => (
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.stok}</td>
                <td>{product.harga}</td>
                <td>{product.desc}</td>
                <td><img src={`https://8e23-103-139-10-197.ngrok-free.app${product.gambar}`} alt={product.name} /></td>
                <td className="action-button">
                    <button className="delete-button" onClick={() => handleDelete(product.id)}> <i className="fa fa-trash"></i> Delete</button>
                    <button className="update-button" onClick={() => console.log("Update")} > <i className="fa fa-pencil"></i> Update</button>
                </td>
            </tr>
        ));
    }

    return (
        <main className="table">
            <section className="table-head">
                <ul className="list-wrapper">
                    <li><h1>Daftar Produk</h1></li>
                    <li>
                        <a href="add.jsx">
                            <button className="add-button"> <i className="fa fa-plus"></i> Tambah</button>
                        </a>
                    </li>
                </ul>
            </section>
            <section className="isi-produk">
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Nama</th>
                            <th>Stok</th>
                            <th>Harga</th>
                            <th>Deskripsi</th>
                            <th>Gambar</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody className="data-produk">
                        {renderProductRows()}
                    </tbody>
                </table>
            </section>
        </main>
    );
}

export default MainData;
