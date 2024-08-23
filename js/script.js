import { createProduct, getAllProducts } from "./products-api.js";

const frmProduct = document.getElementById("frmProduct");
const txtTitle = document.getElementById("txtTitle");
const txtPrice = document.getElementById("txtPrice");
const txtImage = document.getElementById("txtImage");
const txtCategory = document.getElementById("txtCategory");
const txtDesc = document.getElementById("txtDesc");


const renderProductList = (products) => {
  let strProducts = "";
  products.forEach((item, index) => {
    strProducts += `
    <tr>
        <th scope="row">${index + 1}</th>
        <td><img src="${item.image}" class="img-fluid" width="100px"></td>
        <td>${item.title}</td>
        <td>${item.price}</td>
    </tr>`;
  });

  document.querySelector("#tblProducts tbody").innerHTML = strProducts;
};

/* const products = await getAllProducts();
renderProductList(products); */

//OR

 const init = async () => {
  const products = await getAllProducts();
  renderProductList(products);
};
init(); 

frmProduct.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = txtTitle.value;
  const price = txtPrice.value;
  const image = txtImage.value;
  const category = txtCategory.value;
  const desc = txtDesc.value;

  const product = {
    title,
    price,
    image,
    category,
    desc,
  };
  
  await createProduct(product);
  
  init();

  frmProduct.reset();

});


