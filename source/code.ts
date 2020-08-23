import { Observable, observable } from "rxjs";


//you could use function subscribe(){}
var observable$ = Observable.create((observer:any)=>{
    observer.next("Value been emited");
});

observable$
    .subscribe( (arg:any) => {
        console.log(arg); 
    });
