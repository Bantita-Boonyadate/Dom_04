// var searchButton = document.getElementById('searchButton')
// var inputText = document.getElementById('inputText')
// var output = document.getElementById('output')
// var badgeCount = document.getElementById('count')
// function addText(){
//     let text = inputText.value
//     console.log(text)
//     let newButton = document.createElement('button')
//     newButton.classList.add('btn')
//     newButton.classList.add('btn-outline-primary')
//     newButton.classList.add('m-2')
//     newButton.setAttribute('type','button')
//     newButton.innerText = text
//     output.appendChild(newButton)
//     badgeCount.innerText = output.children.length
// }

// searchButton.addEventListener('click',addText)
// inputText.addEventListener('blur',addText)

// var inputName = document.getElementById('name')
// var inputUsername = document.getElementById('username')
// var inputNamePrefix = document.getElementById('namePrefix')
// var outputTableBody = document.getElementById('outputTableBody')
// var submitData = document.getElementById('submitData')

// function addDataToTable(index){
//     let row = document.createElement('tr')
//     let cell = document.createElement('th')
//     cell.setAttribute('score',row)
//     cell.innerHTML = index
//     row.appendChild(cell)
//     cell = document.createElement('td')
//     cell.innerHTML = inputName.value
//     row.appendChild(cell)
//     cell = document.createElement('td')
//     cell.innerHTML = inputUsername.value
//     row.appendChild(cell)
//     cell = document.createElement('td')
//     cell.innerHTML = inputNamePrefix.options[inputNamePrefix.selectedIndex].text
//     row.appendChild(cell)
//     outputTableBody.appendChild(row)
// }
// var index = 1
// submitData.addEventListener('click',(event)=>{
        
//     addDataToTable(index++)
    
// })


var student ={};
 student.name='คุณลุง'
 student.username='a@b.com'
 student.gender='ชาย'
 
// document.getElementById('output').innerText = student;

var student2 = {};
student2.name='คุณนาย'
student2.username='n@n.com'
student2.gender='หญิง'


function addStudentData(student){
    const output = document.getElementById("output")
    let row = document.createElement("div")
    row.classList.add("row")
    let columnName = document.createElement("div")
    columnName.classList.add("col-1")
    columnName.classList.add("offset-1")
    columnName.innerHTML = "ชื่อ"
    let columnValue = document.createElement("div")
    columnValue = document.createElement("row")
    columnValue.classList.add("col")
    columnValue.innerHTML = student.name
    row.appendChild(columnName)
    row.appendChild(columnValue)
    output.appendChild(row)

    row = document.createElement("div")
    row.classList.add("row")
    columnName = document.createElement("div")
    columnName.classList.add("col-1")
    columnName.classList.add("offset-1")
    columnName.innerHTML = "Id"
    columnValue = document.createElement("div")
    columnValue = document.createElement("row")
    columnValue.classList.add("col")
    columnValue.innerHTML = student.username
    row.appendChild(columnName)
    row.appendChild(columnValue)
    output.appendChild(row)

    row = document.createElement("div")
    row.classList.add("row")
    columnName = document.createElement("div")
    columnName.classList.add("col-1")
    columnName.classList.add("offset-1")
    columnName.innerHTML = "gender"
    columnValue = document.createElement("div")
    columnValue = document.createElement("row")
    columnValue.classList.add("col")
    columnValue.innerHTML = student.gender
    row.appendChild(columnName)
    row.appendChild(columnValue)
    output.appendChild(row)
}

var students=[
	student,
	student2,
{
	name:'สมรักษ์',
	username:'m@n.com',
	gender:'ชาย'
}
]

function addStudentTotable(index,student){
	const tableBody = document.getElementById('tableBody')
	let row = document.createElement('tr')	
	let cell = document.createElement('th')
	cell.setAttribute('score','row')
	cell.innerHTML = index
	row.appendChild(cell)
	cell = document.createElement('td')
	cell.innerHTML = student.name
	row.appendChild(cell)
	cell = document.createElement('td')
	// cell.innerHTML = student.username
	let img = document.createElement('img')
    img.setAttribute('src', student.imageLink)
    cell.appendChild(img)
    row.appendChild(cell)
	cell = document.createElement('td')
	cell.innerHTML = student.gender
	row.appendChild(cell)
	tableBody.appendChild(row)
}

function addStudentList(studentList){
	let counter = 1
	for(student of studentList){
		addStudentTotable(counter++,student)
	}
}

// window.addEventListener("load",function(){
// 	addStudentList(students)
// })

function onLoad() {
    
    fetch('asset/students2.json').then(response => {
       return response.json()
    })
    .then(data => {
      let students = data
      addStudentList(data)
    })
    
}