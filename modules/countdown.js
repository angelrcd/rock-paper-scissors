const countdownElement = document.querySelector(".countdown")
const resultElement = document.querySelector(".result")


export default function countdown(){
  countdownElement.classList.remove("hidden")
  resultElement.classList.add("hidden")
  let count = 3
  countdownElement.textContent=count
  return new Promise(resolve => {
    const interval = setInterval(() => {
      count--;
      if(count !==0){
        countdownElement.textContent=count
      } else {
        clearInterval(interval)
        countdownElement.classList.add("hidden")
        resolve()
      }
    }, 1000)
  })
}

await countdown()