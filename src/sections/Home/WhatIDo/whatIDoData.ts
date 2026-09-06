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
    title: "Explainer Videos",
    description: "SaaS Explainers · 3D Explainers · Character Explainers",
    image: "/images/whatIDo/Explainer video.jpg",
  },
  {
    id: 2,
    category: "PRODUCT VISUALISATION",
    title: "Product Visualisation",
    description: "Product Renders · Product Animation · Furniture Design & Renders",
    image: "/images/whatIDo/Product visualisation.jpg",
  },
  {
    id: 3,
    category: "Architecture & Interiors",
    title: "Architectural Visualisation",
    description: "Interior & Elevation Design & Renders · 3D Environments",
    image: "/images/whatIDo/Architectural visualisation.jpg",
  },
  {
    id: 4,
    category: " 3D Design & Animation",
    title: "3D Design & Animation",
    description: "3D Modelling & Texturing · 3D Animation · Vehicle Rigs",
    image: "/images/whatIDo/3D Animation.jpg",
  },
  {
    id: 5,
    category: "Motion & Interactive",
    title: "Motion & Interactive",
    description: "UI/UX Animation · Lottie · WebGL · Logo Reveals",
    image: "/images/whatIDo/Motion graphics.jpg",
  },
  {
    id: 6,
    category: " Video Editing",
    title: "Video Editing",
    description: "YouTube Videos · Reels · Shorts",
    image: "/images/whatIDo/Video editing.jpg",
  },
]