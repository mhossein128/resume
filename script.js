let file = document.querySelector('#file')

file.addEventListener('change',(e)=>{
    let file =  e.target.files[0]
    let url = URL.createObjectURL(file)
    console.log(url.slice(5))

})