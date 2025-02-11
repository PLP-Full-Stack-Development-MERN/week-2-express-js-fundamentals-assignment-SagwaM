// Simulated data storage
let products = [];

// Controller Functions
const getProducts = (req, res) => {
  res.json(products);
};

const getProductById = (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) res.json(product);
  else res.status(404).json({ message: "Product not found" });
};

const createProduct = (req, res) => {
  const newProduct = { id: Date.now(), ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

const updateProduct = (req, res) => {
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productIndex !== -1) {
    products[productIndex] = { ...products[productIndex], ...req.body };
    res.json(products[productIndex]);
  } else res.status(404).json({ message: "Product not found" });
};

const deleteProduct = (req, res) => {
  products = products.filter(p => p.id !== parseInt(req.params.id));
  res.status(204).end();
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
