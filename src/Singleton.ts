// class TribeService{
//      name:string='';
//      static instance : TribeService ;

//      constructor(name:string){
//          this.name=name;
//     }
//     insert(){}

//       static getInstance(name :string){
//           if(this.instance==null){
//               this.instance =new TribeService(name);
//           }
//           return this.instance ;
//       }

//     log(){
//      console.log(`${this.name} : tribe service....`);
//     }
// }
// export function singleton(){
//      TribeService.getInstance('tribe 1').log();
//      let ts2 = TribeService.getInstance('tribe 2')
//      ts2.log();
// }  
 
class Database {

    sql:string ='';

    constructor(sql:string){
        this.sql= sql;
    }

    static instance :Database;

    static getInstance(sql :string){
        if(this.instance == null){
            this.instance = new Database(sql);
        }
        return this.instance ;
    }

    query(){
        console.log(`${this.sql} : select tabel .....`);
    }
}

export function singleton(){
    Database.getInstance('select 1').query();
    let zx = Database.getInstance('select 2');
    zx.query();
}