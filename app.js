document.body.style.backgroundColor = "#eef4fa"

const heading = document.createElement('h1')

document.body.appendChild(heading)
heading.innerText = "Our Reviews"
heading.style.marginTop = "100px"
heading.style.textAlign = "center"
heading.setAttribute('class' , "heading")

const reviewBox = document.createElement('div')

document.body.appendChild(reviewBox)
reviewBox.setAttribute('id' , 'r-box')

const image = document.createElement('img')
reviewBox.appendChild(image)
image.setAttribute('class' , 'user-img')
image.src = "./images/sir sufiyan.jpeg"
const userName = document.createElement('h4')
reviewBox.appendChild(userName)
userName.setAttribute('class' , 'userName')
userName.textContent = 'Muhammad Sufiyan'

const designation = document.createElement('h5')
reviewBox.appendChild(designation)
designation.setAttribute('class', 'designation')
designation.textContent = "Founder & CEO"

const para = document.createElement('p')
reviewBox.appendChild(para)
para.setAttribute('class', 'para')
para.textContent = "Sufiyan Sir is a great teacher. He explains everything very deeply and is very supportive and cooperative."

const btnSection = document.createElement('section')
reviewBox.appendChild(btnSection)
btnSection.setAttribute('id','btnSection')
const buttonLeft = document.createElement('button')
btnSection.appendChild(buttonLeft)
buttonLeft.setAttribute('class' ,'buttons')
buttonLeft.setAttribute('onClick' , 'goBack()')
buttonLeft.textContent = "<"
const buttonRight = document.createElement('button')
btnSection.appendChild(buttonRight)
buttonRight.setAttribute('class' , 'buttons' )
buttonRight.setAttribute('onClick' , 'goNext()')

buttonRight.textContent = ">" 

const btnSurprise = document.createElement('button')
reviewBox.appendChild(btnSurprise)
btnSurprise.setAttribute('class' , 'btnSurprise')
btnSurprise.textContent = "Surprise Me"

const userCollection = [
   {
    image: './images/sir sufiyan.jpeg',
    userName: 'Muhammad Sufiyan',
    designation: 'FOUNDER & CEO',
para: "Sufiyan Sir is a great teacher. He explains everything very deeply and is very supportive and cooperative."
    
   },
    {
    image: './images/Sir Jaffar.jpeg',
    userName: 'Jaffar Aman',
    designation: 'Co-Founder & CTO',
para: "Sir Jaffar is also a great person and excellent in teaching. Sometimes he is strict with students, but that’s only for their betterment — to help them change their lives and support their families. His way of explaining is also excellent."
    
   },
     {
    image: './images/Muhammad hasan.jpeg',
    userName: 'Muhammad Hassan',
    designation: 'Mern Stack Developer',
para: "Muhammad Hassan is truly a skilled developer with strong logic-building abilities. Wishing him the best of luck for his future."
    
   },
    {
    image: './images/ayan sheikh.jpeg',
    userName: 'Ayan Sheikh',
    designation: 'Mobile Application Developer',
para: "Ayan Sheikh is an expert mobile app developer, and his deployment skills are impressive. Wishing him the best of luck for his future."
    
   },
]
let index = 0

function goNext(){

    
    const image = document.querySelector('.user-img')
    const userName = document.querySelector('.userName')
    const designation = document.querySelector('.designation')
    const para = document.querySelector('.para')

    if(index < userCollection.length){
        ++index
        const obj = userCollection[index]
        image.src = `${obj.image}`
        userName.innerText = `${obj.userName}`
        designation.innerText = `${obj.designation}`
        para.innerText = `${obj.para}`
        

    }

     
}

function goBack() {
    const image = document.querySelector('.user-img')
    const userName = document.querySelector('.userName')
    const designation = document.querySelector('.designation')
    const para = document.querySelector('.para')

      if(index > 0){
        index--
        const obj = userCollection[index]
        
        image.src = `${obj.image}`
        userName.innerText = `${obj.userName}`
        designation.innerText = `${obj.designation}`
        para.innerText = `${obj.para}`
        


    }

}