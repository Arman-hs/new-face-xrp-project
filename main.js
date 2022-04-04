  
const copyButton1 = document.getElementById('btncopy');

copyButton1.addEventListener('click', (event) =>{
const Numb = document.getElementById('numb').textContent;
navigator.clipboard.writeText(Numb);
})

const copyButton2 = document.getElementById('btncopy_1');

copyButton2.addEventListener('click', (event) =>{
const Tag = document.getElementById('tag').textContent;
navigator.clipboard.writeText(Tag);
})
// var image = document.getElementById('btncopy');

//     image.addEventListener('click', function(){
//         changeImage();
//         setTimeout(() => {
//             changeImage_1();
//         }, 2500);
       
//     });

//     function changeImage(){
//             image.src = 'copy-icon-4786.png';
            
//     }
//     function changeImage_1(){
//             image.src = 'transparent-clipboard-icon-copy-icon-duplicate-icon-5db75fcfbf2c48.4955590615722987037831.png'

//     }
    
var icon = document.getElementsByClassName("fa-regular fa-clipboard");

    icon.addEventListener('click', function(){
        Change();
        setTimeout(() => {
            change_2();
        }, 2500);

    });

    function Change(){
        icon.className = "fa-solid fa-clipboard-check";
    }
    function change_2(){
        icon.className = "bi bi-clipboard";
    }
