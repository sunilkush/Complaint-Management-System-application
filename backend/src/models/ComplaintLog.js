import mongoose from 'mongoose';
const complaintLogSchema = new mongoose.Schema({
  complaint: { type: mongoose.Schema.Types.ObjectId, ref: 'Complaint', required: true },
  actor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  action: { type: String, required: true },
  meta: { type: mongoose.Schema.Types.Mixed }
}, { timestamps: true });
export const ComplaintLog = mongoose.model('ComplaintLog', complaintLogSchema);
