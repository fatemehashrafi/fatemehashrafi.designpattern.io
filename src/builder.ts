class UserBuilder{

    door :number;
    window!: number;
    wall!: number;
    floor!: number;

    constructor(door :number){
        this.door = door;
    }

    setWindow(value :number) :UserBuilder{
        this.window = value;
        return this;
    }

    setWall(value :number) : UserBuilder{
        this.wall = value;
        return this;
    }

    setfloor(value :number) : UserBuilder{
        this.floor = value;
        return this;
    }

    builder() : User{
        return new User(this);
    }

}

export class User{

    door :number;
    window:number;
    wall: number;
    floor:number;

    constructor(builder :UserBuilder){
        this.door = builder.door;
        this.window =builder.window;
        this.wall = builder.wall;
        this.floor =builder.floor;
    }
}

export function Builder(){

    var b : User = new UserBuilder(1)
        .setWall(4)
        .setWindow(2)
        .setfloor(6)
        .builder();
        console.log(b.door +""+b.wall +""+ b.window +""+ b.floor);
}
