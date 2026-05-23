import mongoose from 'mongoose';
import { COMPLAINT_PRIORITY, COMPLAINT_STATUS } from '../constants/enums.js';
const attachmentSchema = new mongoose.Schema({ fileName: String, path: String, mimeType: String }, { _id: false });
const complaintSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: COMPLAINT_STATUS, default: 'OPEN' },
  priority: { type: String, enum: COMPLAINT_PRIORITY, default: 'MEDIUM' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
  attachments: [attachmentSchema]
}, { timestamps: true });
export const Complaint = mongoose.model('Complaint', complaintSchema);
