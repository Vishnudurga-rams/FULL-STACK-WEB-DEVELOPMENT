import React, { useState } from "react";

function ProductListing() {
  // Sample products
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Smartphone", price: 800 },
    { id: 3, name: "Headphones", price: 150 },
    { id: 4, name: "Smartwatch", price: 200 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`✅ Added "${product.name}" to cart!`);
  };

  const viewCart = () => {
    if (cart.length === 0) {
      alert("🛒 Your cart is empty!");
      return;
    }

    let cartDetails = "🛒 Cart Items:\n\n";
    cart.forEach((item, index) => {
      cartDetails += `${index + 1}. ${item.name} - $${item.price}\n`;
    });
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartDetails += `\nTotal: $${total}`;

    alert(cartDetails);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🛍️ Product Listing</h1>
      <div style={styles.productGrid}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <h3>{product.name}</h3>
            <p style={styles.price}>${product.price}</p>
            <button style={styles.button} onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <button style={styles.viewCartButton} onClick={viewCart}>
        View Cart ({cart.length})
      </button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    fontFamily: "Segoe UI, sans-serif",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    marginBottom: "30px",
    color: "#333",
  },
  productGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "30px",
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
    margin: "10px 0",
    color: "#555",
  },
  button: {
    padding: "10px 15px",
    borderRadius: "20px",
    border: "none",
    background: "#ff6f61",
    color: "#fff",
    cursor: "pointer",
  },
  viewCartButton: {
    padding: "12px 25px",
    borderRadius: "25px",
    border: "none",
    background: "#ff3f3f",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default ProductListing;
