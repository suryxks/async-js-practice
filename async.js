function fakeFetch(msg, shouldReject) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject(`error from server: ${msg}`);
        }
        resolve(`from server: ${msg}`);
      }, 3000);
    });
  }


//   Ex2:

const strLength=(name,lengthCalc)=>lengthCalc(name);

const lengthCalc=(str)=>`OMG! my name is ${str.length} long`;
console.log(strLength("surya",lengthCalc))
//ex3

const willThanosKillMe=(name,kill,noKill)=>{
    if(name.length%2===0){
        return noKill()
    }
    if(name.length!==0){
        return kill()
    }
    
}
const thanosWillKill=()=>`Give my bose speakers and apple headphones to sister`
const thanosWillNotkill=()=>`yay i am alive`;
console.log(willThanosKillMe('surya',thanosWillKill,thanosWillNotkill))