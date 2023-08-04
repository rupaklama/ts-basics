"use strict";
// In TS, Decorators are use to modify/update Class properties and methods.
// note - Understanding the order in which decorators are ran is the key to understand them.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
class Boat {
    constructor() {
        // On fields, Decorator does not have direct access to the property
        // since Decorator is executed before we create a class instance
        this.color = "red";
    }
    // accessor/getter
    get formattedColor() {
        return `This boat color is ${this.color}`;
    }
    // @logError('message') - this can be done with 'Decorator Factory'
    // which is a wrapper function around Decorator function
    // apply decorator on this method with @ syntax which is same as this - logError(Boat.prototype, "pilot")
    pilot() {
        throw new Error();
        console.log("swish");
    }
}
__decorate([
    testDecorator,
    __metadata("design:type", String)
], Boat.prototype, "color", void 0);
__decorate([
    logError,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Boat.prototype, "pilot", null);
// NOTE: Decorators are applied ONCE only when the code for this class is ran/executed,
// however, not when a class instance is created.
// Decorator, default args - (Boat.prototype, "pilot", null)
// target: Class Prototype - 'Boat.prototype',
// key: class property like field, method etc on which Decorator is applied
// desc: third argument is the property descriptor config object of ES5 JS
function logError(target, key, desc) {
    // console.log("Target:", target);
    // console.log("Key:", key);
    // console.log("Desc", desc);
    const method = desc.value; // key
    // note - With Decorator, you can add additional functionality to a function or properties
    // new func to wrap up class function with catching error functionality
    desc.value = function () {
        try {
            method();
        }
        catch (err) {
            console.log("Oops, boat was sunk");
        }
    };
}
function testDecorator(target, key) {
    // note - we cannot use Prototype Object to access a value like below
    // console.log(target.color);
}
// new Boat().pilot();
