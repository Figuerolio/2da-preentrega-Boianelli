export let products = [
  {
    title: "AC/DC T-Shirt",
    img: "https://kadakmerch.com/cdn/shop/products/Website--Volatge.jpg?v=1679746770&width=533",
    price: 1000,
    category: "vestimenta",
    description: "Remera 100% algodon",
    stock: 3,
  },
  {
    title: "DIO T-Shirt",
    img: "https://merchbar.imgix.net/product/194/7952/7554263351554/PSg7_qe0PH12508.jpg?q=40&auto=compress,format&ar=1:1&w=1400",
    price: 1200,
    category: "vestimenta",
    description: "Remera de alta calidad (70% algodon 30% sintetico)",
    stock: 10,
  },
  {
    title: "Black Sabbath T-Shirt",
    img: "https://www.atakt.com/FotoCache/76/1000x1000/t-shirt-black-sabbath-the-end-world-tour-23480.jpg",
    price: 1100,
    category: "vestimenta",
    description: "Remera del tour de THE END",
    stock: 10,
  },
  {
    title: "Black Sabbath Pin",
    img: "https://m.media-amazon.com/images/I/41+ErXyRMGL._AC_SY580_.jpg",
    price: 1200,
    category: "accesorios",
    description: "Pin de metal para decorar tu",
    stock: 10,
  },
  {
    title: "Colleción Discográfica Definitiva",
    img: "https://www.rafabasa.com/wp-content/uploads/imagenes/web/megadeth/portadas/imagen_picture2014.jpg",
    price: 10000,
    category: "media",
    description: "Discografia completa de MEGADETH de los años 80",
    stock: 100,
  },
  {
    title:"Launch Box MEGADETH",
    img: "https://ae01.alicdn.com/kf/S415dfced095c4a7297c8c6b55e4ded54F.jpg_640x640Q90.jpg_.webp",
    price: 20000,
    category: "accesorios",
    description: "Lonchera Oficial de MEGADETH",
    stock: 2,
  },
  {
    title: "Holy Diver:Super Deluxe Edition",
    img: "https://rockangels.com/dio-holy-diver-super-deluxe-edition-4-cd-2-lp-2022/unnamed-14-7/",
    price: 20400,
    category: "media",
    description: "Disco de vinilo exclusivo de DIO",
    stock: 5,
  },
  {
    title:"Metallica Leather Wriststrap",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPT2GOEXQSz3nBXXy3w7INfPDH5kFnVluaTsghoOqG37Jx8yzEYSh0xzgKBT4K_Gta1U&usqp=CAU",
    price: 1500,
    category: "accesorios",
    description: "Pulsera de cuero original de Metallica",
    stock: 100,
  },
  {
    title: "Funko POP Ronnie James DIO",
    img: "https://www.metalshop.us/images/produkty/x_fk59485_a.jpg",
    price: 3000,
    category: "media",
    description: "Figura coleccionable del legendario Ronnie James Dio",
    stock: 10,
  },
  {
    title: "Metallica T-Shirt",
    img: "https://i.ebayimg.com/images/g/wKUAAOSwbxBimQ-T/s-l1200.webp",
    price: 3000,
    category: "vestimenta",
    description: "Remera 100% algodon de Metallica",
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
