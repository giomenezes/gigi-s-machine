function verificar() {
        var decimal = Number(demo1.value);
        if (isNaN(decimal)) {
                alert(`Digite um número decimal válido!`)
                demo1.value = ` `

        }
        console.log(decimal);
        document.getElementById("demo1").innerHTML = ` ${decimal}`;
}

function aparecer_bin() {
        var decimal = Number(demo1.value);
        let binaria = decimal.toString(2);
        console.log(binaria);
        document.getElementById("demo4").innerHTML = ` ${binaria}`;

        if (demo4.style.display == 'flex') {
                demo4.style.display = 'none'
        }
        else {
                demo4.style.display = 'flex'
        }

}

function aparecer_hexa() {
        var decimal = Number(demo1.value);
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
        var decimal = Number(demo1.value);
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


