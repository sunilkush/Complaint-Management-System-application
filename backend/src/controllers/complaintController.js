import { Complaint } from '../models/Complaint.js';
import { ComplaintLog } from '../models/ComplaintLog.js';
import { ok } from '../utils/apiResponse.js';
import { buildQuery } from '../utils/queryBuilder.js';

const logAction = (complaint, actor, action, meta = {}) => ComplaintLog.create({ complaint, actor, action, meta });
export const getComplaints = async (req, res) => {
  const { mongo, page, limit, sort } = buildQuery(req.query);
  const [items, total] = await Promise.all([
    Complaint.find(mongo).populate('createdBy assignedTo department').sort(sort).skip((page - 1) * limit).limit(limit),
    Complaint.countDocuments(mongo)
  ]);
  ok(res, { items, page, limit, total });
};
export const getComplaintById = async (req, res) => ok(res, await Complaint.findById(req.params.id).populate('createdBy assignedTo department'));
export const createComplaint = async (req, res) => { const complaint = await Complaint.create({ ...req.body, createdBy: req.user._id }); await logAction(complaint._id, req.user._id, 'CREATED'); ok(res, complaint, 'Complaint created', 201); };
export const updateComplaint = async (req, res) => { const complaint = await Complaint.findByIdAndUpdate(req.params.id, req.body, { new: true }); await logAction(complaint._id, req.user._id, 'UPDATED', req.body); ok(res, complaint, 'Complaint updated'); };
export const deleteComplaint = async (req, res) => { await Complaint.findByIdAndDelete(req.params.id); ok(res, null, 'Complaint deleted'); };
export const updateStatus = async (req, res) => { const complaint = await Complaint.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true }); await logAction(complaint._id, req.user._id, 'STATUS_CHANGED', { status: req.body.status }); ok(res, complaint, 'Status updated'); };
export const assignComplaint = async (req, res) => { const complaint = await Complaint.findByIdAndUpdate(req.params.id, { assignedTo: req.body.assignedTo }, { new: true }); await logAction(complaint._id, req.user._id, 'ASSIGNED', { assignedTo: req.body.assignedTo }); ok(res, complaint, 'Complaint assigned'); };
