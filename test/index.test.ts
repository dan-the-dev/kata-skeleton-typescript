import Index from '../src/index';
const IndexObject = new Index();

describe('sample test set', function (): void {

  it('sample test', (): void => {

    var result: boolean = IndexObject.func();

    var expected = true;
    expect(result).toBe(expected);
  });

});