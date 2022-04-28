function copy_and_change(icon_elem, elemid_to_copy) {
    // copy to clipboard
    let elem_content = document.getElementById(elemid_to_copy).textContent;
    navigator.clipboard.writeText(elem_content);
    // change icon
    icon_elem.className = "fa-solid fa-clipboard-check";
    setTimeout(() => icon_elem.className = "fa-regular fa-clipboard", 2000)
}

function hi(){
    alert('hi');
}