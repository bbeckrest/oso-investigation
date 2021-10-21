export default function handler(lambdaFn) {
  return async function runLambdaFn(event, context) {
    let body;
    let statusCode;

    try {
      // run lamba func
      body = await lambdaFn(event, context);
      statusCode = 200;
    } catch (err) {
      console.error(err); // eslint-disable-line no-console
      body = { error: err.message };
      statusCode = 500;
    }

    return {
      statusCode,
      body: JSON.stringify(body),
    };
  };
}
