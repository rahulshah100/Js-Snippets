//Out of all given links on a Page , this code will display href and text of that link ,which will have a given string in the link's href. 

//string to check in link
let word='og';

let a=[]

//getting all links in an array
for(let i=0;i < document.links.length;i++){
    // console.log(document.links[i])
    a.push(document.links[i])        
}


//Checking the array items showing them, if individual item of array consists of the given word
let strvar=''
for(let i=0;i < a.length;i++){
    strvar=a[i].toString();
    if(strvar.includes(word)){console.log('Text :',document.links[i].innerText,'\n','Link :',strvar)}
}    