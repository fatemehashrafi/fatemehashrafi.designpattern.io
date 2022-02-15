interface DriveInterface{
    drive(destination:string):void;

}

class SnappDriver implements DriveInterface {
    drive(destination: string): void {
        console.log(`snap Driver : I am driving to the destination: ${destination}`);

    }
}

class PersonalDriver implements DriveInterface{
    drive(destination: string): void {
        console.log(`personal Driver : I am driving to the destination: ${destination}`);

    }
}

class CEO {
    driver:DriveInterface | undefined;
    constructor(){}

    setDriver(_driver :DriveInterface){
        this.driver= _driver;
    }


    visitBussinessPartner( partnerLocation :string){
        if(!this.driver){
            throw new Error('you must call the setdriver before using this function')
        }
        console.log(`CEO : i want to meet a bussiness partner at the ${partnerLocation}`);

        this.driver.drive(partnerLocation);
        console.log('seo i arriveat the location ');
    }
}

export function diConstructor(){
    let ceo = new CEO();
    ceo.setDriver(new PersonalDriver())
    ceo.visitBussinessPartner('mashhad');

    ceo.setDriver(new SnappDriver());
    ceo.visitBussinessPartner('tehran');

}