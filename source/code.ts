import { Observable, observable } from "rxjs";


//you could use function subscribe(){}
var observable$ = Observable.create((observer:any)=>{
    observer.next("Value been emited");
});

observable$
    .subscribe( (arg:any) => {
        addItem(arg);
    });


// This is vanilla JS to add a List element to the UL 
function addItem(val:any){

    var node = document.createElement("li");
    var text_node = document.createTextNode(val);

    node.appendChild(text_node);

    document.getElementById('output').appendChild(node);
}

