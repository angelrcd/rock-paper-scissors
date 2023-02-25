export default async function countdown(){
  setTimeout(()=>{
    console.log("hola");
  },3000)
}

await countdown()
console.log("adios");