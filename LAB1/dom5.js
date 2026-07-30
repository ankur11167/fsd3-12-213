import { EventEmitter } from "events";

class DomClass extends EventEmitter{
    addEventListener(eventName , callback){
        this.on(eventName, callback);
    }

removeEventLlistener(eventName, callback) {
    this.off(eventName, callback);
}
dispatchEvent(eventName, eventData = {}){
    const event = {
        type: eventName,
        timespan: new Date(),
        ...eventData,
    };
    this.emit(eventName, event);
}

}
const button = new DomClass();
const handleClick = (event)=>{
    console.log(`Button Clicked type: ${event.type} at ${event.timespan}`);
};

button.addEventListener("click", handleClick);
button.dispatchEvent("click",{
    target: "submitton",
});
 //button.removeEventLlistener("click", handleClick);//
button.dispatchEvent("click",{
    target: "resetbin",
});