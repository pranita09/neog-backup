
const ImageComponent = ({link, caption}) => {
    return(
        <>
            <div >
                <figure>
                    <img src={link} alt={caption} style={{width: "50%", height: "50%"}}/>
                    <figcaption>{caption}</figcaption>
                </figure>
            </div>
        </>
    )
}

export default ImageComponent;