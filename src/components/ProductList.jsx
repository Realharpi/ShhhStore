import "./ProductList.css";

// This is an array cointaining data.
const products = [
    {
      id: 1,
      name: "Men's shoes",
      image: 'src/assets/shoe_A01.png',
      price: '$100',
    },
    {
      id: 2,
      name: "Kid's shoes",
      image: "src/assets/shoe_B01.png",
      price: '$80',
    },
    {
      id: 3,
      name: "Women's shoes",
      image: 'src/assets/shoe_C01.jpeg',
      price: '$120',
    },
  ];
  

  // ProductList is a functional component, similar to JS - arrow function.
  const ProductList = () => {
    return (

      // We write HTML/JSX here.

      <div className="product-list">
        {products.map(product => (                                          // map is similar to forEach but it creates a duplicate array, instead of modifying the original array. It's a JS calling function.
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProductList;