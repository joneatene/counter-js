document.getElementById("start").addEventListener("click", () => {
    setInterval(count, 1000);
})


const count = () => {
    alert('1 second');
}