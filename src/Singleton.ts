class TribeService{
     name:string='';
     static instance : TribeService ;

     constructor(name:string){
         this.name=name;
    }
    insert(){}

      static getInstance(name :string){
          if(this.instance==null){
              this.instance =new TribeService(name);
          }
          return this.instance ;
      }

    log(){
     console.log(`${this.name} : tribe service....`);
    }
}
export function singleton(){
     TribeService.getInstance('tribe 1').log();
     let ts2 = TribeService.getInstance('tribe 2')
     ts2.log();
}  