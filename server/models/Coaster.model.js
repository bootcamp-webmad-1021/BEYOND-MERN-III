const { Schema, model } = require("mongoose");

const coasterSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "El nombre es obligatorio"]
    },
    description: {
      type: String,
      required: [true, "La descripción es obligatoria"]
    },
    inversions: Number,
    length: Number,
    imageUrl: String,
    owner: { type: Schema.Types.ObjectId, ref: "User" }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const Coaster = model("Coaster", coasterSchema);

module.exports = Coaster;
