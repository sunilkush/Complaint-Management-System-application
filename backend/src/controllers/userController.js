import { User } from '../models/User.js';
import { buildQuery } from '../utils/queryBuilder.js';
import { ok } from '../utils/apiResponse.js';

export const getUsers = async (req, res) => {
  const { mongo, page, limit, sort } = buildQuery(req.query);
  const [items, total] = await Promise.all([
    User.find(mongo).select('-password').populate('department').sort(sort).skip((page - 1) * limit).limit(limit),
    User.countDocuments(mongo)
  ]);
  ok(res, { items, page, limit, total });
};
export const createUser = async (req, res) => ok(res, await User.create(req.body), 'User created', 201);
export const updateUser = async (req, res) => ok(res, await User.findByIdAndUpdate(req.params.id, req.body, { new: true }), 'User updated');
export const deleteUser = async (req, res) => { await User.findByIdAndDelete(req.params.id); ok(res, null, 'User deleted'); };
