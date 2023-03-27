
const ProductCard = ({id, name}) =>{
    return(
        <>
          <li key={id}>{name}</li>  
        </>
    )
}

const ProductData = ({productList}) => {
    return(
        <>
            <div style={{border: '1px solid black', borderRadius:'5px', margin: '10px auto',padding: '1rem', width: '40%', }}>
                <h1>Product Names</h1>
                <ol>
                    {productList.map(({name},index)=>(
                        <ProductCard id={index} name={name}/>
                    ))}
                </ol>
            </div>
        </>
    )
}

export default ProductData;