const coding = ['js', 'ruby', 'python', 'java' ]

coding.forEach( function (item) {
    // console.log(item)
    
})

coding.forEach((val)=>{
    // console.log(val);
    
})/

// coding.forEach(printMe())

coding.forEach((item, index, array) => {
    //  console.log(item, index, array);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
] 

myCoding.forEach((item) => {
    // console.log(`The language name is ${item.languageName} and the file name is ${item.languageFileName}`); 
})
