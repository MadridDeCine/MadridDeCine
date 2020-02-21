buttonAdd = document.getElementById('newPlace')
buttonDel = document.getElementById('delPlace')
buttonAdd.addEventListener('click', () => {

    let ref = document.getElementById('places')

    let newDiv = document.createElement('div')

    let str=
    `<div class="form-group id="newPlace">
      <label for="placeName-input">placeName</label>
      <input name="placeName" type="text" class="form-control" id="placeName-input" placeholder="my placename">
      <h6>Coordinates</h6>
      <input name="placeLat" type="text" class="form-control" id="placeLat-input" placeholder="my lat">
      <input name="placeLng" type="text" class="form-control" id="placeLng-input" placeholder="my lng">
      <hr>
    </div>`

    newDiv.innerHTML+=str
    ref.appendChild(newDiv)
  
  }, false);

  buttonDel.addEventListener('click', () => {
    allDivs = document.querySelectorAll('#placeName-input')
    allDivs[allDivs.length-1].parentNode.remove()
   
  
  }, false);