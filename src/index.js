import "./styles.css";

document.getElementById("my-button").addEventListener("click", printHelloWorld);
document.getElementById("add-data").addEventListener("click", addData);

function printHelloWorld() {
    console.log("Hello world");
    document.getElementById("myHeading").innerHTML = "My notebook";
}

function addData() {
    const dataList = document.getElementById("data-list");
    const li = document.createElement("li");
    const textArea = document.getElementById("text-area")
    li.appendChild(document.createTextNode(textArea.value))
    dataList.appendChild(li);
}