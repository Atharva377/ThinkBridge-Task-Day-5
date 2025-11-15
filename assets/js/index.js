
    // Theme Toggle Functionality
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      themeToggle.textContent = document.body.classList.contains('dark-theme') 
        ? 'Light Theme' 
        : 'Dark Theme';
    });

    // Counter with Closure
    const createCounter = (() => {
      let count = 0;
      return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => count = 0,
        getValue: () => count
      };
    })();

    function incrementCounter() {
      createCounter.increment();
      updateCounterDisplay();
    }

    function decrementCounter() {
      createCounter.decrement();
      updateCounterDisplay();
    }

    function resetCounter() {
      createCounter.reset();
      updateCounterDisplay();
    }

    function updateCounterDisplay() {
      document.getElementById('counterValue').textContent = createCounter.getValue();
    }

    // Logical Operators & Functions Demo
    function checkNumber() {
      const input = document.getElementById('numberInput').value;
      const num = parseInt(input);
      const output = document.getElementById('logicalOutput');
      
      if (isNaN(num)) {
        output.innerHTML = '<p class="error">Please enter a valid number</p>';
        return;
      }

      let result = '';
      
      // Using logical operators
      if (num > 0 && num < 100) {
        result = `✅ ${num} is between 1 and 99`;
      } else if (num <= 0 || num >= 100) {
        result = `⚠️ ${num} is NOT between 1 and 99`;
      }
      
      // Using ternary operator
      const isEven = num % 2 === 0 ? 'even' : 'odd';
      result += `<br>🔢 ${num} is an ${isEven} number`;
      
      output.innerHTML = `<p>${result}</p>`;
    }

    // Closure Demonstration
    function demonstrateClosure() {
      const output = document.getElementById('logicalOutput');
      
      // Simple closure example
      function createMultiplier(factor) {
        return function(number) {
          return number * factor;
        };
      }
      
      const double = createMultiplier(2);
      const triple = createMultiplier(3);
      
      const randomNum = Math.floor(Math.random() * 10) + 1;
      
      output.innerHTML = `
        <p>🔄 Closure Example:</p>
        <p>Double of ${randomNum} = ${double(randomNum)}</p>
        <p>Triple of ${randomNum} = ${triple(randomNum)}</p>
        <p><small>The multiplier functions remember their factor values even after createMultiplier has finished executing!</small></p>
      `;
    }

    // Objects, Getters & Setters
    function createStudentObject() {
      const output = document.getElementById('objectOutput');
      
      class Student {
        constructor(name, age) {
          this._name = name;
          this._age = age;
          this._grades = [];
        }
        
        // Getter
        get name() {
          return this._name;
        }
        
        // Setter with validation
        set name(newName) {
          if (typeof newName === 'string' && newName.length > 0) {
            this._name = newName;
          } else {
            console.log('Invalid name');
          }
        }
        
        get age() {
          return this._age;
        }
        
        set age(newAge) {
          if (newAge >= 0 && newAge <= 120) {
            this._age = newAge;
          }
        }
        
        addGrade(grade) {
          this._grades.push(grade);
        }
        
        get averageGrade() {
          if (this._grades.length === 0) return 0;
          const sum = this._grades.reduce((a, b) => a + b, 0);
          return (sum / this._grades.length).toFixed(2);
        }
      }
      
      const student = new Student('Atharva', 20);
      student.addGrade(85);
      student.addGrade(92);
      student.addGrade(78);
      
      output.innerHTML = `
        <p>🎓 Student Object Created:</p>
        <p>Name: ${student.name}</p>
        <p>Age: ${student.age}</p>
        <p>Grades: ${student._grades.join(', ')}</p>
        <p>Average: ${student.averageGrade}</p>
      `;
    }

    function useGetterSetter() {
      const output = document.getElementById('objectOutput');
      
      const person = {
        _firstName: 'John',
        _lastName: 'Doe',
        
        get fullName() {
          return `${this._firstName} ${this._lastName}`;
        },
        
        set fullName(name) {
          const parts = name.split(' ');
          if (parts.length === 2) {
            this._firstName = parts[0];
            this._lastName = parts[1];
          }
        }
      };
      
      output.innerHTML = `
        <p>👤 Getter/Setter Demo:</p>
        <p>Original: ${person.fullName}</p>
      `;
      
      person.fullName = 'Jane Smith';
      
      output.innerHTML += `
        <p>After setter: ${person.fullName}</p>
        <p><small>The fullName setter automatically splits and updates first/last names!</small></p>
      `;
    }

    // Proxy Demonstration
    function demonstrateProxy() {
      const output = document.getElementById('advancedOutput');
      
      const target = {
        message: 'Hello, World!',
        count: 0
      };
      
      const handler = {
        get: function(obj, prop) {
          if (prop in obj) {
            return obj[prop];
          } else {
            return `Property "${prop}" doesn't exist`;
          }
        },
        
        set: function(obj, prop, value) {
          if (prop === 'count' && typeof value !== 'number') {
            console.log('Count must be a number');
            return false;
          }
          obj[prop] = value;
          return true;
        }
      };
      
      const proxy = new Proxy(target, handler);
      
      output.innerHTML = `
        <p>🔄 Proxy Demo:</p>
        <p>proxy.message: "${proxy.message}"</p>
        <p>proxy.count: ${proxy.count}</p>
        <p>proxy.unknown: "${proxy.unknown}"</p>
      `;
      
      proxy.count = 42;
      output.innerHTML += `<p>After proxy.count = 42: ${proxy.count}</p>`;
      
      proxy.count = 'invalid';
      output.innerHTML += `<p>After trying to set count to string: ${proxy.count} (unchanged)</p>`;
    }

    // Currying Demonstration
    function demonstrateCurrying() {
      const output = document.getElementById('advancedOutput');
      
      // Regular function
      function multiply(a, b, c) {
        return a * b * c;
      }
      
      // Curried version
      function curryMultiply(a) {
        return function(b) {
          return function(c) {
            return a * b * c;
          };
        };
      }
      
      // ES6 arrow function currying
      const curryMultiplyES6 = a => b => c => a * b * c;
      
      const result1 = multiply(2, 3, 4);
      const result2 = curryMultiply(2)(3)(4);
      const result3 = curryMultiplyES6(2)(3)(4);
      
      // Partial application
      const multiplyByTwo = curryMultiply(2);
      const multiplyByTwoAndThree = multiplyByTwo(3);
      const result4 = multiplyByTwoAndThree(4);
      
      output.innerHTML = `
        <p>🎯 Currying Demo:</p>
        <p>Regular: multiply(2, 3, 4) = ${result1}</p>
        <p>Curried: curryMultiply(2)(3)(4) = ${result2}</p>
        <p>ES6 Curried: curryMultiplyES6(2)(3)(4) = ${result3}</p>
        <p>Partial Application: multiplyByTwo(3)(4) = ${result4}</p>
        <p><small>Currying transforms a function with multiple arguments into a sequence of functions each with a single argument!</small></p>
      `;
    }

    // Initialize page
    document.addEventListener('DOMContentLoaded', function() {
      updateCounterDisplay();
      
      // Add smooth scrolling for navigation
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    });
