angular.module("keyboardApp").controller("KeyboardController", function() {
    var vm = this;

    vm.title = "Privax Keyboard";
    vm.typed = "";
    vm.caps = false;
    vm.shift = false;

    vm.keys_row1 = [{
        norm_char: '`',
        shift_char: '~',
        width: 'single'
    }, {
        norm_char: '1',
        shift_char: '!',
        width: 'single'
    }, {
        norm_char: '2',
        shift_char: '@',
        width: 'single'
    }, {
        norm_char: '3',
        shift_char: '#',
        width: 'single'
    }, {
        norm_char: '4',
        shift_char: '$',
        width: 'single'
    }, {
        norm_char: '5',
        shift_char: '%',
        width: 'single'
    }, {
        norm_char: '6',
        shift_char: '^',
        width: 'single'
    }, {
        norm_char: '7',
        shift_char: '&',
        width: 'single'
    }, {
        norm_char: '8',
        shift_char: '*',
        width: 'single'
    }, {
        norm_char: '9',
        shift_char: '(',
        width: 'single'
    }, {
        norm_char: '0',
        shift_char: ')',
        width: 'single'
    }, {
        norm_char: '-',
        shift_char: '_',
        width: 'single'
    }, {
        norm_char: '=',
        shift_char: '+',
        width: 'single'
    }, {
        action: 'backspace',
        norm_char: 'Backspace',
        shift_char: 'Backspace',
        width: 'double'
    }];

    vm.keys_row2 = [{
        action: 'tab',
        norm_char: 'Tab',
        shift_char: 'Tab',
        width: 'tab'
    }, {
        norm_char: 'q',
        caps_char: 'Q',
        shift_char: 'Q',
        width: 'single'
    }, {
        norm_char: 'w',
        caps_char: 'W',
        shift_char: 'W',
        width: 'single'
    }, {
        norm_char: 'e',
        caps_char: 'E',
        shift_char: 'E',
        width: 'single'
    }, {
        norm_char: 'r',
        caps_char: 'R',
        shift_char: 'R',
        width: 'single'
    }, {
        norm_char: 't',
        caps_char: 'T',
        shift_char: 'T',
        width: 'single'
    }, {
        norm_char: 'y',
        caps_char: 'Y',
        shift_char: 'Y',
        width: 'single'
    }, {
        norm_char: 'u',
        shift_char: 'U',
        shift_char: 'U',
        width: 'single'
    }, {
        norm_char: 'i',
        caps_char: 'I',
        shift_char: 'I',
        width: 'single'
    }, {
        norm_char: 'o',
        caps_char: 'O',
        shift_char: 'O',
        width: 'single'
    }, {
        norm_char: 'p',
        caps_char: 'P',
        shift_char: 'P',
        width: 'single'
    }, {
        norm_char: '{',
        shift_char: '[',
        width: 'single'
    }, {
        norm_char: '}',
        shift_char: ']',
        width: 'single'
    }, {
        action: '',
        norm_char: '|',
        shift_char: '\\',
        width: 'tab'
    }];

    vm.keys_row3 = [{
        action: 'capslock',
        norm_char: 'Caps Lock',
        shift_char: 'Caps Lock',
        width: 'capslock'
    }, {
        norm_char: 'a',
        caps_char: 'A',
        shift_char: 'A',
        width: 'single'
    }, {
        norm_char: 's',
        caps_char: 'S',
        shift_char: 'S',
        width: 'single'
    }, {
        norm_char: 'd',
        shift_char: 'D',
        shift_char: 'D',
        width: 'single'
    }, {
        norm_char: 'f',
        caps_char: 'F',
        shift_char: 'F',
        width: 'single'
    }, {
        norm_char: 'g',
        caps_char: 'G',
        shift_char: 'G',
        width: 'single'
    }, {
        norm_char: 'h',
        caps_char: 'H',
        shift_char: 'H',
        width: 'single'
    }, {
        norm_char: 'j',
        caps_char: 'J',
        shift_char: 'J',
        width: 'single'
    }, {
        norm_char: 'k',
        shift_char: 'K',
        shift_char: 'K',
        width: 'single'
    }, {
        norm_char: 'l',
        caps_char: 'L',
        shift_char: 'L',
        width: 'single'
    }, {
        norm_char: ';',
        shift_char: ':',
        width: 'single'
    }, {
        norm_char: '~',
        shift_char: '\'',
        width: 'single'
    }, {
        action: "return",
        norm_char: 'Enter/Return',
        shift_char: 'Enter/Return',
        width: 'enter'
    }];

    vm.keys_row4 = [{
        action: 'shift',
        norm_char: 'Shift',
        shift_char: 'Shift',
        width: 'shift'
    }, {
        norm_char: 'z',
        caps_char: 'Z',
        shift_char: 'Z',
        width: 'single'
    }, {
        norm_char: 'x',
        caps_char: 'X',
        shift_char: 'X',
        width: 'single'
    }, {
        norm_char: 'c',
        caps_char: 'C',
        shift_char: 'C',
        width: 'single'
    }, {
        norm_char: 'v',
        caps_char: 'V',
        shift_char: 'V',
        width: 'single'
    }, {
        norm_char: 'b',
        caps_char: 'B',
        width: 'single'
    }, {
        norm_char: 'n',
        caps_char: 'N',
        shift_char: 'N',
        width: 'single'
    }, {
        norm_char: 'm',
        caps_char: 'M',
        shift_char: 'M',
        width: 'single'
    }, {
        norm_char: ',',
        shift_char: '<',
        width: 'single'
    }, {
        norm_char: '.',
        shift_char: '>',
        width: 'single'
    }, {
        norm_char: '/',
        shift_char: '?',
        width: 'single'
    }, {
        action: 'shift',
        norm_char: 'Shift',
        shift_char: 'Shift',
        width: 'shift'
    }];

    vm.keys_row5 = [{
        action: 'space',
        norm_char: 'Space',
        shift_char: 'Space',
        width: 'space'
    }];

    vm.keyPressed = function(key) {
        console.log(key);

        if (key.action) {

            if (key.action == 'shift') {
                vm.shift = !vm.shift;
                vm.capslock = false;
                console.log("shift state: " + vm.shift);
                console.log("capslock state: " + vm.capslock);
            } else if (key.action == 'capslock') {
                vm.capslock = !vm.capslock;
                vm.shift = false;
                console.log("shift state: " + vm.shift);
                console.log("capslock state: " + vm.capslock);
            } else if (key.action == 'space') {
            	vm.typed += ' ';
            } else if (key.action == 'tab') {
            	vm.typed += '\t';
            } else if (key.action == 'return') {
            	vm.typed += '\n';
            } else if (key.action == 'backspace') {
            	vm.typed = vm.typed.slice(0, -1);
            }
        } else {
        	if (vm.capslock) {
        		vm.typed += key.caps_char;
        	} else if (vm.shift) {
        		vm.typed += key.shift_char;
        	} else {
        		vm.typed += key.norm_char;
        	}
        }
    }
});
