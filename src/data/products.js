const products = [
  {
    id: 1,
    name: "MacBook Pro 16\" (2023)",
    description: "Logitech MX Master 3S",
    price: 2399.00,
    image: "/img/macbook.jpg",
    stock: "in-stock",
    store: "Downtown Store",
    brand: "Apple",
    tags: ["Laptop","Promocion"],
    colors: ["Silver", "Space Gray"],
    tier: "high",
    optimalMatch: ["Keychron K8 Pro"],
    compatibility: ["Dell XPS 15 (2023)", "HP Pavilion Gaming Desktop"],
    colorImages: {
      "Silver": "/img/macbook-silver.jpg",
      "Space Gray": "/img/macbook-gray.jpg"
    }
  },
  {
    id: 2,
    name: "MacBook Pro 15\" (2023)",
    description: "Logitech MX Master 3S",
    price: 2399.00,
    image: "/img/macbook.jpg",
    stock: "in-stock",
    store: "Downtown Store",
    brand: "Apple",
    tags: ["Laptop"],
    colors: ["Silver", "Space Gray"],
    tier: "high",
    optimalMatch: ["Keychron K8 Pro"],
    compatibility: ["Dell XPS 15 (2023)", "HP Pavilion Gaming Desktop"],
    colorImages: {
      "Silver": "/img/macbook-silver.jpg",
      "Space Gray": "/img/macbook-gray.jpg"
    }
  },
  {
    id: 3,
    name: "Dell XPS 15 (2023)",
    description: "Keychron K8 Pro",
    price: 1299.00,
    image: "/img/dell.jpg",
    stock: "out-stock",
    store: "Uptown Store",
    brand: "Dell",
    tags: ["Laptop"],
    colors: ["Black", "Silver"],
    tier: "mid",
    optimalMatch: ["HP Pavilion Gaming Desktop"],
    compatibility: ["MacBook Pro 16\" (2023)"],
    colorImages: {
      "Black": "/img/dell-black.jpg",
      "Silver": "/img/dell-silver.jpg"
    }
  },
  {
    id: 4,
    name: "HP Pavilion Gaming Desktop",
    description: "NVIDIA RTX 4060 Ti",
    price: 899.00,
    image: "/img/hp.jpg",
    stock: "low-stock",
    store: "Outlet Store",
    brand: "HP",
    tags: ["Desktop", "Components"],
    colors: ["Black"],
    tier: "mid",
    optimalMatch: ["Dell XPS 15 (2023)"],
    compatibility: ["MacBook Pro 16\" (2023)", "Keychron K8 Pro"],
    colorImages: {
      "Black": "/img/hp-black.jpg"
    }
  }
]

export default products
