import jwt from "jsonwebtoken";
import { verifyToken } from "./auth"; // Update with the correct file path

// Mock dependencies or provide necessary setup for testing

describe("verifyToken", () => {
  let req;
  let res;
  let next;

  beforeEach(() => {
    req = {
      header: jest.fn(),
    };
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
      json: jest.fn(),
    };
    next = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return "Access Denied" if token is missing', async () => {
    await verifyToken(req, res, next);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.send).toHaveBeenCalledWith("Access Denied");
    expect(next).not.toHaveBeenCalled();
  });

  it('should handle "Bearer " prefix and verify the token', async () => {
    const token = "valid-token";
    req.header.mockReturnValue(`Bearer ${token}`);

    jwt.verify = jest.fn().mockReturnValue({ user: "user" });

    await verifyToken(req, res, next);

    expect(req.header).toHaveBeenCalledWith("Authorization");
    expect(jwt.verify).toHaveBeenCalledWith(token, process.env.JWT_SECRET);
    expect(req.user).toEqual({ user: "user" });
    expect(next).toHaveBeenCalled();
  });

  it('should handle token without "Bearer " prefix and verify the token', async () => {
    const token = "valid-token";
    req.header.mockReturnValue(token);

    jwt.verify = jest.fn().mockReturnValue({ user: "user" });

    await verifyToken(req, res, next);

    expect(req.header).toHaveBeenCalledWith("Authorization");
    expect(jwt.verify).toHaveBeenCalledWith(token, process.env.JWT_SECRET);
    expect(req.user).toEqual({ user: "user" });
    expect(next).toHaveBeenCalled();
  });

  it("should handle verification error and send error response", async () => {
    const error = new Error("Invalid token");
    jwt.verify = jest.fn().mockImplementation(() => {
      throw error;
    });

    await verifyToken(req, res, next);

    expect(jwt.verify).toThrowError("Invalid token");
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Invalid token" });
    expect(next).not.toHaveBeenCalled();
  });
});
