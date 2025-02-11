const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const logger = require("./middleware/logger");

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

// Global Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
