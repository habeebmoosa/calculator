const input = document.querySelector('#inputText');

input.addEventListener('change', function(e) {
    console.log(e.target.value);
    }
);

const btn = document.querySelectorAll('.btn');

btn.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        if(e.target.name == '7')
            input.value += '7';
        else if(e.target.name == '8')
            input.value += '8';
        else if(e.target.name == '9')
            input.value += '9';
        else if(e.target.name == '4')
            input.value += '4';
        else if(e.target.name == '5')
            input.value += '5';
        else if(e.target.name == '6')
            input.value += '6';
        else if(e.target.name == '1')
            input.value += '1';
        else if(e.target.name == '2')
            input.value += '2';
        else if(e.target.name == '3')
            input.value += '3';
        else if(e.target.name == '0')
            input.value += '0';
        else if(e.target.name == '.')
            input.value += '.';
        else if(e.target.name == '+')
            input.value += '+';
        else if(e.target.name == '-')
            input.value += '-';
        else if(e.target.name == 'X')
            input.value += '*';
        else if(e.target.name == '/')
            input.value += '/';
        else if(e.target.name == 'C')
            input.value = '';
        else if(e.target.name == '=')
            input.value = eval(input.value);
        else if(e.target.name == 'del')
            input.value = input.value.substring(0, input.value.length - 1);
    });
}
);

