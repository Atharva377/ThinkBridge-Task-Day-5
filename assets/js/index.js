
// JavaScript Demo Functions
function checkNumber() {
    const input = document.getElementById('numberInput');
    const output = document.getElementById('logicalOutput');
    const number = parseInt(input.value);

    if (isNaN(number)) {
        output.innerHTML = '<span class="error">Please enter a valid number</span>';
        return;
    }

    let result = '';
    if (number > 0 && number < 100) {
        result = `✅ ${number} is between 0 and 100`;
    } else if (number <= 0 || number >= 100) {
        result = `❌ ${number} is NOT between 0 and 100`;
    }

    if (number % 2 === 0 && number > 50) {
        result += `<br>✨ ${number} is even and greater than 50`;
    }

    output.innerHTML = result;
}

function demonstrateClosure() {
    const output = document.getElementById('logicalOutput');
    
    function createCounter() {
        let count = 0;
        return function() {
            count++;
            return count;
        };
    }

    const counter = createCounter();
    let result = 'Closure Demo:<br>';
    result += `Counter 1: ${counter()}<br>`;
    result += `Counter 2: ${counter()}<br>`;
    result += `Counter 3: ${counter()}<br>`;
    result += 'Each call remembers the previous count!';

    output.innerHTML = result;
}

function createStudentObject() {
    const output = document.getElementById('objectOutput');
    
    const student = {
        name: 'Atharva Senapati',
        age: 20,
        course: 'Web Development',
        
        // Method
        introduce() {
            return `Hello, I'm ${this.name}, studying ${this.course}`;
        },
        
        // Getter
        get status() {
            return this.age >= 18 ? 'Adult' : 'Minor';
        }
    };

    let result = 'Student Object Created:<br>';
    result += `Name: ${student.name}<br>`;
    result += `Age: ${student.age}<br>`;
    result += `Course: ${student.course}<br>`;
    result += `Introduction: ${student.introduce()}<br>`;
    result += `Status: ${student.status}`;

    output.innerHTML = result;
}

function useGetterSetter() {
    const output = document.getElementById('objectOutput');
    
    const person = {
        _name: 'John',
        
        get name() {
            return this._name;
        },
        
        set name(value) {
            if (value.length > 0) {
                this._name = value;
            } else {
                console.log('Name cannot be empty');
            }
        }
    };

    let result = 'Getter/Setter Demo:<br>';
    result += `Initial Name: ${person.name}<br>`;
    person.name = 'Atharva';
    result += `After Setter: ${person.name}<br>`;
    person.name = '';
    result += `After Empty Set: ${person.name} (unchanged)<br>`;
    result += 'Name property is protected!';

    output.innerHTML = result;
}

function demonstrateProxy() {
    const output = document.getElementById('advancedOutput');
    
    const target = {
        message: 'Hello, World!'
    };

    const handler = {
        get(obj, prop) {
            if (prop in obj) {
                return `Proxy intercepted: ${obj[prop]}`;
            }
            return `Property ${prop} doesn't exist`;
        },
        
        set(obj, prop, value) {
            if (prop === 'message') {
                obj[prop] = value.toUpperCase();
                return true;
            }
            return false;
        }
    };

    const proxy = new Proxy(target, handler);

    let result = 'Proxy Demo:<br>';
    result += `Original: ${target.message}<br>`;
    result += `Through Proxy: ${proxy.message}<br>`;
    
    proxy.message = 'hello from proxy';
    result += `After Setting: ${proxy.message}<br>`;
    result += 'Proxy can intercept and modify operations!';

    output.innerHTML = result;
}

function demonstrateCurrying() {
    const output = document.getElementById('advancedOutput');
    
    // Curried function
    function multiply(a) {
        return function(b) {
            return a * b;
        };
    }

    const double = multiply(2);
    const triple = multiply(3);

    let result = 'Currying Demo:<br>';
    result += `multiply(2)(5): ${multiply(2)(5)}<br>`;
    result += `double(10): ${double(10)}<br>`;
    result += `triple(7): ${triple(7)}<br>`;
    result += 'Currying transforms multi-argument functions into sequence of single-argument functions!';

    output.innerHTML = result;
}

// Counter with closure
let counter = (function() {
    let count = 0;
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
        reset() {
            count = 0;
            return count;
        },
        getValue() {
            return count;
        }
    };
})();

function updateCounterDisplay() {
    document.getElementById('counterValue').textContent = counter.getValue();
}

function incrementCounter() {
    counter.increment();
    updateCounterDisplay();
}

function decrementCounter() {
    counter.decrement();
    updateCounterDisplay();
}

function resetCounter() {
    counter.reset();
    updateCounterDisplay();
}

// Initialize counter display
document.addEventListener('DOMContentLoaded', function() {
    updateCounterDisplay();
});

