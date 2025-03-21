// middleware/errorMiddleware.js
const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).json({ success: false, message: err.message || "Server Error" });
  };
  
  export default errorHandler;
  