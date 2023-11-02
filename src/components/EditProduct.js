// EditProduct.js
import React, { useState } from "react";
function EditProduct({ product, onSave, onClose }) {
    const [editedProduct, setEditedProduct] = useState(product);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct({
            ...editedProduct,
            [name]: value,
        });
    };

    const handleSave = () => {
        onSave(editedProduct);
    };

    return (
        <div className="edit-product">
            <h3>Edit Product</h3>
            <label>Name:</label>
            <input
                type="text"
                name="name"
                value={editedProduct.name}
                onChange={handleInputChange}
            />
            <label>Rating:</label>
            <input
                type="number"
                name="rating"
                value={editedProduct.rating}
                onChange={handleInputChange}
            />
            <label>Description:</label>
            <textarea
                name="description"
                value={editedProduct.description}
                onChange={handleInputChange}
            />
            <label>Price:</label>
            <input
                type="number"
                name="price"
                value={editedProduct.price}
                onChange={handleInputChange}
            />
            <button onClick={handleSave}>Save</button>
            <button onClick={onClose}>Cancel</button>
        </div>
    );
}
export default EditProduct;
