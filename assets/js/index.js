
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

    // Language data
    const translations = {
      en: {
        "greeting": "Hi, I'm <span class='highlight'>Atharva Senapati</span>",
        "title": "Aspiring Web Developer",
        "description": "Passionate about creating beautiful, functional websites using modern web technologies",
        "explore": "Explore My Journey",
        "about-title": "About Me",
        "about-desc": "Learn about my background, passion for web development, and approach to creating clean, user-friendly websites.",
        "learn-more": "Learn More →",
        "skills-title": "Technical Skills",
        "skills-desc": "Discover my expertise in HTML5, CSS3, modern frameworks, and development tools I've mastered.",
        "view-skills": "View Skills →",
        "journey-title": "Learning Journey",
        "journey-desc": "Follow my intensive 5-day journey from web fundamentals to building complete portfolio websites.",
        "see-journey": "See Journey →",
        "js-title": "JavaScript Journey",
        "js-desc": "Explore my 7-day deep dive into JavaScript, from fundamentals to advanced concepts and interactive demos.",
        "explore-js": "Explore JS →"
      },
      hi: {
        "greeting": "नमस्ते, मैं <span class='highlight'>अथर्व सेनापति</span> हूँ",
        "title": "उभरता वेब डेवलपर",
        "description": "आधुनिक वेब तकनीकों का उपयोग करके सुंदर, कार्यात्मक वेबसाइटें बनाने के लिए उत्साही",
        "explore": "मेरी यात्रा का अन्वेषण करें",
        "about-title": "मेरे बारे में",
        "about-desc": "मेरी पृष्ठभूमि, वेब विकास के प्रति जुनून, और साफ, उपयोगकर्ता के अनुकूल वेबसाइट बनाने के दृष्टिकोण के बारे में जानें।",
        "learn-more": "अधिक जानें →",
        "skills-title": "तकनीकी कौशल",
        "skills-desc": "HTML5, CSS3, आधुनिक फ्रेमवर्क और विकास उपकरणों में मेरी विशेषज्ञता की खोज करें जिनमें मैंने महारत हासिल की है।",
        "view-skills": "कौशल देखें →",
        "journey-title": "सीखने की यात्रा",
        "journey-desc": "वेब मूलभूत बातों से लेकर पूर्ण पोर्टफोलियो वेबसाइटों के निर्माण तक मेरी गहन 5-दिवसीय यात्रा का अनुसरण करें।",
        "see-journey": "यात्रा देखें →",
        "js-title": "जावास्क्रिप्ट यात्रा",
        "js-desc": "जावास्क्रिप्ट में मेरी 7-दिवसीय गहरी डुबकी का अन्वेषण करें, मूलभूत बातों से लेकर उन्नत अवधारणाओं और इंटरैक्टिव डेमो तक।",
        "explore-js": "जेएस एक्सप्लोर करें →"
      },
      mr: {
        "greeting": "नमस्कार, मी <span class='highlight'>अथर्व सेनापती</span> आहे",
        "title": "उदयोन्मुख वेब डेवलपर",
        "description": "आधुनिक वेब तंत्रज्ञान वापरून सुंदर, कार्यात्मक वेबसाइट्स तयार करण्यासाठी उत्सुक",
        "explore": "माझ्या प्रवासाचा शोध घ्या",
        "about-title": "माझ्याबद्दल",
        "about-desc": "माझ्या पार्श्वभूमी, वेब डेव्हलपमेंटबद्दलच्या आवडी, आणि स्वच्छ, वापरकर्ता-अनुकूल वेबसाइट्स तयार करण्याच्या दृष्टिकोनाबद्दल जाणून घ्या.",
        "learn-more": "अधिक जाणून घ्या →",
        "skills-title": "तांत्रिक कौशल्ये",
        "skills-desc": "HTML5, CSS3, आधुनिक फ्रेमवर्क आणि डेव्हलपमेंट साधनांमधील माझ्या कौशल्याचा शोध घ्या ज्यात मी प्रावीण्य मिळवले आहे.",
        "view-skills": "कौशल्ये पहा →",
        "journey-title": "शिकण्याचा प्रवास",
        "journey-desc": "वेब मूलभूत गोष्टींपासून पूर्ण पोर्टफोलिओ वेबसाइट्स बांधण्यापर्यंतच्या माझ्या तीव्र ५-दिवसीय प्रवासाचे अनुसरण करा.",
        "see-journey": "प्रवास पहा →",
        "js-title": "जावास्क्रिप्ट प्रवास",
        "js-desc": "जावास्क्रिप्टमध्ये माझ्या ७-दिवसीय खोल डुबकीचा शोध घ्या, मूलभूत गोष्टींपासून प्रगत संकल्पना आणि इंटरॅक्टिव्ह डेमो पर्यंत.",
        "explore-js": "जेएस एक्सप्लोर करा →"
      }
    };

    // DOM elements
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    const languageOptions = document.querySelectorAll('.language-option');

    // Current language
    let currentLang = 'en';

    // Toggle dropdown
    languageBtn.addEventListener('click', () => {
      languageDropdown.classList.toggle('show');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)) {
        languageDropdown.classList.remove('show');
      }
    });

    // Change language
    languageOptions.forEach(option => {
      option.addEventListener('click', () => {
        const lang = option.getAttribute('data-lang');
        changeLanguage(lang);
        languageDropdown.classList.remove('show');
      });
    });

    // Function to change language
    function changeLanguage(lang) {
      currentLang = lang;
      
      // Update active language option
      languageOptions.forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-lang') === lang) {
          option.classList.add('active');
        }
      });
      
      // Update button text
      const langText = {
        'en': 'English',
        'hi': 'हिन्दी',
        'mr': 'मराठी'
      };
      languageBtn.querySelector('span').textContent = langText[lang];
      
      // Update all translatable elements
      const translatableElements = document.querySelectorAll('[data-key]');
      translatableElements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
          if (element.tagName === 'SPAN' && element.classList.contains('highlight')) {
            // Special handling for the name span
            element.innerHTML = translations[lang][key];
          } else {
            element.innerHTML = translations[lang][key];
          }
        }
      });
    }

    // Initialize with English
    changeLanguage('en');