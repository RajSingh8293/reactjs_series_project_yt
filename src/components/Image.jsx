

const Image = ({ image, desc }) => {
    return (
        <div>
            <img src={image} alt={desc} />
        </div>
    )
}

export default Image