export const auth = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header) return res.status(401).json({ error: "Unathorized!" });

  const token = header.split(" ")[1];
  jwt.verify(token, "JEFPJF127344923H29384YD9233442DH", (error, decoded) => {
    if (error) {
      return res
        .status(401)
        .json({ error: "session expired, or invalid token" });
    }
    req.user = decoded;
  });

  next();
};

export const adminAuth = (req, res, next) => {
  if (req.user.role !== "ADMIN") {
    return res
      .status(401)
      .json({ error: `You are not authorized to access this endpoint` });
  }

  next();
};
