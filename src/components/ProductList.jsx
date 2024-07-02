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
    {
      id: 4,
      name: "Women's shoes",
      image: 'src/assets/shoe_C01.jpeg',
      price: '$120',
    },
    {
      id: 5,
      name: "Women's shoes",
      image: 'src/assets/shoe_C01.jpeg',
      price: '$120',
    },
    {
      id: 6,
      name: "Women's shoes",
      image: 'src/assets/shoe_C01.jpeg',
      price: '$120',
    },
  ];
  

    const ProductList = () => {
    return (

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