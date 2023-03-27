
const ProductList = ({products, productsHeader}) => {
    return(
        <div style={{border: '1px solid black', borderRadius:'5px', margin: '10px auto',padding: '1rem', width: '40%', }}>
            <h1>{productsHeader}</h1>
            <ul>
                {
                    products.map((product) => (
                        <li>{product}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default ProductList;