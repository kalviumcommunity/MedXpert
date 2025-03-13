const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();
const port = 3000;

require("dotenv").config();

app.get("/api", async (req, res) => {
  try {
    // Get all users from database
    const users = await User.find({});

    // Process the data
    const processedData = users.map((person) => ({
      id: person._id,
      name: person.name,
      age: person.age,
      occupation: person.occupation,
      fullName: `${person.name} (${person.occupation})`,
      isAdult: person.age >= 18,
    }));

    // Filter adults
    const adults = processedData.filter((person) => person.isAdult);

    // Simulate sorting data
    const sortedAdults = adults.sort((a, b) => a.age - b.age);

    // Simulate paginating data
    const pageSize = 10;
    const page = parseInt(req.query.page) || 1;
    const paginatedData = sortedAdults.slice(
      (page - 1) * pageSize,
      page * pageSize
    );

    // Simulate response
    res.json({
      page,
      pageSize,
      total: sortedAdults.length,
      data: paginatedData,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
});

const dbURI = process.env.MONGO_URI;

mongoose
  .connect(dbURI)
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
