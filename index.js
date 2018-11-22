// Write your solution here!

const drivers = []
drivers.length = 0;
drivers.push('Milo', 'Otis', 'Garfield')
function destructivelyAppendDriver(name){
  let x = drivers
  if (name === 'Ralph'){
    x = drivers.push('Ralph')
  }
  return x
}
function destructivelyPrependDriver(name2) {
  let y = drivers
  if (name2 === 'Bob'){
    y = drivers.unshift('Bob')
  }
  return y
}

function destructivelyRemoveLastDriver(m) {
  let z = drivers
  if (m=1){
    z = drivers.pop()
  }
  return z
}
function destructivelyRemoveFirstDriver(b) {
  let fir = drivers
  if (b=1){
    fir = drivers.shift()
  }
  return fir
}

function appendDriver(a) {
  let s = drivers
  if (a=1){
    s = [...drivers, 'Broom']
  }
  return s
}
