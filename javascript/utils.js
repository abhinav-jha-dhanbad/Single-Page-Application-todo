function createElementA(element, propertyList, classList) {
    // takes up an dom-element and its classlist which is a list
    // and create the desired dom-element with the classes
    // given in the lists.
    // It return the element.
    let elem = document.createElement(element)
    for (let a = 0; a < classList.length; a++) {
        elem.classList.add(classList[a])
    }
    for (let attribute in propertyList) {
        let attr = document.createAttribute(attribute)
        //console.log(attr)
        attr.value = propertyList[attribute]
        //console.log(attr.value)
        elem.setAttributeNode(attr)
    }
    return elem
}

function addStyles(objectsOfStyles, elem) {
    // takes up an object of styles which you want to add to 
    // an element and the element itself and adds the styles.
    for (let key in objectsOfStyles) {
        elem.style.key = objectsOfStyles[key]
    }
}

function createElementWithStyles(element, classList, objectsOfStyles) {
    // performs the function of both createElement() and addStyle()
    // and return the element
    let elem = createElementA(element, classList)
    addStyles(objectsOfStyles, elem)
    return elem
}

function createMultipleElements(listOfElements, listOfClasses) {
    let createdElements = []
    for (let i = 0; i < listOfElements.length; i++) {
        let element = createElementA(listOfElements[i], listOfClasses[i])
        createdElements.append(element)
    }
    for (let x = createdElements.length - 1; x < createdElements.length; x--) {
        let element = array[x]

    }
}

export { createElementA, addStyles, createElementWithStyles }

/*
                ______
        /\     |      | |     | | |\    |     /\ \        /
       /  \    |      | |     | | | \   |    /  \ \      /
      /____\   |------| |-----| | |  \  |   /____\ \    /
     /      \  |      | |     | | |   \ |  /      \ \  /
    /        \ |______| |     | | |    \| /        \ \/
*/

