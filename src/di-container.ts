import {createInjector} from "typed-inject";

interface DriveInterface{
    navigator:NavigatorInterface;
    drive(destination:string):void;

}

interface NavigatorInterface {
    navigate(start: string , destination:string):string[];
}

class GoogleMapsNavigator implements NavigatorInterface{

    public static inject = [] as const;

    navigate(start: string, destination: string): string[] {
        console.log(`navigating from ${start} to ${destination}`);

        let places :string[]=[];
        places.push(start);
        places.push('esfahan');
        places.push(destination);

        return places;
    }
}

class NeshanNavigator implements NavigatorInterface{
    navigate(start: string, destination: string): string[] {
        let places :string[]=[];
        places.push(start);
        places.push('tabriz');
        places.push(destination);

        return places;
    }
}

class SnappDriver implements DriveInterface {
    public static inject = ['navigator'] as const;

    constructor(public navigator: NavigatorInterface){}

    drive(destination: string): void {

        this.navigator.navigate('here', destination);

        console.log(`snap Driver : I am driving to the destination: ${destination}`);

    }
}

class PersonalDriver implements DriveInterface{
    public static inject = ['navigator'] as const;

    constructor(public navigator: NavigatorInterface){}

    drive(destination: string): void {
        console.log('drive')
        this.navigator.navigate('here', destination);

        console.log(`personal Driver : I am driving to the destination: ${destination}`);

    }
}

class CEO {
    public static inject = ['driver'] as const;

    constructor(private driver:DriveInterface ){}


    visitBussinessPartner( partnerLocation :string){
        console.log(`CEO : i want to meet a bussiness partner at the ${partnerLocation}`);

        this.driver.drive(partnerLocation);
        console.log('seo i arriveat the location ');
    }
}

export function diContainer(){
    const appInjector = createInjector()
         .provideClass('navigator' ,GoogleMapsNavigator)
         .provideClass('driver' ,PersonalDriver)
         .provideClass('ceo' , CEO)

         const ceo = appInjector.resolve('ceo');
         ceo.visitBussinessPartner('mashhad')
}

export function diConstructor(){
    let ceo = new CEO(new SnappDriver(new GoogleMapsNavigator()));
    ceo.visitBussinessPartner('mashhad');
}