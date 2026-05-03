//make an event listener. it will treigger with the DOM is loaded(aka upon visitng webpage)
addEventListener("DOMContentLoaded", async function () {
    const response = await this.fetch("http://localhost:3000/api/employees")
    const employees = await response.json()

    let html = ""
    for (let employee of employees) {
        html += `<tr>`
        for (let data of employee) {
            html += `<td>${data}</td>`
        }
        html += `</tr>`

        const songID = song._id
        html += `<li>${song.title} - ${song.artist} - <a href="details.html?id=${songID}">Details</a> - <a href="edit.html?id=${songID}">Update Song</a> </li>`
    }

    this.document.querySelector("#employee_table").innerHTML = html
})