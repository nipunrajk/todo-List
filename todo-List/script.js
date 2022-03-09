// select all elements
const form = document.querySelector('#new-item-form')
const list = document.querySelector('#list')
const input = document.querySelector('#item-input')

// when submit the form add new elements

form.addEventListener('submit', (e) => {
  e.preventDefault()
  // 1.create a new item
  const item = document.createElement('div')
  item.innerText = input.value
  item.classList.add('list-item')

  // 2.Add that item to the list
  list.appendChild(item)

  // 3.Clear input
  input.value = ''

  // 4.Setup event listener to delete the item when clicked
  item.addEventListener('click', () => {
    list.removeChild(item)
  })
})
