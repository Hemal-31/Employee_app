const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Check MySQL connection
db.connect((err) => {

    if (err) {
        console.log("Database connection failed");
    } else {
        console.log("MySQL connected");
    }

});


// Home
app.get("/", (req, res) => {

    res.send("Employee backend is running");

});


// GET - All employees
app.get("/employee", (req, res) => {

    db.query("SELECT * FROM employees", (err, result) => {

        if (err) {
            return res.status(500).json({
                message: "Database error"
            });
        }

        res.json(result);

    });

});


// GET - Employee by ID
app.get("/employee/:id", (req, res) => {

    const id = Number(req.params.id);

    db.query(
        "SELECT * FROM employees WHERE id = ?",
        [id],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database error"
                });
            }

            res.json(result);

        }
    );

});


// POST - Add employee
app.post("/employee", (req, res) => {

    const id = Number(req.body.id);
    const name = req.body.name;
    const age = Number(req.body.age);

    db.query(
        "INSERT INTO employees (id, name, age) VALUES (?, ?, ?)",
        [id, name, age],
        (err, result) => {

            if (err) {
                console.log(err);

                return res.status(500).json({
                    message: "Database error",
                    error: err.message
                });
            }

            res.json({
                message: "Employee added successfully"
            });

        }
    );
});


// PUT - Update employee
app.put("/employee/:id", (req, res) => {

    const id = Number(req.params.id);

    const name = req.body.name;
    const age = req.body.age;

    db.query(
        "UPDATE employees SET name = ?, age = ? WHERE id = ?",
        [name, age, id],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database error"
                });
            }

            res.json({
                message: "Employee updated successfully"
            });

        }
    );

});


// DELETE - Delete employee
app.delete("/employee/:id", (req, res) => {

    const id = Number(req.params.id);

    db.query(
        "DELETE FROM employees WHERE id = ?",
        [id],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database error"
                });
            }

            res.json({
                message: "Employee deleted successfully"
            });

        }
    );

});

//Update Data
app.put("/employee/:id", (req, res) => {

    const id = Number(req.params.id);
    const name = req.body.name;
    const age = Number(req.body.age);

    db.query(
        "UPDATE employees SET name = ?, age = ? WHERE id = ?",
        [name, age, id],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Database error"
                });
            }

            res.json({
                message: "Employee updated successfully"
            });

        }
    );

});


// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});