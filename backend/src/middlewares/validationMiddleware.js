export const validate = (schema) => (req, res, next) => {
  const parsed = schema.safeParse(req.body);
  if (!parsed.success) return res.status(422).json({ success: false, message: 'Validation failed', errors: parsed.error.flatten() });
  req.body = parsed.data;
  next();
};
