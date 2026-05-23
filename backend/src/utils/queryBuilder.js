export const buildQuery = (query) => {
  const { page = 1, limit = 10, search, sort = '-createdAt', ...filters } = query;
  const mongo = { ...filters };
  if (search) mongo.$or = [{ title: { $regex: search, $options: 'i' } }, { name: { $regex: search, $options: 'i' } }, { email: { $regex: search, $options: 'i' } }];
  return { mongo, page: Number(page), limit: Number(limit), sort };
};
