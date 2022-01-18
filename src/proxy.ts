class Requester {
    role : string = '';
    request(){
        console.log('new request...');
    }
}

class ProxyRequest {
   realClass!: Requester; 
   
   constructor(realClass: Requester){
       this.realClass=realClass;
   }

   ProxyRequest(){
     if(this.realClass .role == 'mange'){
        this.realClass.request();
     }
     else{
         console.log(' not run ')
     }
   }
}

export function Proxy(){
    let c =new Requester();
    c.role="user"
    let p = new ProxyRequest(c);
    p.ProxyRequest();

    let c2 =new Requester();
    c2.role="mange"
    let p2 = new ProxyRequest(c2);
    p2.ProxyRequest();
}