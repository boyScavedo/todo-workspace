import mongoose from "mongoose";

/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - passwordSalt
 *         - passwordHash
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the user (MongoDB ObjectId)
 *         name:
 *           type: string
 *           example: "John Doe"
 *         email:
 *           type: string
 *           format: email
 *           example: "john@example.com"
 *         passwordSalt:
 *           type: string
 *           description: The auto-generated password hashing salt (bcrypt)
 *         passwordHash:
 *           type: string
 *           description: The auto-generated password hash using given password and salt (bcrypt)
 *         membership:
 *           type: number
 *           description: Level of membership
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
const userSchema = mongoose.Schema(
  {
    name: { type: String, default: "" },
    email: { type: String, required: true, unique: true },
    passwordSalt: { type: String, required: true },
    passwordHash: { type: String, required: true },
    membership: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
