function verificar() {
        var binario = Number(demo1.value);
        const check = binario.toString().split('').filter(item => item != 0 && item != 1);

        if (check.length > 0) {
                alert(`Digite um número que contenha apenas 0 e 1!`)
                demo1.value = ` `
        }
        console.log(binario);
        document.getElementById("demo1").innerHTML = ` ${binario}`;

}

function aparecer_decimal() {
        var binario = Number(demo1.value);
        let decimal = parseInt(binario, 2);
        console.log(decimal);
        document.getElementById("demo2").innerHTML = ` ${decimal}`;

        if (demo2.style.display == 'flex') {
                demo2.style.display = 'none'
        }
        else {
                demo2.style.display = 'flex'
        }

}

function aparecer_hexa() {
        var binario = Number(demo1.value);
        let decimal = parseInt(binario, 2);
        console.log(decimal);
        let hexadecimal = decimal.toString(16);
        console.log(hexadecimal);
        document.getElementById("demo3").innerHTML = ` ${hexadecimal}`;

        if (demo3.style.display == 'flex') {
                demo3.style.display = 'none'
        }
        else {
                demo3.style.display = 'flex'
        }
}

function aparecer_octal() {
        var binario = Number(demo1.value);
        let decimal = parseInt(binario, 2);
        console.log(decimal);
        let octal = decimal.toString(8);
        console.log(octal);
        document.getElementById("demo4").innerHTML = ` ${octal}`;

        if (demo4.style.display == 'flex') {
                demo4.style.display = 'none'
        }
        else {
                demo4.style.display = 'flex'
        }

}


