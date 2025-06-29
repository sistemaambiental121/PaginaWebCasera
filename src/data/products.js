const products = [
  {
    id: 1,
    name: "MacBook Pro 16\" (2023)",
    description: "Logitech MX Master 3S",
    price: 2399.00,
    image: "./src/assets/img/macbook pro 16.jpeg",
    stock: "in-stock",
    store: "Mi pc 1",
    brand: "Apple",
    tags: ["Laptop", "Promocion"],
    colors: ["Silver", "Space Gray"],
    tier: "high",
    optimalMatch: ["Keychron K8 Pro"],
    compatibility: ["Dell XPS 15 (2023)", "HP Pavilion Gaming Desktop"],
    colorImages: {
      "Silver": "./src/assets/img/macbook pro 16.jpeg",
      "black": "./src/assets/img/black16.jpeg"
    }
  },
  {
    id: 2,
    name: "MacBook Pro 15\" (2023)",
    description: "Logitech MX Master 3S",
    price: 2399.00,
    image: "./src/assets/img/macbook pro 15.jpg",
    stock: "in-stock",
    store: "Mi pc 1",
    brand: "Apple",
    tags: ["Laptop"],
    colors: ["Silver", "Space Gray"],
    tier: "high",
    optimalMatch: ["Keychron K8 Pro"],
    compatibility: ["Dell XPS 15 (2023)", "HP Pavilion Gaming Desktop"],
    colorImages: {
      "Silver": "./src/assets/img/macbook pro 15.jpg",
      "Space Gray": "./src/assets/img/negrobuck.jpg"
    }
  },
  {
    id: 3,
    name: "Dell XPS 15 (2023)",
    description: "Laptop de alto rendimiento con pantalla OLED",
    price: 1299.00,
    image: "./src/assets/img/dellxps15.jpeg",
    stock: "out-stock",
    store: "Mi pc 2",
    brand: "Dell",
    tags: ["Laptop"],
    colors: ["Black", "Silver"],
    tier: "mid",
    optimalMatch: ["HP Pavilion Gaming Desktop"],
    compatibility: ["MacBook Pro 16\" (2023)"],
    colorImages: {
      "Black": "./src/assets/img/dellxps15.jpeg",
      "Silver": "./src/assets/img/blanco.jpg"
    }
  },
  {
    id: 4,
    name: "HP Pavilion Gaming Desktop",
    description: "NVIDIA RTX 4060 Ti",
    price: 899.00,
    image: "./src/assets/img/primeb460.jpeg",
    stock: "low-stock",
    store: "Mi pc 3",
    brand: "HP",
    tags: ["Desktop", "Components"],
    colors: ["Black"],
    tier: "mid",
    optimalMatch: ["Dell XPS 15 (2023)"],
    compatibility: ["MacBook Pro 16\" (2023)", "Keychron K8 Pro"],
    colorImages: {
      "Black": "./src/assets/img/primeb460.jpeg"
    }
  },

  // 🆕 Nuevos productos desde Cotizador
  {
    id: 5,
    name: "Intel Core i5 12400F",
    description: "Procesador 6 núcleos, 12 hilos, ideal para gaming y productividad",
    price: 150.00,
    image: "./src/assets/img/i5.jpeg",
    stock: "in-stock",
    store: "Mi pc 1",
    brand: "Intel",
    tags: ["CPU", "Componentes"],
    colors: ["Blue"],
    tier: "mid",
    optimalMatch: ["MSI B550"],
    compatibility: ["MSI B550", "ASUS Prime B460"],
    colorImages: {
      "Blue": "./src/assets/img/i5.jpeg"
    }
  },
  {
    id: 6,
    name: "AMD Ryzen 5 5600X",
    description: "Procesador AM4, 6 núcleos, excelente rendimiento multicore",
    price: 180.00,
    image: "./src/assets/img/amdryzen5.jpg",
    stock: "in-stock",
    store: "Mi pc 2",
    brand: "AMD",
    tags: ["CPU", "Componentes"],
    colors: ["Orange"],
    tier: "mid",
    optimalMatch: ["MSI B550"],
    compatibility: ["MSI B550"],
    colorImages: {
      "Orange": "./src/assets/img/amdryzen5.jpg"
    }
  },
  {
    id: 7,
    name: "MSI B550",
    description: "Placa madre compatible con Ryzen 3000/5000, DDR4",
    price: 120.00,
    image: "./src/assets/img/msib550.jpeg",
    stock: "in-stock",
    store: "Mi pc 3",
    brand: "MSI",
    tags: ["Motherboard"],
    colors: ["Black"],
    tier: "mid",
    optimalMatch: ["Ryzen 5 5600X"],
    compatibility: ["Ryzen 5 5600X", "Intel Core i5 12400F"],
    colorImages: {
      "Black": "./src/assets/img/msib550.jpeg"
    }
  },
  {
    id: 8,
    name: "ASUS Prime B460",
    description: "Placa base Intel con chipset B460, soporte 10ª gen",
    price: 100.00,
    image: "./src/assets/img/primeb460.jpeg",
    stock: "low-stock",
    store: "Mi pc 1",
    brand: "ASUS",
    tags: ["Motherboard"],
    colors: ["Gray"],
    tier: "low",
    optimalMatch: ["Intel Core i5 12400F"],
    compatibility: ["Intel Core i5 12400F"],
    colorImages: {
      "Gray": "./src/assets/img/primeb460.jpeg"
    }
  },
  {
    id: 9,
    name: "RAM 16GB DDR4 3200MHz",
    description: "Memoria RAM ideal para gaming y uso general",
    price: 60.00,
    image: "./src/assets/img/32gb.jpg",
    stock: "in-stock",
    store: "Mi pc 2",
    brand: "Kingston",
    tags: ["RAM"],
    colors: ["Black"],
    tier: "mid",
    optimalMatch: ["MSI B550"],
    compatibility: ["MSI B550", "ASUS Prime B460"],
    colorImages: {
      "Black": "./src/assets/img/32gb.jpg"
    }
  },
  {
    id: 10,
    name: "RAM 32GB DDR4 3600MHz",
    description: "Memoria de alto rendimiento para tareas intensivas",
    price: 100.00,
    image: "./src/assets/img/32gb.jpg",
    stock: "in-stock",
    store: "Mi pc 3",
    brand: "Corsair",
    tags: ["RAM"],
    colors: ["Black", "Red"],
    tier: "high",
    optimalMatch: ["Ryzen 5 5600X"],
    compatibility: ["Ryzen 5 5600X", "MSI B550"],
    colorImages: {
      "Black": "./src/assets/img/32gb.jpg",
      "white": "./src/assets/img/32gb blanco.jpg"
    }
  },
  {
    id: 11,
    name: "NVIDIA RTX 3060",
    description: "Tarjeta gráfica potente para juegos AAA y productividad",
    price: 300.00,
    image: "./src/assets/img/3060.jpg",
    stock: "in-stock",
    store: "Mi pc 1",
    brand: "NVIDIA",
    tags: ["GPU", "Componentes"],
    colors: ["Black", "RGB"],
    tier: "high",
    optimalMatch: ["HP Pavilion Gaming Desktop"],
    compatibility: ["Ryzen 5 5600X", "Intel Core i5 12400F"],
    colorImages: {
      "Black": "./src/assets/img/3060.jpg",
      "RGB": "./src/assets/img/3060rgb.jpeg"
    }
  },
  {
    id: 12,
    name: "AMD RX 6700XT",
    description: "GPU de alto rendimiento con 12GB GDDR6",
    price: 350.00,
    image: "./src/assets/img/6700xt.jpeg",
    stock: "low-stock",
    store: "Mi pc 2",
    brand: "AMD",
    tags: ["GPU", "Componentes"],
    colors: ["Black"],
    tier: "high",
    optimalMatch: ["Ryzen 5 5600X"],
    compatibility: ["Ryzen 5 5600X", "MSI B550"],
    colorImages: {
      "Black": "./src/assets/img/6700xt.jpeg"
    }
  }
]

export default products
