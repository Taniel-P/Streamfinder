class Logger {
  static consoleLog(message, ...optParams) {
    if (process.env.NODE_ENV !== 'production') {
      console.log(message, ...optParams);
    }
  }
}

export default Logger;