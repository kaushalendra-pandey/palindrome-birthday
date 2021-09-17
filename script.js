const dateBox = document.getElementById("date")
const answer = document.querySelector("p")

const reverseString = (str) => {
    const birthArr = str.split("-")
    final = ""
    for(let i = 0; i<birthArr.length;i++){
        let temp = birthArr[i].split("").reverse().join("")
        final += temp
    }
    return final
}

const checkPalindrome = () => {
    answer.innerHTML = ""
    const birthday = dateBox.value
    console.log(typeof birthday)
    const org = birthday.split("-").reverse().join("")
    if(!org) {
        answer.innerHTML = "Please select a date"
        answer.className = "error"
        return
    }
    const rev = reverseString(org)
    if(rev === org){
        answer.innerHTML = "Yes!! Badhai ho.. Palindrome h ji.. Palindrome h 🎆🎇"
        answer.className = "success"
    }else {
        answer.innerHTML = "Ohho.. Koi na ji.. Palindrom nhi to kya hua.. Party to deni padegi! 🥂🍾"
        answer.className = "error"
    }
}