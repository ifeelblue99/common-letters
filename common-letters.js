let str1 = "AaodRdpd"
let str2 = "jdsAddqp"

function commonLetters(s1, s2){
  
  let common = []
  
  str1.split("").forEach(el=>{
    if (s2.split("").includes(el)) {
      common.push(el)
    }
  })
  
  return new Set(common)
}

console.log(commonLetters(str1, str2))
