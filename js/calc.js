const calculator = document.querySelector('.calculator')

const keys = document.querySelector('.calculator-keys')

const display = document.querySelector('.calculator-display')



keys.addEventListener('click', event => {
    console.log(event)
    if (!event.target.closest('button')) return
     const key = event.target
     console.log(key)
    
     const keyValue = key.textContent

    const displayValue = display.textContent

    if (key.dataset.type === 'number') {

          if (displayValue === "0") {
            display.textContent = keyValue;
          } else {
            display.textContent = displayValue + keyValue;
          }
    }

    if (key.dataset.type === 'operator') {
        console.log(key)

        calculator.dataset.previousKeyType = 'operator'

    }
  

})

