export const responseHandler = (res,statusCode,message,data,status) => {
  res.status(statusCode).json({
    message: message,
    status,
    data: data,
  });
};
