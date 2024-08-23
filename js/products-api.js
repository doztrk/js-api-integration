const API_URL = "https://66c711e2732bf1b79fa5373c.mockapi.io";

export const getAllProducts = async () => {
  const res = await fetch(`${API_URL}/products`); //Request
  if (!res.ok)
    throw new Error(`Could not fetch products. Status: ${res.status}`);
  const data = await res.json(); //Responde Body in Json format
  return data;
};

export const createProduct = async (product) => {
  const res = await fetch(`${API_URL}/products`, {
    method: "POST",
    body: JSON.stringify(product),
    headers: { "Content-Type": "application/json" },
  }); //Request
  if (!res.ok)
    throw new Error(`Failed to save products. Status: ${res.status}`);
  const data = await res.json(); //Responde Body in Json format
  return data;
};

