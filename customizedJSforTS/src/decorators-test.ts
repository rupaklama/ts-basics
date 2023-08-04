// In TS, Decorators are use to modify/update Class properties and methods.
// note - Understanding the order in which decorators are ran is the key to understand them.

class Boat {
  // On fields, Decorator does not have direct access to the property
  // since Decorator is executed before we create a class instance
  @testDecorator
  color: string = "red";

  // accessor/getter
  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  // @logError('message') - this can be done with 'Decorator Factory'
  // which is a wrapper function around Decorator function

  // apply decorator on this method with @ syntax which is same as this - logError(Boat.prototype, "pilot")
  @logError
  pilot(): void {
    throw new Error();
    console.log("swish");
  }
}

// NOTE: Decorators are applied ONCE only when the code for this class is ran/executed,
// however, not when a class instance is created.

// Decorator, default args - (Boat.prototype, "pilot", null)
// target: Class Prototype - 'Boat.prototype',
// key: class property like field, method etc on which Decorator is applied
// desc: third argument is the property descriptor config object of ES5 JS
function logError(target: any, key: string, desc: PropertyDescriptor): void {
  // console.log("Target:", target);
  // console.log("Key:", key);
  // console.log("Desc", desc);

  const method = desc.value; // key

  // note - With Decorator, you can add additional functionality to a function or properties
  // new func to wrap up class function with catching error functionality
  desc.value = function () {
    try {
      method();
    } catch (err) {
      console.log("Oops, boat was sunk");
    }
  };
}

function testDecorator(target: any, key: string) {
  // note - we cannot use Prototype Object to access a value like below
  // console.log(target.color);
}

// new Boat().pilot();
