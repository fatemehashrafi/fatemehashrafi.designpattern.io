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

    constructor(private driver:DriveInterface ){}


    visitBussinessPartner( partnerLocation :string){
        console.log(`CEO : i want to meet a bussiness partner at the ${partnerLocation}`);

        this.driver.drive(partnerLocation);
        console.log('seo i arriveat the location ');
    }
}

export function diConstructor(){
    let ceo = new CEO(new SnappDriver());
    ceo.visitBussinessPartner('mashhad');
}