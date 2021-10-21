import ApiStack from './ApiStack';

export default function main(app) {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    runtime: 'nodejs14.x',
  });

  // eslint-disable-next-line no-new
  new ApiStack(app, 'api');
}
