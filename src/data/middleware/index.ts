import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const Middleware = {
  CheckLogin: (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.headers;
    if (token) {
      const accesstoken: string = token.toString().split(" ")[1];
      jwt.verify(
        accesstoken,
        process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY as string,
        async (err: any, user: any) => {
          if (err) {
            return res.status(403).json({ error: "Token không hợp lệ!" });
          } else {
            next();
          }
        }
      );
    } else {
      return res.status(401).json({ error: "Bạn chưa đăng nhập!" });
    }
  },

  CheckAdmin: (req: Request, res: Response, next: NextFunction) => {
    const { token } = req.headers;
    if (token) {
      const accesstoken = token.toString().split(" ")[1];
      jwt.verify(
        accesstoken,
        process.env.NEXT_PUBLIC_ACCESS_TOKEN_KEY as string,
        async (err: any, user: any) => {
          if (err) {
            return res.status(403).json({ error: "Token không hợp lệ!" });
          } else {
            if (user.admin) {
              next();
            } else {
              return res
                .status(401)
                .json({ error: "Không có quyền truy câp!" });
            }
          }
        }
      );
    } else {
      return res.status(401).json({ error: "Bạn chưa đăng nhập!" });
    }
  },
};
