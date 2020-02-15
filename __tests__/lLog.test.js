const lL = require('../src/utils/lLog');

describe('\nReturns a colored prefix symbol and message:\n', () => {
  test('it should return a string with valid color arg', () => {
    expect(typeof lL('r', 'with valid color arg string')).toBe('string');
  });

  test('it should return a string with invalid color arg', () => {
    expect(typeof lL('invalid arg string', 'with invalid color arg string')).toBe('string');
  });

  test('it should return a string with no color arg\n', () => {
    expect(typeof lL('with no color arg passed')).toBe('string');
  });

  test('it should return the string with red bright prefix: "[∅] <-- red bright prefix"', () => {
    expect(lL('r', '<-- red bright prefix')).toBe('\x1b[31m\x1b[1m[∅]\x1b[0m <-- red bright prefix');
  });

  test('it should return "<-- red bright prefix" length of 38" (includes ANSI characters)\n', () => {
    expect(lL('r', '<-- red bright prefix').length).toBe(38);
  });

  test('it should return the string with blinking bright prefix: "[∅] <-- blinking bright prefix"', () => {
    expect(lL('bl', '<-- blinking bright prefix')).toBe('\x1b[5m\x1b[1m[∅]\x1b[0m <-- blinking bright prefix');
  });

  test('it should return "<-- blinking bright prefix" length of 43" (includes ANSI characters)', () => {
    expect(lL('r', '<-- blinking bright prefix').length).toBe(43);
  });
});
