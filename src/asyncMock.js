export let products = [
  {
    id: "1",
    name: "algo",
    img: "url-img",
    price: 100,
    category: "moda",
    description: "la moda",
    stock: 100,
  },
  {
    id: "1",
    name: "algo",
    img: "url-img",
    price: 100,
    category: "moda",
    description: "la moda",
    stock: 100,
  },
  {
    id: "1",
    name: "algo",
    img: "url-img",
    price: 100,
    category: "moda",
    description: "la moda",
    stock: 100,
  },
  {
    id: "1",
    name: "algo",
    img: "url-img",
    price: 100,
    category: "moda",
    description: "la moda",
    stock: 100,
  },
  {
    id: "1",
    name: "algo",
    img: "url-img",
    price: 100,
    category: "moda",
    description: "la moda",
    stock: 100,
  },
  {
    id: "1",
    name: "algo",
    img: "url-img",
    price: 100,
    category: "moda",
    description: "la moda",
    stock: 100,
  },
  {
    id: "1",
    name: "algo",
    img: "url-img",
    price: 100,
    category: "moda",
    description: "la moda",
    stock: 100,
  },
  {
    id: "1",
    name: "algo",
    img: "url-img",
    price: 100,
    category: "moda",
    description: "la moda",
    stock: 100,
  },
  {
    id: "1",
    name: "algo",
    img: "url-img",
    price: 100,
    category: "moda",
    description: "la moda",
    stock: 100,
  },
  {
    id: "1",
    name: "algo",
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
      }, 2000);
    } else {
      reject("No se pudieron cargar productos");
    }
  });
};

export const getProduct = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      const item = products.find((product) => product.id === id);

      setTimeout(() => {
        if (item) {
          resolve(item);
        } else {
          reject(`no se encuentra el producto de if ${id}`);
        }
      }, 2000);
    } else {
      reject("no hay productos");
    }
  });
};
