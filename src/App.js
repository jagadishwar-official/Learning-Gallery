import ImageCard from "./Components/ImageCard";

const imageData = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    title: "Web Development",
    description: "Build modern websites with HTML, CSS and JavaScript."
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    title: "Programming",
    description: "Practice programming concepts and improve your problem-solving skills."
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    title: "Data Science",
    description: "Explore data, discover patterns and turn information into insights."
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80",
    title: "UI/UX Design",
    description: "Create clean, useful and user-friendly digital experiences."
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=900&q=80",
    title: "Database",
    description: "Learn how applications store, organize and retrieve data efficiently."
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    title: "AI & Machine Learning",
    description: "Understand the fundamentals behind intelligent applications."
  }
];

function App() {
  return (
    <div>
      <header className="hero">
        <p className="title-name">LEARNING GALLERY</p>
        <h1>Explore Technology</h1>
        <p className="hero-text">
          Discover different areas of technology through a reusable React image
          card gallery.
        </p>
      </header>

      <main className="gallery-section">
        <div className="section-heading">
          <div>
            <p className="title-name">EXPLORE</p>
            <h2>Popular Categories</h2>
          </div>
          <span className="count">{imageData.length} categories</span>
        </div>

        <section className="gallery-grid">
          {imageData.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;