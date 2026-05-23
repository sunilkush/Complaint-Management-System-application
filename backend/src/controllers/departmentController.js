import { Department } from '../models/Department.js';
import { ok } from '../utils/apiResponse.js';
export const getDepartments = async (req, res) => ok(res, await Department.find().populate('head'));
export const createDepartment = async (req, res) => ok(res, await Department.create(req.body), 'Department created', 201);
export const updateDepartment = async (req, res) => ok(res, await Department.findByIdAndUpdate(req.params.id, req.body, { new: true }), 'Department updated');
export const deleteDepartment = async (req, res) => { await Department.findByIdAndDelete(req.params.id); ok(res, null, 'Department deleted'); };
