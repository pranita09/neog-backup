const DisplayImage = ({imgLink, imgWidth, imgHeight}) => {
    return(
        <div className="component">
            <img src={imgLink} width={imgWidth} height={imgHeight} alt="randomImage"></img>
        </div>
    )
}

export default DisplayImage;