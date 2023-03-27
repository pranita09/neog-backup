const ProductCard = ({ id, name, quantity, sales }) => {
    return (
      <>
        <li key={id}>
          Name: {name}, Quantity: {quantity}, Sales: {sales}
        </li>
      </>
    );
};
  
const ProductData = ({ productList }) => {
    return (
      <div>
        <div
          style={{
            border: "1px solid black",
            borderRadius: "5px",
            margin: "10px auto",
            padding: "1rem",
            width: "60%"
          }}
        >
          <h1>Product Names</h1>
          <ul>
            {productList
              .filter(({ quantity, sales }) => sales > quantity)
              .map(({ name, quantity, sales }, index) => (
                <ProductCard
                  id={index}
                  name={name}
                  quantity={quantity}
                  sales={sales}
                />
              ))}
          </ul>
        </div>
      </div>
    );
};

export default ProductData;
  