const { Player } = require("./player");
const { Room } = require("./room")

class Item {
  constructor(name, description) {
    this.name = name;
    this.description = description
  }
  getItemByName(name) {

  }
  takeItem() {

  }
  dropItem() {

  }
}

module.exports = {
  Item,
};
