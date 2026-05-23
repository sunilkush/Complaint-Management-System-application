import mongoose from 'mongoose';
const roleSchema = new mongoose.Schema({ name: { type: String, unique: true }, permissions: [String] }, { timestamps: true });
export const Role = mongoose.model('Role', roleSchema);
