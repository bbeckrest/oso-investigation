import * as sst from '@serverless-stack/resources';

export default class ApiStack extends sst.Stack {
  api; // public ref

  constructor(scope, id, props) {
    super(scope, id, props);

    this.api = new sst.Api(this, 'Api', {
      defaultFunctionProps: {
        bundle: {
          esbuildConfig: 'config/esbuild.js',
          externalModules: ['pg-native', 'pg-query-stream'],
          nodeModules: ['oso'],
          copyFiles: [{ from: 'src/oso/main.polar', to: 'main.polar' }],
        },
      },
      routes: {
        'GET /users': 'src/services/users/get-users.main',
      },
    });

    this.addOutputs({
      ApiEndpoint: this.api.url,
    });
  }
}
