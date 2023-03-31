const Product = ({ name, price }) => {
    const nameStyles = { fontWeight: "bold", color: "blue" };
    const priceStyles = { fontStyle: "italic", color: "green" };
  
    return (
      <div className="Component">
        <h3 style={nameStyles}>{name}</h3>
        <h4 style={priceStyles}>{price}</h4>
      </div>
    );
  };
  
  export default Product;
  