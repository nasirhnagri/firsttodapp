let input = document.getElementById('input')
let todoList = document.querySelector('.todoList')
let list = []
const todoApp = {
  addFun() {
    if (input.value) {
      list.push(input.value)
      input.value = ''
    } else {
      alert('Plz input Valid Task?')
    }
    this.myFun()
  },
  myFun() {
    todoList.innerHTML = ''
    list.forEach((value, index) => {
      todoList.innerHTML += `
    
      <li class="myLi">${value}<div class="myDiv" onclick="todoApp.delete(${index})"><button class="myBTN">X</button></div></li> `
      console.log(index)
    })
  },

  delete(index) {
    list.splice(index, 1)
    this.myFun()
  },
  clearBtn() {
    list.splice(0, list.length)
    this.myFun()
  },
  rander() {
    console.log('rander 2')
  },
}
todoApp.rander()
