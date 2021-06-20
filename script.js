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


// var student ={};
//  student.name='คุณลุง'
//  student.username='a@b.com'
//  student.gender='ชาย'
 
// // document.getElementById('output').innerText = student;

// var student2 = {};
// student2.name='คุณนาย'
// student2.username='n@n.com'
// student2.gender='หญิง'


// function addStudentData(student){
//     const output = document.getElementById("output")
//     let row = document.createElement("div")
//     row.classList.add("row")
//     let columnName = document.createElement("div")
//     columnName.classList.add("col-1")
//     columnName.classList.add("offset-1")
//     columnName.innerHTML = "ชื่อ"
//     let columnValue = document.createElement("div")
//     columnValue = document.createElement("row")
//     columnValue.classList.add("col")
//     columnValue.innerHTML = student.name
//     row.appendChild(columnName)
//     row.appendChild(columnValue)
//     output.appendChild(row)

//     row = document.createElement("div")
//     row.classList.add("row")
//     columnName = document.createElement("div")
//     columnName.classList.add("col-1")
//     columnName.classList.add("offset-1")
//     columnName.innerHTML = "Id"
//     columnValue = document.createElement("div")
//     columnValue = document.createElement("row")
//     columnValue.classList.add("col")
//     columnValue.innerHTML = student.username
//     row.appendChild(columnName)
//     row.appendChild(columnValue)
//     output.appendChild(row)

//     row = document.createElement("div")
//     row.classList.add("row")
//     columnName = document.createElement("div")
//     columnName.classList.add("col-1")
//     columnName.classList.add("offset-1")
//     columnName.innerHTML = "gender"
//     columnValue = document.createElement("div")
//     columnValue = document.createElement("row")
//     columnValue.classList.add("col")
//     columnValue.innerHTML = student.gender
//     row.appendChild(columnName)
//     row.appendChild(columnValue)
//     output.appendChild(row)
// }

// var students=[
// 	student,
// 	student2,
// {
// 	name:'สมรักษ์',
// 	username:'m@n.com',
// 	gender:'ชาย'
// }
// ]

// function addStudentTotable(index,student){
// 	const tableBody = document.getElementById('tableBody')
// 	let row = document.createElement('tr')	
// 	let cell = document.createElement('th')
// 	cell.setAttribute('score','row')
// 	cell.innerHTML = index
// 	row.appendChild(cell)
// 	cell = document.createElement('td')
// 	cell.innerHTML = student.name
// 	row.appendChild(cell)
// 	cell = document.createElement('td')
// 	// cell.innerHTML = student.username
// 	let img = document.createElement('img')
//     img.setAttribute('src', student.imageLink)
//     cell.appendChild(img)
//     row.appendChild(cell)
// 	cell = document.createElement('td')
// 	cell.innerHTML = student.gender
// 	row.appendChild(cell)
// 	tableBody.appendChild(row)
// }

// function addStudentList(studentList){
// 	let counter = 1
// 	for(student of studentList){
// 		addStudentTotable(counter++,student)
// 	}
// }

// window.addEventListener("load",function(){
// 	addStudentList(students)
// })

// function onLoad() {
    
//     fetch('asset/students2.json').then(response => {
//        return response.json()
//     })
//     .then(data => {
//       let students = data
//       addStudentList(data)
//     })
    
// }

function addStudentData(student) {
	let idElem = document.getElementById('id')
	idElem.innerHTML = student.id
	let studentIdElem = document.getElementById('studentId')
	studentIdElem.innerHTML = student.studentId
	let nameElem = document.getElementById('name')
	nameElem.innerHTML = `${student.name} ${student.surname}`
	let gpaElem = document.getElementById('gpa')
	gpaElem.innerHTML = student.gpa
	let profileElem = document.getElementById('image')
	profileElem.setAttribute('src', student.image)
}

function addStudentToTable(index, student) {
	const tableBody = document.getElementById('tableBody')
	let row = document.createElement('tr')
	let cell = document.createElement('th')
	cell.setAttribute('score', 'row')
	cell.innerHTML = index
	row.appendChild(cell)
	cell = document.createElement('td')
	cell.innerHTML = `${student.name} ${student.surname}`
	row.appendChild(cell)
	cell = document.createElement('td')
	//cell.innerHTML = student.username
	let img = document.createElement('img')
	img.setAttribute('src', student.image)
    img.height = 200
    // img.classList.add('img-thumbnail')
	cell.appendChild(img)
	row.appendChild(cell)
	cell = document.createElement('td')
	cell.innerHTML = student.gender
	row.appendChild(cell)

	cell = document.createElement('td')
	let button = document.createElement('button')
	button.classList.add('btn')
	button.classList.add('btn-danger')
	button.setAttribute('type', 'button')
	button.innerText = 'delete'
	button.addEventListener('click', (event) => { 

		let confirmMsg = confirm(`ท่านต้องการลบคุณ ${student.name} หรือไม่`)
		if (confirmMsg) {
			deleteStudent(student.id)
		}
	})
	cell.appendChild(button)
	row.appendChild(cell)
	tableBody.appendChild(row)

}


function addStudentToDB(student) {
    fetch('https://dv-student-backend-2019.appspot.com/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(student)
    }) .then((response) => {
        return response.json()
    }).then(data => {
        // console.log('success',data)
		showAllStudents()
    })
}

document.getElementById('searchButton').addEventListener('click', (event) => {
	let id = document.getElementById('inputText').value
	console.log(id)
	fetch(`https://dv-student-backend-2019.appspot.com/student/${id}`)
	.then((response) => {
		return response.json()
	}).then((student) => { 
		hideAll()
		addStudentData(student)
		singleStudentResult.style.display = 'block'
	})
})

function addStudentList(studentList)  {
    let counter = 1
	document.getElementById('tableBody').innerHTML = ''
    for (student of studentList) {
        addStudentToTable(counter++,student)
    }
}

function deleteStudent(id) {
    fetch(`https://dv-student-backend-2019.appspot.com/student/${id}`, {
        method: 'DELETE'
    }).then((response) => {
        if (response.status === 200) {
            return response.json()
        }else{
            throw Error(response.statusText)
        }
    }).then(data => {
        alert(`student name ${data.name} is now deleted`)
		showAllStudents()
    }).catch((error) => {
        alert('your input student id is not in the database')
    })
}

function onAddStudentClick() {
	let student = {}
	student.name = document.getElementById('nameInput').value
	student.surname = document.getElementById('surnameInput').value
	student.studentId = document.getElementById('studentIdInput').value
	student.gpa = document.getElementById('gpaInput').value
	student.image = document.getElementById('imageLinkInput').value
	addStudentToDB(student)

}

document.getElementById('addButton').addEventListener('click',(event) => {
	onAddStudentClick()
})

function showAllStudents() {
	fetch('https://dv-student-backend-2019.appspot.com/students')
	.then((response) => {
		return response.json()
	}).then(data => {
		addStudentList(data)
	})
}

function onLoad() {
	// showAllStudents()
	hideAll()


	// fetch('https://dv-student-backend-2019.appspot.com/student')
	// .then((response) => {
	// 	return response.json()
	// }).then(data => {
	// 	addStudentData(data)
	// })
}

// function onLoad() {
//     student = {
//         name: "Bantita",
//         surname: "Boonyadate",
//         studentId: "632110343",
//         gpa: "3.50",
//         image: "https://mpics.mgronline.com/pics/Images/561000012797202.JPEG"
//     }
//     addStudentToDB(student)
// }

// function onLoad() {
//     deleteStudent(46)
// }

var singleStudentResult = document.getElementById('sinigle_student_result')
var listStudentResult = document.getElementById('output')
var addUserDetail = document.getElementById('addUserDetail')

function hideAll() {
	singleStudentResult.style.display = 'none'
	listStudentResult.style.display = 'none'
	addUserDetail.style.display = 'none'
}

document.getElementById('allStudentMenu').addEventListener('click', (event) => {
	hideAll()
	listStudentResult.style.display = 'block'
	showAllStudents()
})

document.getElementById('addStudentMenu').addEventListener('click', (event) => {
	hideAll()
	addUserDetail.style.display = 'block'
})