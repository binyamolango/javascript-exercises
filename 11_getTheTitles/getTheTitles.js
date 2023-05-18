const getTheTitles = function(books) {
    let names = [];
    books.forEach(each => {
      names.push(each.title);
    });
    return names;
  };

// Do not edit below this line
module.exports = getTheTitles;
