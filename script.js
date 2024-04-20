
const tabs = document.querySelectorAll('.tabs')
const buttons = document.querySelectorAll('.tabs .button')
const card = document.querySelectorAll('.slider__card')

const travelers = document.querySelector('.slider__card-travelers')
const employees = document.querySelector('.slider__card-employees')
const organization = document.querySelector('.slider__card-organization');

for (const tab of tabs) {
  tab.addEventListener('click', (event) => {
   
    const nameOfClass = event.target.className
    console.log(nameOfClass)

    card.forEach(element => {
      element.classList.remove('slider__card_active', 'slider__card_middle', 'slider__card_bottom');
    });
    buttons.forEach(element => {
      element.classList.remove('button_active');
      if (nameOfClass.includes(element.className)){
        element.classList.add('button_active')
      }
    });
    
      if(nameOfClass.includes('travelrs')){
      travelers.classList.add('slider__card_active')

      organization.classList.add('slider__card_middle')
      employees.classList.add('slider__card_bottom')
      
    }
    else if(nameOfClass.includes('organization')) {
      organization.classList.add('slider__card_active')

      travelers.classList.add('slider__card_middle')
      employees.classList.add('slider__card_bottom')
     
    }
    else if(nameOfClass.includes('employees')){
       employees.classList.add('slider__card_active')

       travelers.classList.add('slider__card_middle')
       organization.classList.add('slider__card_bottom')
    }
  })
}

