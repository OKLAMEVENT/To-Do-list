function add_item(){ 
    let add = document.querySelector(".ilist").value
    let ulist = document.querySelector(".iilist")
    if (add !== ""){
    let item = document.createElement("li")
    item.textContent = add
    ulist.appendChild(item)
    document.querySelector(".ilist").value = ""}
    // console.log(ulist)
}
let isi = document.querySelector(".hone")
    isi.style.position = "absolute";
    isi.style.top = "20px";
    isi.style.left = "43%";
let massage = document.querySelector(".iput");
    massage.style.position = "absolute";
    massage.style.top = "230px";
    massage.style.left = "41%";
    massage.style.backgroundcolor = "black";
let bg = document.querySelector(".mdiv");
    bg.style.backgroundColor = "#c2d9d129";
let but = document.querySelector(".iilist2");
    but.style.backgroundColor = "#7e978e";
let fc = document.querySelector('.iilist');
    fc.style.position = "absolute";
    fc.style.top = "260px";
    fc.style.left = "43%";
    fc.style.color = "black";