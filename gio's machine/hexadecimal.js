function verificar() {
        var hexadecimal = demo1.value;
        const decimal = parseInt(hexadecimal, 16);
        if (isNaN(decimal)) {
                alert(`Digite um número hexadecimal válido!`)
                demo1.value = ` `
        }
        console.log(hexadecimal);
        document.getElementById("demo1").innerHTML = ` ${hexadecimal}`;

}

function aparecer_bin() {
        var hexadecimal = demo1.value;
        let decimal = parseInt(hexadecimal, 16);
        console.log (decimal);
        let binario = decimal.toString(2);
        console.log(binario);
        document.getElementById("demo4").innerHTML = ` ${binario}`;

        if (demo4.style.display == 'flex') {
                demo4.style.display = 'none'
        }
        else {
                demo4.style.display = 'flex'
        }

}

function aparecer_decimal() {
        var hexadecimal = demo1.value;
        let decimal = parseInt(hexadecimal, 16);
        console.log (decimal);
        document.getElementById("demo3").innerHTML = ` ${decimal}`;

        if (demo3.style.display == 'flex') {
                demo3.style.display = 'none'
        }
        else {
                demo3.style.display = 'flex'
        }
}

function aparecer_octal() {
        var hexadecimal = demo1.value;
        let decimal = parseInt(hexadecimal, 16);
        console.log (decimal);
        let octal = decimal.toString(8);
        console.log(octal);
        document.getElementById("demo2").innerHTML = ` ${octal}`;

        if (demo2.style.display == 'flex') {
                demo2.style.display = 'none'
        }
        else {
                demo2.style.display = 'flex'
        }

}


