import jwt from "jsonwebtoken";

const authMiddleware = {
  authentication: (req, res, next) => {
    // Kiểm tra header Authorization
    const authorizationHeader = req.headers['authorization'];

    if (!authorizationHeader) {
      return res.status(403).json({ message: "Authorization header missing" });
    }

    // Authorization: "Bearer Token"
    const authorization = authorizationHeader.split(" ");

    if (authorization.length !== 2 || authorization[0] !== "Bearer") {
      return res.status(403).json({ message: "Invalid authorization format" });
    }

    const token = authorization[1];

    // Giải mã token để lấy thông tin user
    if (token) {
      try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedToken; // Lưu thông tin user vào request

        return next(); // Tiếp tục xử lý yêu cầu
      } catch (e) {
        console.error("Token verification failed:", e);
        return res.status(401).json({ message: "Invalid token" });
      }
    } else {
      return res.status(403).json({ message: "Token not found" });
    }
  }
};

export default authMiddleware;
