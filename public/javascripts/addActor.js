buttonAdd = document.getElementById('newActor')
buttonDel = document.getElementById('delActor')
buttonAdd.addEventListener('click', () => {

    let ref = buttonAdd.parentNode
    let newDiv = document.createElement('div')

    let str=
    `<div class="form-group">
      <label for="actor-input">Actor</label>
      <input name="actors" type="text" class="form-control" id="actor-input" placeholder="my actor">
    </div>`

    newDiv.innerHTML+=str
    ref.appendChild(newDiv)
  
  }, false);

  buttonDel.addEventListener('click', () => {
    allDivs = document.querySelectorAll('#actor-input')
    allDivs[allDivs.length-1].parentNode.remove()
   
  
  }, false);