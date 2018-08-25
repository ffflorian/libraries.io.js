//@ts-check

const librariesIO = require('../')
const {RequestService} = require('../dist/RequestService');

describe('Endpoint', () => {
  it('concats platform and name', () => {


    /** @type {librariesIO.SearchOptions} */
    const options = {
      filter: {
        keywords: ['key1', 'key2']
      },
      page: 2,
      perPage: 10,
      sortBy: 'created_at',
    }

    //const requestService = new RequestService({apiKey: 'my-api-key'});

    const mappedParameters = RequestService.mapParameters(options);
    expect(mappedParameters).toEqual(jasmine.objectContaining({
      keywords: 'key1,key2',
      page: 2,
      per_page: 10,
      sort: 'created_at'
    }))
  });
});
