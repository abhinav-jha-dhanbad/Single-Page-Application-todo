import { createElementA } from "./utils.js"
import { readData, saveData } from "./model.js"

document.addEventListener("DOMContentLoaded", () => {
    const NewTodoInputField = document.querySelector(".new-todo")
    const InputRadioButton = document.querySelectorAll(".input-radio")
    const NewTodoFormField = document.querySelector("#todo-form")

    let a = readData(NewTodoFormField.dataset.key)
    a.forEach(obj => {
        // creating necessary DOM elements
        let todo = obj.text
        let label = createElementA("label", {}, ["task-label"])
        let radio
        if (obj.completed) {
            radio = createElementA(
                "input",
                { "type": "radio", "name": "", "checked": "true", "data-id": obj.id },
                ["input-radio"]
            )
        } else {
            radio = createElementA("input", { "type": "radio", "name": "", "data-id": obj.id }, ["input-radio"])
        }
        let span = createElementA("span", {}, ["checkmark"])
        let li = createElementA("li", {}, ["task"])

        // appending everyting in label
        label.append(todo)
        label.appendChild(radio)
        label.appendChild(span)

        // appending label in li
        li.appendChild(label)

        // appending label in the next li.task
        let task = document.querySelector(".tasks-view")
        task.append(li)
    });


    console.log(`
    InputRadioButton.forEach(radio => {
        radio.addEventListener("click", e => { e.target.parentElement.classList.add("checked") })
    })`)


    // Selecting the input field and adding an event listener
    // of focus which will make the border bottom blue
    NewTodoInputField.addEventListener("focus", () => {
        NewTodoInputField.value = ""
        NewTodoInputField.parentElement.parentElement.parentElement.classList.add("input-blue-border")
    })
    NewTodoInputField.addEventListener("focusout", () => {
        NewTodoInputField.parentElement.parentElement.parentElement.classList.remove("input-blue-border")
    })

    // Selecting form and making a todo
    // when the form submits...
    NewTodoFormField.addEventListener("submit", (e) => {
        // stops refreshing of the page
        e.preventDefault()
        // creating necessary DOM elements
        let todo = NewTodoInputField.value
        let label = createElementA("label", {}, ["task-label"])
        let radio = createElementA("input", { "type": "radio", "name": "" }, ["input-radio"])
        let span = createElementA("span", {}, ["checkmark"])
        let li = createElementA("li", {}, ["task"])

        // appending everyting in label
        label.append(todo)
        label.appendChild(radio)
        label.appendChild(span)

        // appending label in li
        li.appendChild(label)

        // appending label in the next li.task
        let task = document.querySelector(".tasks-view")
        task.append(li)

        // save todo
        saveData(NewTodoFormField.dataset.key, NewTodoInputField.value, false)
        //saveData()

        // clear input field and loose focus
        NewTodoInputField.value = "New Task"
        NewTodoInputField.blur()
    })

})
