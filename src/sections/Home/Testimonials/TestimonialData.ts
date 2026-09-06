export interface Testimonial {
  id: number;
  name: string;
  role: string;
  review: string;
  image: string;
}

export const testimonials: Testimonial[] = [
  
  
  {
    id: 1,
    name: "Div Mittal",
    role: "Founder, HumTum Media Inc, Canada",
    review:
      "Gopal has been incredible to work with: super reliable, with smooth and seamless communication from start to finish. The quality of his 3D work was top-notch, perfectly capturing our vision. Highly recommended!",
    image: "/images/testimonials/Div.jpg",
  },

  {
    id: 2,
    name: "Swathi Subramani",
    role: "Founder, Swatz.in",
    review:
      "Working with Gopal has been a wonderful experience. The animations are creative, engaging and perfectly aligned with our brand vision.The communication was smooth and the final output exceeded my expectations. Professional, responsive, and genuinely talented. Would definitely recommend!",
    image: "/images/testimonials/swathi.jpeg",
  },
  {
    id: 3,
    name: "Kavi",
    role: "Fivetag - YouTube Channel · 500K+ Subscribers",
    review:
      "GK is one of the best editors I’ve worked with. His attention to detail, creativity, and patience with revisions are exceptional. He consistently delivers work that exceeds expectations, and I’m always impressed by the final result.",
    image: "/images/testimonials/kavi.png",
  },
  {
    id: 4,
    name: "Dinesh Kumar",
    role: "Animation Director, Mypromovideos",
    review:
      "He is a talented 3D Generalist who always researches and asks the right questions before starting a project.He understands the requirements well and consistently delivers high-quality animation.He sets clear timelines and never misses a deadline.",
    image: "/images/testimonials/Dinesh.png",
  },
  {
    id: 5,
    name: "Mari Prabhakaran",
    role: "Mari Constructions, Coimbatore",
    review:
      "Mr. Gopalakrishnan consistently delivers elevation on time. We discuss several changes together, and he implements them patiently and thoroughly, which helps me achieve a 100% satisfactory output. I’m very happy with his work, and we’re looking forward to making our upcoming projects even better.",
    image: "/images/testimonials/Mari.jpg",
  },
  // {
  //   id: 6,
  //   name: "Ganesh",
  //   role: "Art Director, Mypromovideos",
  //   review:
  //     "Highly professional and the output quality was outstanding. Communication was smooth throughout the project.",
  //   image: "/images/testimonials/Ganesh.png",
  // },
];