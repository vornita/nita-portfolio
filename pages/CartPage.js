import React from "react";
function CartPage({ cart, totalPrice }) {
  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "50px", marginRight: "10px" }}
                />
                <strong>{product.title}</strong>
                <p>${product.price.toFixed(2)}</p>
                <p>Quantity: {product.quantity}</p>
              </li>
            ))}
          </ul>
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
}
export default CartPage;
