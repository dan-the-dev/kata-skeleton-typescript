import Main from '../src/main';
const MainInstance = new Main();

describe('sample test set', function (): void {

  it('sample test', (): void => {

    var result: boolean = MainInstance.func();

    var expected = true;
    expect(result).toBe(expected);
  });

});