export let products = [
  {
    id: "1",
    title: "natasha",
    img: "https://www.buhozon.com/recursos/imagenes/thumbnails/guitarist-539981_1920_1000x800.jpg",
    price: 100,
    category: "vestimenta",
    description: "la moda",
    stock: 10,
  },
  {
    id: "2",
    title: "natasha",
    img: "url-img",
    price: 100,
    category: "accesorios",
    description: "la moda",
    stock: 100,
  },
  {
    id: "3",
    title: "natasha",
    img: "url-img",
    price: 100,
    category: "media",
    description: "la moda",
    stock: 100,
  },
  {
    id: "4",
    title: "natasha",
    img: "url-img",
    price: 100,
    category: "moda",
    description: "la moda",
    stock: 100,
  },
  {
    id: "5",
    title: "natasha",
    img: "url-img",
    price: 100,
    category: "moda",
    description: "la moda",
    stock: 100,
  },
  {
    id: "6",
    img: "url-img",
    price: 100,
    category: "moda",
    description: "la moda",
    stock: 100,
  },
  {
    id: "7",
    title: "natasha",
    img: "url-img",
    price: 100,
    category: "moda",
    description: "la moda",
    stock: 100,
  },
  {
    id: "8",
    img: "url-img",
    price: 100,
    category: "moda",
    description: "la moda",
    stock: 100,
  },
  {
    id: "9",
    title: "natasha",
    img: "url-img",
    price: 100,
    category: "moda",
    description: "la moda",
    stock: 100,
  },
  {
    id: "10",
    title: "natasha",
    img: "url-img",
    price: 100,
    category: "moda",
    description: "la moda",
    stock: 100,
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 600);
    } else {
      reject("No se pudieron cargar productos");
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`no se encuentra el producto de if ${id}`);
        }
      }, 600);
    } else {
      reject("no hay productos");
    }
  });
};
