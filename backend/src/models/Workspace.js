import mongoose from "mongoose";
import { workspaceInviteCodeGenerator } from "../lib/generator.js";

/**
 * @openapi
 * components:
 *   schemas:
 *     Workspace:
 *       type: object
 *       required:
 *         - name
 *         - owner
 *       properties:
 *         _id:
 *           type: mongoose.Types.ObjectId
 *           description: The auto-generated id of the workspace (MongoDB ObjectId)
 *         name:
 *           type: string
 *           example: "Rato Guras Technology"
 *         description:
 *           type: string
 *           maxLenth: 200
 *           default: "A blank canvas has the most potential"
 *         owner:
 *           type: mongoose.Types.ObjectId
 *           description: The one who owns the workspace
 *         members:
 *           type: array of mongoose.Types.ObjectId
 *           description: All the members who have joined the workspace
 *         inviteCode:
 *           type: String
 *           unique: true
 *           description: Unique slug code for joining the workspace
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */
const workspaceSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
      maxLength: 200,
      default: "A blank canvas has the most potential",
    },
    owner: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    members: [
      {
        type: mongoose.Types.ObjectId,
        ref: "User",
      },
    ],
    //  channels: [  To be added later
    //    {
    //      type: mongoose.Types.ObjectId,
    //        ref: "ToDoChannel"
    //    },
    //  ],
    inviteCode: {
      type: String,
      unique: true,
      default: workspaceInviteCodeGenerator,
    },
  },
  { timestamps: true }
);

const Workspace = mongoose.model("Workspace", workspaceSchema);

export default Workspace;
