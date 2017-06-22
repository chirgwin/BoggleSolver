var fs = require("fs");
var dict = JSON.parse(fs.readFileSync("../node_modules/word-list-json/words.json", "utf8"));
var words = [];
const BOARD_LEN = 4;
for (var i = 0; i < dict.words.length; i++)
{
  if (dict.words[i].length >= 3 && dict.words[i].length <= BOARD_LEN)
  {
    words.push(dict.words[i]);
  }
}

fs.writeFileSync("words.json", JSON.stringify(words));

