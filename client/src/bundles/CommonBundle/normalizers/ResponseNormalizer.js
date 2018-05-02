export default class ResponseNormalizer {
  static normalizeError(error) {
    if ('response' in error) {
      const { response: { data } } = error;

      return {
        message: data.statusDescription,
      };
    }

    return {
      message: error.message,
    };
  }
}
