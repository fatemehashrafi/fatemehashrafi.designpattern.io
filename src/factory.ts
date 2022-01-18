interface  Logistic{
    create():Transport;
}

class RoadLogistic implements Logistic{
    create(): Transport {
       return new truck();
    }
}
 
class SeaLogistic implements Logistic{
    create(): Transport {
        return new ship();
    } 
} 

class AirLogistic implements Logistic {
    create(): Transport {
        return new AirPlane();
    }
}

interface Transport{
    deliver():void;
}
   
class truck implements Transport {
    deliver(): void {
       console.log('truck');
    }  
}

class ship implements Transport{
    deliver(): void {
       console.log('ship');
    }
}

class AirPlane implements Transport {
    deliver(): void {
        console.log('AirPlane');
    }
}

export function factory(){
    let r = new RoadLogistic();
    let s = r.create();
    s.deliver();

    let c = new SeaLogistic();
    let f = c.create();
    f.deliver();
}