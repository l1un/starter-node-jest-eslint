/**
 * Logs messages to the console with custom prefix and color options.
 * @param {string} args[0] the text to log
 * @param {string} args[1] optional color, else white.
 * @returns {string} the formatted message with colored prefix
 */

module.exports = (...args) => {
  // compose string with prefix, color from arg[0], text from arg[1]
  const lL = (color, str) => {
    const msg = `${color}[∅]\x1b[0m ${str}`;
    return msg;
  };

  const statTable = {
    g: lL('\x1b[32m\x1b[1m', args[1]), // green bright
    y: lL('\x1b[33m\x1b[1m', args[1]), // yellow bright
    r: lL('\x1b[31m\x1b[1m', args[1]), // red bright
    b: lL('\x1b[34m\x1b[1m', args[1]), // blue bright
    c: lL('\x1b[36m\x1b[1m', args[1]), // cyan bright
    m: lL('\x1b[35m\x1b[1m', args[1]), // magenta bright
    bl: lL('\x1b[5m\x1b[1m', args[1]), // blink bright
    re: lL('\x1b[7m\x1b[1m', args[1]), // reverse bright
    w: lL('\x1b[37m\x1b[1m', args[0]), // white bright (used when args length < 1)
  };

  // returns color if given, defaults to white if not
  return statTable[args[0]] || statTable.w;
};
