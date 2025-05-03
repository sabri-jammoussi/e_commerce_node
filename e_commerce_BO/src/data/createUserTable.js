import pool from "../config/db.js";

const createUserTable = async () => {
  const queryText = `
    CREATE TABLE IF NOT EXISTS  users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) UNIQUE NOT NULL,
    user_password VARCHAR(100) ,
    created_at TIMESTAMP DEFAULT NOW()
)
    `;
  try {
    pool.query(queryText);
    console.log("USER table created if not exist");
  } catch (error) {
    console.log("Error creating users table : ", error);
  }
};

export default createUserTable;
