/* These functions deals with storing data in LocalStorage and reading from them */

function saveData(KEY, todoname, completed_, relatedTodos_, remindMe_, dueDate_, repeat_, note_) {
    // This function saves data in the sessionStorage
    // the key is the id whereas the property is an array of
    // date(a Date), a todo(String) and status(true or false)

    let todoName = todoname || "no todo"     // The todo.                            //! must be String()
    let date = new Date()                    // the date when the todo was published //! must be Date()
    let id = Number(getId())                 // The id of th todo.                   //! must be Number()
    let completed = completed_ || false      // The todo is completed or not         //! must be Boolean() 
    let relatedTodos = relatedTodos_ || []   // Tasks related to the todo.           //! must be Array()
    let remindMe = remindMe_ || null         // If it is a reminder.                 //! must be Date()
    let dueDate = dueDate_ || null           // If it has a due date or not.         //! must be Date()
    let repeat = repeat_ || null             // If it should repeat or not           //! must String(day/week/month/year)
    let note = note_ || ""                   // If todo has a descriptive note.      //! must be String()

    // create a serialized todo
    let todo = makeTodo(todoName, date, id, completed, relatedTodos, remindMe, dueDate, repeat, note)

    // storing the values
    // checking if the `KEY` exists or not. If not, then store it easily in localStorage
    if (!localStorage.getItem(KEY)) localStorage.setItem(KEY, todo)

    // If exists, then get the `KEY`'s value and since its a serialized list therefore, it had to be 
    // desrialized. Append the todo in the array and serialized it. And finally store it in the localStorage.
    else {
        let a = localStorage.getItem(KEY)
        let b = todo_deserializing(a)
        b.push(todo_deserializing(todo))
        localStorage.setItem(KEY, todo_serializing(b))
    }

    // increasing the id for the next todo
    setId()
}

function makeTodo(todoname, date, id, completed, relatedTodos, remindMe, dueDate, repeat, note) {
    // this function creates a todo Object with various keys and values given in the 
    // parameters and returns an object which can be stored in the localStorage
    let todo = {
        text: todoname, date: date, id: id, completed: completed, relatedTodos: relatedTodos,
        remindMe: remindMe, dueDate: dueDate, repeat: repeat, note: note
    }

    // calling a serialized version
    return todo_serializing(todo)

}

function readData(KEY) {
    // this function firsts checks whether or not localStorage has that key, if it doesn't then return null
    // if it does then return the desrialized JSON object of the `KEY`'s value
    if (!localStorage.getItem(KEY)) { return null }
    else {
        return todo_deserializing(localStorage.getItem(KEY))
    }
}

function todo_serializing(todo) {
    // this function converts the todo into a string so that it can be stored easily
    // in the localStorage.
    return JSON.stringify(todo)
}

function todo_deserializing(todo) {
    // this function converts the serialized todo into an object so that it can be 
    // read easily
    return JSON.parse(todo)
}

function getId() {
    // if it is then, returns the value of the id
    if (checkId()) {
        let id = localStorage.getItem("id")
        return id
    }
}

function setId() {
    // if it is then it increases the vakue of the id by 1
    if (checkId()) {
        let id = localStorage.getItem("id")
        localStorage.setItem("id", Number(id) + 1)
    }
}

function checkId() {
    // this function first checkes whether or not `id` is in localStorage
    if (!localStorage.getItem("id")) {
        localStorage.setItem("id", 0)
        return false
    }
    return true
}

export { saveData, makeTodo, readData }