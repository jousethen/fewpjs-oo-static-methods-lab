class Formatter {
  static capitalize(word) {
    return word[0].toUpperCase() + word.slice(1);
  }

  static sanitize(word) {
    return word.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    let words = string.split(" ");

    const titledString = words.map(word => {
      let noCap = ["a", "an", "but", "of", "and", "for", "at", "by", "from", "the"];

      if (noCap.indexOf(word) != -1) {
        return word;
      }
      else {
        return Formatter.capitalize(word);
      }

    });


    return Formatter.capitalize(titledString[0]) + " " + titledString.slice(1).join(" ");
  }
}