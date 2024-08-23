const API_URL = "https://66c711e2732bf1b79fa5373c.mockapi.io";

//READ
export const getAllProducts = async () => {
  const res = await fetch(`${API_URL}/products`); //Request
  if (!res.ok)
    throw new Error(`Could not fetch products. Status: ${res.status}`);
  const data = await res.json(); //Responde Body in Json format
  return data;
};

//READ
export const getProductById = async (id) => {
  const res = await fetch(`${API_URL}/products/${id}`); //Request
  if (!res.ok)
    throw new Error(`Could not fetch product. Status: ${res.status}`);
  const data = await res.json(); //Responde Body in Json format
  return data;
};

//CREATE
export const createProduct = async (product) => {
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    body: JSON.stringify(product),
    headers: { "Content-Type": "application/json" },
  }); //Request
  if (!res.ok)
    throw new Error(`Failed to create products. Status: ${res.status}`);
  const data = await res.json(); //Responde Body in Json format
  return data;
};

//DELETE
export const deleteProduct = async (id) => {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });
  if (!res.ok)
    throw new Error(`Failed to delete products. Status: ${res.status}`);
  const data = await res.json(); //Responde Body in Json format
  return data;
};

//UPDATE
export const updateProduct = async (id, product) => {
  const res = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    body: JSON.stringify(product),
    headers: { "Content-Type": "application/json" },
  }); //Request
  if (!res.ok)
    throw new Error(`Failed to update products. Status: ${res.status}`);
  const data = await res.json(); //Responde Body in Json format
  return data;
};
