import type { NextPage } from "next";
import Image from "next/image";

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Mastering Responsive Web Design",
    imgSrc: "/imgs/blog/1.jpg",
    date: "September 1, 2022",
    description:
      "In today digital landscape, responsive web design is not just a trend; it is a necessity. Explore the principles and techniques behind creating websites that adapt seamlessly to various devices and screen sizes.",
    tags: [
      "HTML",
      "CSS",
      "Responsive Design",
      "Media Queries",
      "Flexbox",
      "Grid",
      "Mobile-First",
      "Tailwind",
      "Bootstrap",
      "Material UI",
      "Web Design Best Practices",
    ],
  },
  {
    id: 2,
    title: "Unleashing Creativity with Slideshows",
    imgSrc: "/imgs/blog/2.jpg",
    date: "September 1, 2022",
    description:
      "Discover innovative ways to create captivating slideshows that engage your audience. From stunning visuals to seamless transitions, this blog post explores the art of crafting memorable slideshows for your website.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Animations",
      "Transitions",
      "jQuery",
      "Carousel",
      "Web Design",
      "User Interaction",
      "Slideshow Plugins",
      "Responsive Design",
    ],
  },
  {
    id: 3,
    title: "Enhancing User Experience with Image Gallery Lightboxes",
    imgSrc: "/imgs/blog/3.jpg",
    date: "September 1, 2022",
    description:
      "Explore the benefits of incorporating image gallery lightboxes into your website design. From improved user experience to showcasing your visual content in style, this blog post sheds light on this valuable web design feature.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Lightbox",
      "Modal",
      "Image Optimization",
      "User Experience (UX)",
      "Gallery Design",
      "Web Design",
    ],
  },
];

const Blog: NextPage = () => {
  return (
    <>
      <section className="blog section" id="blog">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Latest Blog Posts</h2>
            </div>
          </div>
          <div className="row">
            {blogPosts.map((post) => (
              <div className="blog-item padd-15" key={post.id}>
                <div className="blog-item-inner shadow-dark">
                  <div className="blog-img">
                    <Image src={post.imgSrc} alt={post.title} />
                    <div className="blog-date">{post.date}</div>
                  </div>
                  <div className="blog-info">
                    <h4 className="blog-title">{post.title}</h4>
                    <p className="blog-description">{post.description}</p>
                    <p
                      className="blog-tags"
                      style={{ display: "flex", flexWrap: "wrap", gap: "2px" }}
                    >
                      Tags:{" "}
                      {post.tags.map((tag, index) => (
                        <a href="#" key={index}>
                          {tag}
                          {index < post.tags.length - 1 ? ", " : ""}
                        </a>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
