function Clock(){
  const now = new Date();
  const checkbox = document.getElementById("check");
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);


  if(checkbox.checked){
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12
    hours = hours.toString().padStart(2, 0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
  }
  else{
    hours = hours.toString().padStart(2, '0'); 
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;
  }
}
function displayDate(){
  const now = new Date();
  const year = now.getFullYear().toString();
  const month = (now.getMonth() + 1).toString().padStart(2, 0);
  const day = now.getDate().toString().padStart(2, 0);
  const dateString = `${day}.${month}.${year}`
  document.getElementById("date").textContent = dateString
}

Clock();
displayDate();
setInterval(Clock, 1000)
setInterval(displayDate, 86400000)

function mode(){
  if(dark.checked){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  }
  else{
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
}
