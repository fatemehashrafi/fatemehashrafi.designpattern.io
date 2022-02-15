class Driver {
    drive(destination:string){
        console.log(`Driver : I am driving to the destination: ${destination}`);
    }
}

class SEO {
    visitBussinessPartner(driver :Driver , partnerLocation :string){
        console.log(`CEO : i want to meet a bussiness partner at the ${partnerLocation}`);
        driver.drive(partnerLocation);
        console.log('seo i arriveat the location ');
    }
    
}
export function badway(){
    let seo =new SEO()
    let drive = new Driver()

    seo.visitBussinessPartner(drive ,'mashhad');
}

