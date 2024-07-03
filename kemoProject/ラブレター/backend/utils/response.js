function isSuccess(response, statusCode, data, message) {
  response.status(statusCode).json({ isError: false, data, message });
}

function isFailed(response, statusCode, message) {
  response.status(statusCode).json({ isError: true, message });
}

module.exports = { isSuccess, isFailed };
