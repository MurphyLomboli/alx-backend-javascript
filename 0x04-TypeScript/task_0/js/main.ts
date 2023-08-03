// create an interface for the object Student
interface Student {
    firstName: string;
    lastName: string;
    age: Number;
    location: string;
}
 
// students

const student1: Student = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
    location: 'Paris'

}

const student2: Student = {
    firstName: 'Jane',
    lastName: 'Doe',
    age: 22,
    location: 'Paris'
}

const studentsList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const tr: HTMLTableRowElement = thead.insertRow(0);
const th1: HTMLTableCellElement = tr.insertCell(0);
const th2: HTMLTableCellElement = tr.insertCell(1);


th1.innerHTML = 'firstName';
th2.innerHTML = 'location';
table.appendChild(thead);

studentsList.forEach((student: Student) => {
    const tr: HTMLTableRowElement = tbody.insertRow(0);
    const td1: HTMLTableCellElement = tr.insertCell(0);
    const td2: HTMLTableCellElement = tr.insertCell(1);

    td1.innerHTML = student.firstName;
    td2.innerHTML = student.location;
});


table.appendChild(tbody);
document.body.appendChild(table);
