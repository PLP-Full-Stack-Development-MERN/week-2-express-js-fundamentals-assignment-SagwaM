// Simulated data storage
let users = [];

// Controller Functions
const getUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) res.json(user);
  else res.status(404).json({ message: "User not found" });
};

const createUser = (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
};

const updateUser = (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex !== -1) {
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.json(users[userIndex]);
  } else res.status(404).json({ message: "User not found" });
};

const deleteUser = (req, res) => {
  users = users.filter(u => u.id !== parseInt(req.params.id));
  res.status(204).end();
};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
