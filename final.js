function copyToClipboard(text) {
    elem = document.getElementById('temp_text')
    elem.style.visibility = 'visible'
    elem.value = text
    elem.select();
    elem.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand('copy');
    elem.value = ''
    elem.style.visibility = 'hidden'
    // navigator.clipboard.writeText(text);
 } function copy_and_change(icon_elem, elemid_to_copy) {
    // copy to clipboard
    let elem_content = document.getElementById(elemid_to_copy).textContent;
    // navigator.clipboard.writeText(elem_content);
    copyToClipboard(elem_content)
    // change icon
    icon_elem.className = "fa-solid fa-clipboard-check fa-lg";
    setTimeout(() => icon_elem.className = "fa-regular fa-clipboard fa-lg", 2000)
}