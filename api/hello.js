module.exports = (req, res) => {
  res.status(200).json({ ok: true, message: "PayPulse API alive", time: new Date().toISOString() });
};
