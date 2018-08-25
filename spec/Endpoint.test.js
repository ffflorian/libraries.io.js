//@ts-check

const {Endpoint} = require('../dist/Endpoint');

describe('Endpoint', () => {
  it('concats platform and name', () => {
    const platform = 'npm';
    const name = 'grunt';

    const endpoint = Endpoint.Project.contributors(platform, name);
    expect(endpoint).toBe('/npm/grunt/contributors');
  });
});
