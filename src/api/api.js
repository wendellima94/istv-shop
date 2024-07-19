
export const products = [
  {
    id: 1,
    name: "Produto 1",
    description: "Descrição do produto 1.",
    price: 199.99,
    images: ["products/Colágeno.png", "products/Emagrecedor.png"],
  },
  {
    id: 2,
    name: "Produto 2",
    description: "Descrição do produto 2.",
    price: 299.99,
    images: ["products/Estimulante.png", "products/Melatonina.png"],
  },
  {
    id: 3,
    name: "Produto 3",
    description: "Descrição do produto 2.",
    price: 399.99,
    images: ["products/Multi.png", "products/Reg Insulina.png"],
  },
  {
    id: 4,
    name: "Produto 4",
    description: "Descrição do produto 2.",
    price: 499.99,
    images: ["products/Ton Capilar.png", "products/Reg Insulina.png"],
  },
  {
    id: 5,
    name: "Produto 5",
    description: "Descrição do produto 2.",
    price: 599.99,
    images: ["products/Colágeno.png", "products/Emagrecedor.png"],
  },
];

export const getProducts = async () => {
  try {
    const response = await instance.get("/api/v1/product/");
    const products = response.data.products.map((product) => ({
      id: product._id,
      name: product.name,
      description: product.description,
      price: product.price,
      file: product.file,
    }));
    return products; // Retorna os dados da resposta formatados como seu array 'products'
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    throw error; // Lança o erro para ser tratado onde a função for chamada
  }
};
