import pool from "../config/db.js";

export const getAllusersService = async () => {
  const result = await pool.query("SELECT * FROM users");
  return result.rows;
};

export const getUserByIdService = async (id) => {
  const result = await pool.query("SELECT * FROM users where id=$1", [id]);
  return result.rows[0];
};

export const createUsersService = async (email, password) => {
  const result = await pool.query(
    "INSERT INTO users (email, user_password) VALUES ($1 , $2) RETURNING *",
    [email, password]
  );
  return result.rows[0];
};

export const updateUsersService = async (id, email, password) => {
  const result = await pool.query(
    "UPDATE users SET email=$1 ,user_password=$2 where id=$3 RETURNING *",
    [email, password, id]
  );
  return result.rows[0];
};

export const deleteUsersService = async (id) => {
  const result = await pool.query(
    "DELETE FROM users WHERE id = $1 RETURNING *",
    [id]
  );
  return result.rows[0];
};
