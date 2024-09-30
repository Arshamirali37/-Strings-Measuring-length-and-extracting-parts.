//                                  {CHAPTER#22-24}


//               CHAPTER#22
//   (Strings: Measuring length and extracting parts).
// 1. var str=prompt("Enter some text");
// for(var i =0;i<str.length;i++){
//     if(str.slice(i,i+2)==="  ")
//         alert("Double space found!");
// }
//  var str=prompt("Enter some text");
// for(var i =0;i<str.length;i++){
//     if(str.slice(i,i+1)==="!")
//         alert("! found")};


//               CHAPTER#23
//   (Strings: Finding segments)
// var text=`This delicious snack is made with hollow and crispy Puris that are usually` 

// for(var i=0;i<text.length;i++){
//     if(text.slice(i,i+5)==="Puris"){
//         text=text.slice(0,i) + "Pani Puri"+text.slice(i+5)}
// }
// console.log(text)

//       {INDEXOF}
// var text=`This delicious snack is made with hollow and crispy Puris that are usually` 
// var indexnum=text.indexOf("Puris")
// var startingtext=text.slice(0,indexnum)
//  var replacetext="Pani Puri"
//  var endingtext=text.slice(indexnum+5)
//  console.log(startingtext + replacetext + endingtext)

//       {LASTINDEXOF}
//  var text=`This delicious snack is made with hollow and crispy Puris that are usually.Puris` 
// var indexnum=text.lastIndexOf("Puris")

// var startingtext=text.slice(0,indexnum)
//  var replacetext="Pani Puri"
//  var endingtext=text.slice(indexnum+5)
//  console.log(startingtext + replacetext + endingtext)

//      {REPLACE METHOD}
// var text = `This delicious snack is made with hollow and crispy Puris that are usually.Puris`

// console.log(text.replace("Puris","Pani Puris"))

//      {REPLACEALL METHOD}
// var text = `This delicious snack is made with hollow and crispy Puris that are usually.Puris`

// console.log(text.replaceAll("Puris","Pani Puris"))
// console.log(text.replace("/Puris/g","Pani Puris"))
