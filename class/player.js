const { Food } = require('./food');
const { Room } = require('./room');



class Player {

    constructor(name, startingRoom) {
        this.name = name;
        this.currentRoom = startingRoom;
        this.items = [];
    }

    move(direction) {

        const nextRoom = this.currentRoom.getRoomInDirection(direction);

        // If the next room is valid, set the player to be in that room
        if (nextRoom) {
            this.currentRoom = nextRoom;

            nextRoom.printRoom(this);
        } else {
            console.log("You cannot move in that direction");
        }
    }

    printInventory() {
        if (this.items.length === 0) {
            console.log(`${this.name} is not carrying anything.`);
        } else {
            console.log(`${this.name} is carrying:`);
            for (let i = 0; i < this.items.length; i++) {
                console.log(`  ${this.items[i].name}`);
            }
        }
    }

    takeItem(itemName) {
        if (Room.items[0].name === itemName) {
            this.items.push(Room.items[0])
        }
    }

    dropItem(itemName) {
        // Drops an item the player is holding into their current room

        // Your code here
    }

    eatItem(itemName) {
        // Allow the player to eat food items, but not non-food items

        // Your code here
    }

    getItemByName(name) {
        if (this.items[0].name === name) {
            return this.items[0]
        }
    }
}


room.items.push(item);
console.log(room.items.length)//.to.equal(1);
console.log(player.items.length)//.to.equal(0);

player.takeItem("rock");

// expect(room.items.length).to.equal(0);
console.log(player.items.length)//.to.equal(1);

console.log(player.getItemByName("rock"))//.to.equal(item);

module.exports = {
    Player,
};
