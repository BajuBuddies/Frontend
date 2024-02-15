postproduk.addEventListener('click', (e) => {
    if (e.target.matches('.delete-button')) {
      const productId = e.target.dataset.id;
      const tableRow = e.target.closest('tr');
  
      tableRow.remove();
  
      fetch(`${url}/${productId}`, { 
        method: 'DELETE' 
    })
        .then(() => console.log('Product deleted from server'))
        .catch((error) => {
          console.error('Error deleting product:', error);
          tableRow.insertAdjacentElement('afterend', tableRow); 
        });
    }
});