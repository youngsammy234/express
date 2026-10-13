import express from "express";


import { sequelize } from "./config/sequelize.js";
import { env } from "./config/env.js";

const app = express();
app.use(express.json());


// const User = sequelize.define(
//   'User',
//   {
//     // Model attributes are defined here
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//      allowNull: false
//     },
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       unique: true,
//       primaryKey: true
//     },
//     email: {
//       type:     DataTypes.STRING,
//       allowNull: false,
//       unique: true
//     },
//     age: {
//       type: DataTypes.INTEGER
//     },
//     password:{
//       type: DataTypes.STRING
//     },
//     role: {
//       type: DataTypes.ENUM('USER', 'ADMIN'),
//       defaultValue: 'USER'
//     }
//   },
//   {
//     // Other model options go here
//   },
// );






// const Product = sequelize.define(
//   "product",
//   {
//     // Model attributes are defined here

//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       unique: true,
//       primaryKey: true,
//     },

//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },

//     category: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },

//     price: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },

//     stock: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//   },

//   {
//     // Other model options go here
//   },
// );


// const users = [
//   {
//     id: 1,
//     firstName: "John",
//     lastName: "Doe",
//     email: "john.doe@example.com",
//     age: 28,
//     role: "user",
//   },
//   {
//     id: 2,
//     firstName: "Jane",
//     lastName: "Smith",
//     email: "jane.smith@example.com",
//     age: 32,
//     role: "admin",
//   },
//   {
//     id: 3,
//     firstName: "Michael",
//     lastName: "Brown",
//     email: "michael.brown@example.com",
//     age: 24,
//     role: "user",
//   },
//   {
//     id: 4,
//     firstName: "Sarah",
//     lastName: "Johnson",
//     email: "sarah.johnson@example.com",
//     age: 29,
//     role: "user",
//   },
//   {
//     id: 5,
//     firstName: "David",
//     lastName: "Wilson",
//     email: "david.wilson@example.com",
//     age: 35,
//     role: "admin",
//   },
// ];


// const products = [
//   // Electronics
//   {
//     id: 1,
//     name: "Wireless Mouse",
//     category: "Electronics",
//     price: 25.99,
//     stock: 120,
//     rating: 4.5,
//   },
//   {
//     id: 2,
//     name: "Mechanical Keyboard",
//     category: "Electronics",
//     price: 89.99,
//     stock: 60,
//     rating: 4.7,
//   },
//   {
//     id: 3,
//     name: "Bluetooth Speaker",
//     category: "Electronics",
//     price: 55.99,
//     stock: 80,
//     rating: 4.6,
//   },

//   // Fashion
//   {
//     id: 4,
//     name: "Running Shoes",
//     category: "Fashion",
//     price: 75.5,
//     stock: 45,
//     rating: 4.3,
//   },
//   {
//     id: 5,
//     name: "Denim Jacket",
//     category: "Fashion",
//     price: 64.99,
//     stock: 30,
//     rating: 4.4,
//   },
//   {
//     id: 6,
//     name: "Leather Wallet",
//     category: "Fashion",
//     price: 39.99,
//     stock: 75,
//     rating: 4.5,
//   },

//   // Home & Kitchen
//   {
//     id: 7,
//     name: "Water Bottle",
//     category: "Home & Kitchen",
//     price: 15.0,
//     stock: 200,
//     rating: 4.2,
//   },
//   {
//     id: 8,
//     name: "Air Fryer",
//     category: "Home & Kitchen",
//     price: 129.99,
//     stock: 25,
//     rating: 4.8,
//   },
//   {
//     id: 9,
//     name: "Coffee Maker",
//     category: "Home & Kitchen",
//     price: 79.99,
//     stock: 40,
//     rating: 4.4,
//   },

//   // Books
//   {
//     id: 10,
//     name: "Clean Code",
//     category: "Books",
//     price: 34.99,
//     stock: 90,
//     rating: 4.9,
//   },
//   {
//     id: 11,
//     name: "Atomic Habits",
//     category: "Books",
//     price: 24.99,
//     stock: 110,
//     rating: 4.8,
//   },

//   // Sports
//   {
//     id: 12,
//     name: "Yoga Mat",
//     category: "Sports",
//     price: 29.99,
//     stock: 70,
//     rating: 4.5,
//   },
//   {
//     id: 13,
//     name: "Dumbbell Set",
//     category: "Sports",
//     price: 149.99,
//     stock: 20,
//     rating: 4.7,
//   },

//   // Beauty
//   {
//     id: 14,
//     name: "Hair Dryer",
//     category: "Beauty",
//     price: 49.99,
//     stock: 55,
//     rating: 4.4,
//   },
//   {
//     id: 15,
//     name: "Face Cleanser",
//     category: "Beauty",
//     price: 18.99,
//     stock: 95,
//     rating: 4.6,
//   },

//   // Toys
//   {
//     id: 16,
//     name: "LEGO Building Set",
//     category: "Toys",
//     price: 59.99,
//     stock: 35,
//     rating: 4.9,
//   },
//   {
//     id: 17,
//     name: "Remote Control Car",
//     category: "Toys",
//     price: 44.99,
//     stock: 50,
//     rating: 4.5,
//   },

//   // Grocery
//   {
//     id: 18,
//     name: "Organic Honey",
//     category: "Grocery",
//     price: 12.99,
//     stock: 140,
//     rating: 4.7,
//   },
//   {
//     id: 19,
//     name: "Premium Coffee Beans",
//     category: "Grocery",
//     price: 21.99,
//     stock: 85,
//     rating: 4.8,
//   },

//   // Office Supplies
//   {
//     id: 20,
//     name: "Notebook",
//     category: "Office Supplies",
//     price: 6.99,
//     stock: 300,
//     rating: 4.3,
//   },
//   {
//     id: 21,
//     name: "Desk Lamp",
//     category: "Office Supplies",
//     price: 32.99,
//     stock: 45,
//     rating: 4.6,
//   },

//   // Automotive
//   {
//     id: 22,
//     name: "Car Phone Mount",
//     category: "Automotive",
//     price: 19.99,
//     stock: 65,
//     rating: 4.4,
//   },
//   {
//     id: 23,
//     name: "Portable Tire Inflator",
//     category: "Automotive",
//     price: 54.99,
//     stock: 30,
//     rating: 4.7,
//   },

//   // Pet Supplies
//   {
//     id: 24,
//     name: "Dog Leash",
//     category: "Pet Supplies",
//     price: 16.99,
//     stock: 100,
//     rating: 4.5,
//   },
//   {
//     id: 25,
//     name: "Cat Scratching Post",
//     category: "Pet Supplies",
//     price: 42.99,
//     stock: 25,
//     rating: 4.6,
//   },
// ];

// app.get("/", (req, res) => {
//   return res.send("This is the landing page of this website");
// });



// Add User
// app.post("/users/register",async (req, res) => {
//   const { firstName, lastName, email,  age, password } = req.body;

//   if (!firstName || !lastName || !email  || !age  || !password) {
//     return res.status(400).json({
//       error: "firstName, lastName,  email,   age, or password is required",
//     });
//   }

//   // req.body.id = users.length + 1;
//   const UserExist = await User.findOne({where: {email}})

//   if (UserExist) return res.status(400).json({error: 'account exist'})

//     req.body.password = await hashpassword(password);

//   // users.push(req.body);
//   const createdUser = await User.create(req.body);

//   return res.status(201).json({
//     message: "User added successfully",
//     createdUser,
//   });
// });

// app.post("/users/login", async (req, res) => {
//   const { email, password } = req.body;

//   if (!email || !password) {
//     return res.status(400).json({
//       error: "email and password are required",
//     });
//   }

//   // req.body.id = users.length + 1;
//   const userExists = await User.findOne({ where: { email } });

//   if (!userExists)
//     return res
//       .status(404)
//       .json({ error: `account not found. kindly create an account to login` });

//   const passwordMatch = await comparePassword(password, userExists.password);

//   if (!passwordMatch)
//     return res.status(401).json({ error: `Invalid credentials` });
 
//   const accessToken = aToken({id: userExists.id, email:userExists.email, role:userExists.role})

//   return res.status(201).json({
//     message: "User logged in successfully",
//     userExists,
//     accessToken
//   });
// });

// app.get("/test", auth, adminAuth, (req, res) => {
//   const LoggedInUser = req.user;
//   return res 
//    .status(200)
//    .json({ message: "verification succcessful", LoggedInUser });
// });

// Edit User
// app.patch("/users/edit/:id", async (req, res) => {
//   const { firstName, lastName, age } = req.body;
//   const id = req.params.id;

//   // const user = users.find((user) => user.id === parseInt(id));
//   const user = await User.findByPk(id);

//   if (!user) {
//     return res.status(404).json({
//       message: `No user found with id: ${id}`,
//     });
//   }

//   if (firstName) await User.update({firstName}, {where: {id}});
//   if (lastName)  await User.update({ lastName }, { where: { id } });
//   if (age)  await User.update({ age }, { where: { id } });

//   const updatedUser = await User.findByPk(id);

//   return res.status(200).json({
//     message: "User updated successfully",
//     updatedUser,
//   });

// })

// Delete User
// app.delete("/users/delete/:sam", async (req, res) => {
//   // grab the users id from the req.params object
//   const id = req.params.sam;

//  // check if users exsists with that id
//   // const usersExixts = users.find((users) => users.id === parseInt(id));
//     const userExists = await User.findByPk(id);

//  // return error if users is not found
//   if (!userExists)
//     return res.status(404).json({ error: `users not found with id: ${id}` });

//    // delete users if found
//   // const usersLeft = users.filter(
//   //   (users) => users.id !== parseInt(id),
//   // );

//   await User.destroy({where: {id}});

//   // return users left after deletion
//   return res
//     .status(200)
//     .json({ message: `user deleted successfully` });
// });
  

// app.get("/users/all", async (req, res) => {
//   const { firstName, email } = req.query;

//   if (firstName) {
//     // const foundUser = users.filter((user) => user.firstName === name);
//     const foundUser = await User.findAll({ where: { firstName } });
//     if (foundUser.length === 0) {
//       return res.status(404).json({
//         message: `No users found with name: ${firstName}`,
//       });
//     }

//     return res.status(200).json({
//       foundUser,
//     });
//   } else if (email) {
//     // const foundUser = users.find((user) => user.email === email);
//     const foundUser = await User.findOne({ where: { email } });

//     if (!foundUser) {
//       return res.status(404).json({
//         message: `No user found with email: ${email}`,
//       });
//     }

//     return res.status(200).json({
//       foundUser,
//     });
//   }

//   const alUsers = await User.findAll();

//   return res.status(200).json({
//     alUsers,
//   });
// });

// app.get("/products/all", async (req, res) => {
//   const { category, name } = req.query;

//   try {
//     if (category) {
//       const foundproduct = await Product.findAll({
//         where: { category },
//       });

//       if (foundproduct.length === 0) {
//         return res.status(404).json({
//           message: `No product found in category: ${category}`,
//         });
//       }

//       return res.status(200).json({
//         foundproduct,
//       });
//     }

//     if (name) {
//       const FoundProduct = await Product.findAll({
//         where: { name },
//       });

//       if (FoundProduct.length === 0) {
//         return res.status(404).json({
//           message: `No product found with name: ${name}`,
//         });
//       }

//       return res.status(200).json({
//         FoundProduct,
//       });
//     }

//     const products = await Product.findAll();

//     return res.status(200).json({
//       products,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       error: error.message,
//     });
//   }
// });


// app.post("/products/add", async (req, res) => {
//   const { name, category, price, stock } = req.body;

//   if (!name || !category || price === undefined || stock === undefined) {
//     return res.status(400).json({
//       error: "name, category, price, or stock is required",
//     });
//   }

//   const ProductExist = await Product.findOne({
//     where: { name }
//   });

//   if (ProductExist) {
//     return res.status(400).json({
//       error: "Product already exists"
//     });
//   }

//   const createdProduct = await Product.create(req.body);

//   return res.status(201).json({
//     message: "Product added successfully",
//     createdProduct,
//   });
// });


// app.delete("/products/delete/:peter", (req, res) => {
//   // grab the produt id from the req.params object
//   const id = req.params.peter;

//   // check if product exists with that id
//   const productExixts = products.find((product) => product.id === parseInt(id));

//   // return error if product is not found
//   if (!productExixts)
//     return res.status(404).json({ error: `product not found with id: ${id}` });

//   // delete product if found
//   const productsLeft = products.filter(
//     (product) => product.id !== parseInt(id),
//   );

//   // return products left after deletion
//   return res
//     .status(200)
//     .json({ message: `product deleted successfully`, productsLeft });
// });

app.listen(env.port, async () => {
  console.log(`server running on http://localhost:4000`);
  try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
});

console.log(env.db_uri);

/*
GET: fetches data from the server
POST: sends data to the server 
PUT: edit records in the database
PATCH: edit partial records in the database
DELETE: delete records from the databse*/
