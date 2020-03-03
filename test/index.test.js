import Index from '../src/index';
const IndexObject = new Index();

describe('sample test set', function () {

  it('sample test', () => {

    var result = IndexObject.func();

    var expected = true;
    expect(result).toBe(expected);
  });

});