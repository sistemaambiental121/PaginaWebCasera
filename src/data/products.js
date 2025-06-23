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
    tags: ["Laptop", "Promocion"],
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
  },

  // 🆕 Nuevos productos desde Cotizador
  {
    id: 5,
    name: "Intel Core i5 12400F",
    description: "Procesador 6 núcleos, 12 hilos, ideal para gaming y productividad",
    price: 150.00,
    image: "/img/intel-i5.jpg",
    stock: "in-stock",
    store: "Downtown Store",
    brand: "Intel",
    tags: ["CPU", "Componentes"],
    colors: ["Blue"],
    tier: "mid",
    optimalMatch: ["MSI B550"],
    compatibility: ["MSI B550", "ASUS Prime B460"],
    colorImages: {
      "Blue": "/img/intel-i5.jpg"
    }
  },
  {
    id: 6,
    name: "AMD Ryzen 5 5600X",
    description: "Procesador AM4, 6 núcleos, excelente rendimiento multicore",
    price: 180.00,
    image: "/img/ryzen5600x.jpg",
    stock: "in-stock",
    store: "Uptown Store",
    brand: "AMD",
    tags: ["CPU", "Componentes"],
    colors: ["Orange"],
    tier: "mid",
    optimalMatch: ["MSI B550"],
    compatibility: ["MSI B550"],
    colorImages: {
      "Orange": "/img/ryzen5600x.jpg"
    }
  },
  {
    id: 7,
    name: "MSI B550",
    description: "Placa madre compatible con Ryzen 3000/5000, DDR4",
    price: 120.00,
    image: "/img/msi-b550.jpg",
    stock: "in-stock",
    store: "Outlet Store",
    brand: "MSI",
    tags: ["Motherboard"],
    colors: ["Black"],
    tier: "mid",
    optimalMatch: ["Ryzen 5 5600X"],
    compatibility: ["Ryzen 5 5600X", "Intel Core i5 12400F"],
    colorImages: {
      "Black": "/img/msi-b550.jpg"
    }
  },
  {
    id: 8,
    name: "ASUS Prime B460",
    description: "Placa base Intel con chipset B460, soporte 10ª gen",
    price: 100.00,
    image: "/img/asus-b460.jpg",
    stock: "low-stock",
    store: "Downtown Store",
    brand: "ASUS",
    tags: ["Motherboard"],
    colors: ["Gray"],
    tier: "low",
    optimalMatch: ["Intel Core i5 12400F"],
    compatibility: ["Intel Core i5 12400F"],
    colorImages: {
      "Gray": "/img/asus-b460.jpg"
    }
  },
  {
    id: 9,
    name: "RAM 16GB DDR4 3200MHz",
    description: "Memoria RAM ideal para gaming y uso general",
    price: 60.00,
    image: "/img/ram16.jpg",
    stock: "in-stock",
    store: "Uptown Store",
    brand: "Kingston",
    tags: ["RAM"],
    colors: ["Black"],
    tier: "mid",
    optimalMatch: ["MSI B550"],
    compatibility: ["MSI B550", "ASUS Prime B460"],
    colorImages: {
      "Black": "/img/ram16.jpg"
    }
  },
  {
    id: 10,
    name: "RAM 32GB DDR4 3600MHz",
    description: "Memoria de alto rendimiento para tareas intensivas",
    price: 100.00,
    image: "/img/ram32.jpg",
    stock: "in-stock",
    store: "Outlet Store",
    brand: "Corsair",
    tags: ["RAM"],
    colors: ["Black", "Red"],
    tier: "high",
    optimalMatch: ["Ryzen 5 5600X"],
    compatibility: ["Ryzen 5 5600X", "MSI B550"],
    colorImages: {
      "Black": "/img/ram32-black.jpg",
      "Red": "/img/ram32-red.jpg"
    }
  },
  {
    id: 11,
    name: "NVIDIA RTX 3060",
    description: "Tarjeta gráfica potente para juegos AAA y productividad",
    price: 300.00,
    image: "/img/rtx3060.jpg",
    stock: "in-stock",
    store: "Downtown Store",
    brand: "NVIDIA",
    tags: ["GPU", "Componentes"],
    colors: ["Black", "RGB"],
    tier: "high",
    optimalMatch: ["HP Pavilion Gaming Desktop"],
    compatibility: ["Ryzen 5 5600X", "Intel Core i5 12400F"],
    colorImages: {
      "Black": "/img/rtx3060.jpg",
      "RGB": "/img/rtx3060-rgb.jpg"
    }
  },
  {
    id: 12,
    name: "AMD RX 6700XT",
    description: "GPU de alto rendimiento con 12GB GDDR6",
    price: 350.00,
    image: "/img/rx6700xt.jpg",
    stock: "low-stock",
    store: "Uptown Store",
    brand: "AMD",
    tags: ["GPU", "Componentes"],
    colors: ["Black"],
    tier: "high",
    optimalMatch: ["Ryzen 5 5600X"],
    compatibility: ["Ryzen 5 5600X", "MSI B550"],
    colorImages: {
      "Black": "/img/rx6700xt.jpg"
    }
  }
]

export default products
