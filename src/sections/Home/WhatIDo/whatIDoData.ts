export interface WhatIDoItem {
  id: number
  category: string
  title: string
  description: string
  image: string
}

export const whatIDoData: WhatIDoItem[] = [
  {
    id: 1,
    category: "EXPLAINER VIDEOS",
    title: "Explainer Video Production",
    description: "SaaS Explainers · 2D & 3D Explainers · Character based Explainers",
    image: "/images/whatIDo/Explainer video.jpg",
  },
  {
    id: 2,
    category: "PRODUCT VISUALISATION",
    title: "3D Product Visualization",
    description: "Product Renders · Product Launch Animation · Furniture Design & Renders",
    image: "/images/whatIDo/Product visualisation.jpg",
  },
  {
    id: 3,
    category: "ARCHITECTURAL VISUALIZATION",
    title: "Architectural Visualization",
    description: "3D Interior Renders · 3D Exterior Renders · 3D Elevation Designs",
    image: "/images/whatIDo/Architectural visualisation.jpg",
  },
  {
    id: 4,
    category: "3D Modeling & Animation",
    title: "3D Modeling & Animation",
    description: "3D Modelling & Texturing · 3D Animation · Vehicle Rigs",
    image: "/images/whatIDo/3D Animation.jpg",
  },
  {
    id: 5,
    category: "Motion Graphics",
    title: "Motion Graphics",
    description: "UI/UX Animation · Lottie · WebGL · Logo Reveals",
    image: "/images/whatIDo/Motion graphics.jpg",
  },
  {
    id: 6,
    category: "Video Editing",
    title: "Video Editing",
    description: "YouTube Videos · Reels · Shorts · Social Media Content · Corporate Videos · Function videos",
    image: "/images/whatIDo/Video editing.jpg",
  },
]