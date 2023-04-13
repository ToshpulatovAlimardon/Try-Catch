function myFunction() {
    let message, x;
    let errElement = document.getElementById("demo");
    message = document.getElementById("p01");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try {
        if (x == "") {
            errElement.classList.add("eror-border");
            throw "bo'sh";
        }
        if (isNaN(x)) {
            errElement.classList.add("eror-border");
            throw "number emas";
        }
        x = Number(x);
        if (x < 5) {
            errElement.classList.add("eror-border");
            throw "5dan kichik";
        }
        if (x > 10) {
            errElement.classList.add("eror-border");
            throw "10dan katta";
        }
        if (x > 5 && x < 10 && !isNaN(x)) {
            errElement.classList.add("true-border");
        }
    } catch (e) {
        message.innerHTML = "*Qiymat " + e;
    }
}
