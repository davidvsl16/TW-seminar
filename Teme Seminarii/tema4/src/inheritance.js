//Example Function

class Robot {
    constructor(name){
        this.name = name;
    }

    move (){
        console.log(`${this.name} is moving`);
    }
}

const r0 = new Robot("some robot");
r0.move();

class Weapon{
    constructor (description){
        this.description = description;
    }

    fire(){
        console.log(`${this.description} is firing!`);
    }
}

const w0 = new Weapon ("pew pew laser");
w0.fire();

class CombatRobot extends Robot {
    constructor(name){
        super(name);
        this.weapons = [];
    }

    addWeapon(w){
        this.weapons.push(w);
    }

    fire (){
        console.log('firing all weapons');
        for(const w of this.weapons){
            w.fire();
        }
    }
}

const r1 = new CombatRobot ('some combat robot');
r1.addWeapon(w0);
r1.fire();

Robot.prototype.fly = function (){
    console.log(`${this.name} is flying`);
}

r1.fly();

//Function

//Base class : Software

class Software {
    constructor(name){
        this.name = name;
    }

    run(){
        console.log(`The software ${this.name} is running`);
    }
}

//Inherited class : Browser and adds Plug-in

class Browser extends Software {
    constructor(name){
        super(name);
        this.plugins = [];
    }

    addPlugin(plugin){
        this.plugins.push (plugin);
    }

    run(){
        super.run();
        console.log(`The browser ${this.name} has the following plugins:`);
        for(const plugin of this.plugins){
            console.log(` - ${plugin}`);
        }
    }
}

const browser = new Browser ('Firefox');
browser.addPlugin ('AdBlocker');
browser.addPlugin ('Grammarly');
browser.run();