import React, { useState } from "react";

function ProductBrowser() {
  const [category, setCategory] = useState("all");

  // Sample products
  const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
    { id: 2, name: "Smartphone", category: "Electronics", price: 800 },
    { id: 3, name: "Jeans", category: "Clothing", price: 50 },
    { id: 4, name: "T-Shirt", category: "Clothing", price: 20 },
    { id: 5, name: "Microwave", category: "Home Appliances", price: 150 },
    { id: 6, name: "Blender", category: "Home Appliances", price: 70 },
  ];

  const categories = ["all", "Electronics", "Clothing", "Home Appliances"];

  const filteredProducts =
    category === "all" ? products : products.filter((p) => p.category === category);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🛒 Product Browser</h1>

      <div style={styles.categories}>
        {categories.map((cat) => (
          <button
            key={cat}
            style={cat === category ? styles.activeCategory : styles.categoryButton}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={styles.productGrid}>
        {filteredProducts.length === 0 ? (
          <p>No products available in this category.</p>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} style={styles.productCard}>
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p style={styles.price}>${product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
    padding: "20px",
    background: "linear-gradient(135deg, #a8edea, #fed6e3)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  categories: {
    marginBottom: "25px",
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },
  categoryButton: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "20px",
    background: "#3498db",
    color: "#fff",
    cursor: "pointer",
  },
  activeCategory: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "20px",
    background: "#2ecc71",
    color: "#fff",
    cursor: "pointer",
  },
  productGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
  },
  productCard: {
    background: "#fff",
    padding: "20px",
    borderRadius: "12px",
    width: "180px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  price: {
    fontWeight: "bold",
    color: "#e74c3c",
  },
};

export default ProductBrowser;
