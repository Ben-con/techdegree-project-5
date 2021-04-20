


const list = document.querySelectorAll(".gal figcaption")
const bar = document.forms["search"].querySelector('input');
console.log (list)

console.log(bar)
bar.addEventListener ("keyup",function(e) {
    const term = e.target.value.toLowerCase();
    const photos = list.getElementsByTagName('figcaption');
    Array.from(photos).forEach(function(photo){
        const title = photo.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            photo.style.display = "grid"
        }else{
            photo.style.display = "none"

        }
    })
    console.log(e.target.value)
})