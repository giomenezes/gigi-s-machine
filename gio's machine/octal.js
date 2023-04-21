function verificar() {
        var octal = Number(demo1.value);
        const decimal = parseInt(octal, 8);
        if (isNaN(decimal)) {
                alert(`Digite um número que não contenha números acima de 7!`)
                demo1.value = ` `

        }
        console.log(octal);
        document.getElementById("demo1").innerHTML = ` ${octal}`;

}

function aparecer_decimal() {
        var octal = Number(demo1.value);
        let decimal = parseInt(octal, 8);
        console.log(decimal);
        document.getElementById("demo2").innerHTML = ` ${decimal}`;

        if (demo2.style.display == 'flex') {
                demo2.style.display = 'none'
        }
        else {
                demo2.style.display = 'flex'
        }

}

function aparecer_bin() {
        var octal = Number(demo1.value);
        let decimal = parseInt(octal, 8);
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

function aparecer_hexa() {
        var octal = Number(demo1.value);
        let decimal = parseInt(octal, 8);
        console.log (decimal);
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




