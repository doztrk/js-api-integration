import {
  createProduct,
  getAllProducts,
  deleteProduct,
  getProductById,
  updateProduct,
} from "./products-api.js";

const frmProduct = document.getElementById("frmProduct");
const txtTitle = document.getElementById("txtTitle");
const txtPrice = document.getElementById("txtPrice");
const txtImage = document.getElementById("txtImage");
const txtCategory = document.getElementById("txtCategory");
const txtDesc = document.getElementById("txtDesc");
const tbody = document.querySelector("#tblProducts tbody");
const hdnId = document.getElementById("hdnId");

const renderProductList = (products) => {
  let strProducts = "";
  products.forEach((item, index) => {
    strProducts += `
    <tr data-id="${item.id}">
        <th scope="row">${index + 1}</th>
        <td><img src="${item.image}" class="img-fluid" width="100px"></td>
        <td>${item.tixtle}</td>
        <td>${item.price}</td>
        <td>
              <button class="btn btn-link btn-edit text-decoration-none">✏️</button>
              <button class="btn btn-link btn-delete text-decoration-none">🗑️</button>
         </td>
    </tr>`;
  });

  tbody.innerHTML = strProducts;
};

/* const products = await getAllProducts();
renderProductList(products); */

//OR

const init = async () => {
  const products = await getAllProducts();
  renderProductList(products);
};

const editProduct = async (id) => {
  const product = await getProductById(id);
  const { title, price, image, category, description } = product;
  txtTitle.value = title;
  txtPrice.value = price;
  txtImage.value = image;
  txtCategory.value = category;
  txtDesc.value = description;
  hdnId.value = id;
};

frmProduct.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = txtTitle.value;
  const price = txtPrice.value;
  const image = txtImage.value;
  const category = txtCategory.value;
  const desc = txtDesc.value;
  const id = hdnId.value;
  const formType = frmProduct.dataset.type;

  const product = {
    title,
    price,
    image,
    category,
    desc,
  };

  if (formType === "update") {
    await updateProduct(id, product);
    alert("Product updated successfully");
  } else if (formType === "create") {
    await createProduct(product);
    alert("Product created successfully");
  }

  //reset form
  frmProduct.reset();
  frmProduct.dataset.type = "create";

  init();
});

tbody.addEventListener("click", async (e) => {
  const id = e.target.closest("tr").dataset.id;

  if (e.target.classList.contains("btn-delete")) {
    const res = confirm("Are you sure?");
    if (!res) return;

    await deleteProduct(id);
    alert("Product deleted successfully");
    init();
  } else if (e.target.classList.contains("btn-edit")) {
    await editProduct(id);
    frmProduct.dataset.type = "update";
    window.scrollTo(0, 0);
  }
});

init();
