let copybutton = document.getElementById("copy");
let newURl = document.getElementById("shorturl");

copybutton.onclick = ()=>{
    newURl.select();
    window.navigator.clipboard.writeText(newURl.value);
}