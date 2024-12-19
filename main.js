let form = document.forms[0];
let num1 = document.querySelector("input:first-of-type");
let result = document.querySelector("label");

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

function handleClick(e) {
    let n1 = num1.value || 0;
    e.id === 'circ' ?
        result.innerHTML = (2 * Math.PI * +n1).toFixed(2) :
        result.innerHTML = (Math.PI * (+n1) ** 2).toFixed(2);
}
