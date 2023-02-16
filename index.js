const labels = document.querySelectorAll("label")
const input = document.querySelectorAll("input").textContent

i = 0.3

labels.forEach(label =>{
    label.innerHTML = label.textContent
    //splits text of the label by each letter
    .split('')
    //returns each letter as a separate span e.g E,m,a,i,l
    .map((letter,delay) =>{
        return `<span style="transition-delay: ${delay * 50}ms;">${letter}</span>`
    })
    //joins all spans and removes space
    .join("")
    
})


