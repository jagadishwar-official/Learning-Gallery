function ImageCard({ image }) {
  return (
    <div className="image-card">
      <div className="image-wrapper">
        <img src={image.imageUrl} alt={image.title} />
      </div>

      <div className="card-content">
        <h3>{image.title}</h3>
        <p>{image.description}</p>
      </div>
    </div>
  );
}

export default ImageCard;