const envelope = document.getElementById("envelope");
const btn = document.getElementById("toggleBtn");

btn.onclick = () => {

envelope.classList.toggle("open");

if(envelope.classList.contains("open")){
btn.textContent = "Close Envelope 💌";
}else{
btn.textContent = "Open Envelope 💌";
}

};