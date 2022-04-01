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

const strLength = (name, lengthCalc) => lengthCalc(name);

const lengthCalc = (str) => `OMG! my name is ${str.length} long`;
console.log(strLength("surya", lengthCalc))
//ex3

const willThanosKillMe = (name, kill, noKill) => {
  if (name.length % 2 === 0) {
    return noKill()
  }
  if (name.length !== 0) {
    return kill()
  }

}
const thanosWillKill = () => `Give my bose speakers and apple headphones to sister`
const thanosWillNotkill = () => `yay i am alive`;
console.log(willThanosKillMe('surya', thanosWillKill, thanosWillNotkill))

//ex4
const printAfterDelay = (message, delay) => setTimeout(() => {
  console.log(message)
}, delay);
console.log(printAfterDelay("surya", 6000), "printed now");
//ex6.1

const printAfterinterval = (message, interval) => setInterval(() => console.log(message), interval)
const intervalId = printAfterinterval("surya", 3000);
console.log("before inverval");
const intervalClear = setTimeout(() => clearInterval(intervalId), 20000);
const coutnDown = (number) => setInterval(() => {

  console.log(number)
  number -= 1;
}, 1000);
const count=coutnDown(15);
const countclear=setTimeout(()=>{
  clearInterval(count);
  console.log("bang")
},16000);
//fakeFetch to replicate fetch
function fakeFetch(msg, shouldReject) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(`error from server: ${msg}`)
      }
      resolve(`from server: ${msg}`)
    }, 3000)
  })
}
//ex10
function ex11() {
  fakeFetch("surya", false)
    .then((data) => (console.log(data)));
}

//ex12
function ex12() {
  fakeFetch("surya", true)
    .then(data => console.log(data))
    .catch(err => console.error(err));
}
ex12();
//ex13
const getServerResponseLength = (msg) => {
  const ans = fakeFetch(msg, false)
    .then(data => data.length)


  console.log(ans);
}
getServerResponseLength("surya");

//ex14
const syncCallsToServer = (msg1, msg2) => {
  fakeFetch(msg1, false)
    .then(data => {
      console.log(data)
      fakeFetch(msg2)
        .then(data2 => console.log(data2));
    })
}
syncCallsToServer("surya", "surya again");
//ex15
const afunction = async (msg) => {
  const response = await fakeFetch(msg, false);
  console.log(response);

}
afunction("surya async");
//ex16
const waterfall = async (msg1, msg2) => {
  try {
    let response = await fakeFetch(msg1);
    if (response) {
      let response2 = await fakeFetch(msg2);
      if (response2) {
        console.log("successful", response2)
      }
    }
  } catch (err) {
    console.log(err)
  }
}
waterfall("surya","suryaagain");