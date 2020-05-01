exports.handler = async function (event, context, callback) {
  const message = event.queryStringParameters.message
  return {
    statusCode: 200,
    body: JSON.stringify({ message })
  }
}