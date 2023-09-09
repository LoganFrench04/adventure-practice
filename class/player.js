const { Food } = require('./food');
const { Room } = require('./room');
const { Item } = require("./item")



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
       
        if(this.currentRoom.items[0].name === itemName) {
            this.items.push(this.currentRoom.items[0]) 
            this.currentRoom.items.splice(this.currentRoom.items.indexOf(this.currentRoom.items[0]),1)
                }
    }

    dropItem(itemName) {
    if(this.items[0].name === itemName){
        this.currentRoom.items.push(this.items[0])
        this.items.splice(this.items.indexOf(this.items[0]),1)
    }
    }

    eatItem(itemName) {
        if(this.items[0] instanceof Food){
            if(this.items[0].name === itemName){
                this.items.splice(this.items.indexOf(this.items[0]),1)
        }
    
     }
    }

    getItemByName(name) {
        if (this.items[0].name === name) {
            return this.items[0]
        }
    }
}


module.exports = {
    Player,
};
