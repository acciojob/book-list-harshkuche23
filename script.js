//your JS code here. If required.
const body = document.body;

// Container
const container = document.createElement("div");
container.className = "container";
body.appendChild(container);

// Heading
const heading = document.createElement("h1");
heading.innerText = "MyBookList";
container.appendChild(heading);

// Form
const formGroup = document.createElement("div");
formGroup.className = "form-group";

const titleInput = document.createElement("input");
titleInput.id = "title";
titleInput.placeholder = "Book Title";

const authorInput = document.createElement("input");
authorInput.id = "author";
authorInput.placeholder = "Author";

const isbnInput = document.createElement("input");
isbnInput.id = "isbn";
isbnInput.placeholder = "ISBN#";

const submitBtn = document.createElement("button");
submitBtn.id = "submit";
submitBtn.innerText = "Submit";

formGroup.append(titleInput, authorInput, isbnInput, submitBtn);
container.appendChild(formGroup);

// Table
const table = document.createElement("table");
table.className = "table table-striped";

// Table Head
const thead = document.createElement("thead");
thead.innerHTML = `
<tr>
    <th>Title</th>
    <th>Author</th>
    <th>ISBN#</th>
    <th>Action</th>
</tr>
`;
table.appendChild(thead);

// Table Body
const tbody = document.createElement("tbody");
tbody.id = "book-list";
table.appendChild(tbody);

container.appendChild(table);

// Submit logic
submitBtn.addEventListener("click", () => {
    if (!titleInput.value || !authorInput.value || !isbnInput.value) return;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${titleInput.value}</td>
        <td>${authorInput.value}</td>
        <td>${isbnInput.value}</td>
        <td><button class="delete">X</button></td>
    `;

    tbody.appendChild(row);

    // Clear inputs
    titleInput.value = "";
    authorInput.value = "";
    isbnInput.value = "";
});

// Delete row
tbody.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.parentElement.remove();
    }
});
