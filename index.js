    var studentList = [];


    function addStudent(name) {
        studentList.push(name);
        addStudentToHTML(name);
    }

    function addManyStudents(listOfNames) {
        for (i = 0; i < listOfNames.length; i++) {
            var name = listOfNames[i];
            addStudent(name);
        }
    }

    function removeLastStudent() {
        studentList.pop();

        removeLastStudentFromHTML();
    }

    function getStudentIndex(name) {
        return studentList.indexOf(name);
    }

    function removeStudent(name) {
        var index = getStudentIndex(name);

        studentList.splice(index, 1);
        removeStudentFromHTML(name);
    }

    function editStudent(oldName, newName) {
        var index = getStudentIndex(oldName);

        studentList.splice(index, 1, newName);
        editStudentFromHTML(oldName, newName);
    }

    function addStudentToHTML(name) {
        var liElement = document.createElement("li");
        liElement.setAttribute("id", name);
        var ulElement = document.getElementById("student-list");
        var text = document.createTextNode(name);

        liElement.appendChild(text);
        ulElement.appendChild(liElement);

    }

    function removeStudentFromHTML(name) {
        var liElement = document.getElementById(name);

        liElement.remove();
    }

    function removeLastStudentFromHTML() {
        var ulElement = document.getElementById("student-list");
        var lastLiElement = ulElement.lastChild;

        lastLiElement.remove();
    }

    function editStudentFromHTML(oldName, newName) {
        var liElement = document.getElementById(oldName);
        liElement.textContent = newName;
        liElement.setAttribute("id", newName);
    }

    function promptAddStudent() {
        var newStudentName = prompt("Who would you like to add?");

        addStudent(newStudentName);
    }

    function promptRemoveStudent() {
        var oldStudentName = prompt("Who would you like to remove?");

        removeStudent(oldStudentName);
    }

    function promptUpdateStudent() {
        var oldStudentName = prompt("Who would you like to update?");

        var newStudentName = prompt("What is the updated name?");

        editStudent(oldStudentName, newStudentName);
    }