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
	cell.innerHTML = student.gpa
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

function addEditStudentToTable(index,student){
    const tableBodyEdit = document.getElementById('tableBodyEdit')
    let row = document.createElement('tr')
    row.addEventListener('click',(event) => {
        console.log('click row')
        showOneStudent(student.id)
    })
    let cell = document.createElement('th')
    cell.innerHTML = index
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.name
    row.appendChild(cell)
    cell = document.createElement('td')
    cell.innerHTML = student.surname
    row.appendChild(cell)
    tableBodyEdit.appendChild(row)
}

function addEditStudentList(data){
    let counter = 1
    const tableBodyEdit = document.getElementById('tableBodyEdit')
    tableBodyEdit.innerHTML = ''
    for(student of data){
        addEditStudentToTable(counter++,student)
    }
}

function showAllStudents() {
	fetch('https://dv-student-backend-2019.appspot.com/students')
	.then((response) => {
		return response.json()
	}).then(data => {
		addStudentList(data)
	})
}

function showAllStudentsEdit(){
    fetch('https://dv-student-backend-2019.appspot.com/students')
	.then(response => {
        return response.json()
    }).then(data => {
        addEditStudentList(data)
    })
}

function showDetail(id,one){
    let id1 = document.getElementById('idEdit')
    id1.innerHTML = id
    let studentId1 = document.getElementById('studentIdEdit')
    studentId1.innerHTML = one.studentId
    let name1 = document.getElementById('nameEdit')
    name1.innerHTML = one.name
    let surname1 = document.getElementById('surnameEdit')
    surname1.innerHTML = one.surname
    let gpa = document.getElementById('gpaEdit')
    gpa.innerHTML = one.gpa
    let image = document.getElementById('imageEdit')
    image.setAttribute('src',one.image)
    image.setAttribute('width',"350")
}

function showOneStudent(id){
    fetch(`https://dv-student-backend-2019.appspot.com/student/${id}`)
	.then(response => {
        return response.json()
    }).then(data => {
        showDetail(data.id,data)
        studentEditId = data.id
        editStudentData = data // ใช้กับ function editStudent
    })
}

function onLoad() {
	// showAllStudents()
	hideAll()
}

var singleStudentResult = document.getElementById('sinigle_student_result')
var listStudentResult = document.getElementById('output')
var addUserDetail = document.getElementById('addUserDetail')

var singleStudentResultEdit = document.getElementById('sinigle_student_resultEdit')
var outputEdit = document.getElementById('outputEdit')
var addEditUserDetail = document.getElementById('addEditUserDetail')

function hideAll() {
	singleStudentResult.style.display = 'none'
	listStudentResult.style.display = 'none'
	addUserDetail.style.display = 'none'
	singleStudentResultEdit.style.display = 'none'
	outputEdit.style.display = 'none'
	addEditUserDetail.style.display = 'none'
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

document.getElementById('editStudentMenu').addEventListener('click', (event) => {
	hideAll()
	singleStudentResultEdit.style.display = 'block'
	outputEdit.style.display = 'block'
	showAllStudentsEdit()
})

document.getElementById('edit').addEventListener('click', (event) => {
    hideAll()
    singleStudentResultEdit.style.display='block'
    addEditUserDetail.style.display='block'
    showAllStudentsEdit()
})

var editStudentName = document.getElementById('nameInputEdit')
var editStudentSurname = document.getElementById('surnameInputEdit')
var editStudentId = document.getElementById('studentIdInputEdit')
var editStudentGpa = document.getElementById('gpaInputEdit')
var editStudentImage = document.getElementById('imageLinkInputEdit')

function editStudent(editStudentData){
    console.log('editStudent')
    editStudentData.name = editStudentName
    editStudentData.surname = editStudentSurname
    editStudentData.studentId = editStudentId
    editStudentData.gpa = editStudentGpa
    editStudentData.image = editStudentImage
    addEditStudentToDB(editStudentData)
}

document.getElementById('addButtonEdit').addEventListener('click', (event) => {
    editStudentName = document.getElementById('nameInputEdit').value
	editStudentSurname = document.getElementById('surnameInputEdit').value
 	editStudentId = document.getElementById('studentIdInputEdit').value
 	editStudentGpa = document.getElementById('gpaInputEdit').value
 	editStudentImage = document.getElementById('imageLinkInputEdit').value

    console.log('Submit Edit')
    editStudent(editStudentData)
})

function addEditStudentToDB(student){
    console.log('update')
    fetch('https://dv-student-backend-2019.appspot.com/students',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(student)
    }).then(response => {
        if(response.status === 200){
            return response.json()
        }else{
            throw Error(response.statusText)
        }
    }).then(data => {
        showDetail(data.id,data)
        alert('Update successed')
    }).catch(error => {
        return null
    })
}
