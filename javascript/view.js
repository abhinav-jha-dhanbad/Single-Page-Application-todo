import { readData } from "./model.js"

function a(KEY) {
    for (var x = 0; x < readData(KEY).length; x++) {
        const obj = readData(KEY)[x];

    }
}

export { a }