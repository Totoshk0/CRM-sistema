function getHeader() {
  const container = document.createElement("header");
  const logo = document.createElement("a");
  const searchContainer = document.createElement("div");
  const input = document.createElement("input");

  container.classList.add("header");
  logo.classList.add("logo");
  input.classList.add("header__input");

  searchContainer.id = "searchContainer_ID";
  input.id = "inputSearch_ID";

  const img = document.createElement("img");
  img.src = "/assets/img/logo.png";

  // Добавляем изображение внутрь элемента <a>
  logo.appendChild(img);

  input.placeholder = "Введите запрос";

  searchContainer.append(input);
  container.append(logo, searchContainer);

  return container;
}

function getMain() {
  const main = document.createElement("main");
  const title = document.createElement("h1");

  main.classList.add("main");
  title.classList.add("title");

  title.innerText = "Клиенты";
  main.id = "main_ID";

  main.append(title);

  return main;
}

function getClientsTable() {
  const tableContainer = document.createElement("div");
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const tableBody = document.createElement("tbody");
  const aToZ = document.createElement("span");

  const [
    tableColumnId,
    tableColumnName,
    tableColumnDateCreate,
    tableColumnDateEdit,
    tableColumnContacts,
    tableColumnActions,
  ] = Array(6)
    .fill("")
    .map((i) => {
      i = document.createElement("th");
      i.classList.add("table__column");
      tableHead.append(i);
      return i;
    });

  tableColumnId.innerText = "ID";
  tableColumnName.innerText = "Фамилия Имя Отчество";
  tableColumnDateCreate.innerText = "Дата и время создания";
  tableColumnDateEdit.innerText = "Последние изменения";
  tableColumnContacts.innerText = "Контакты";
  tableColumnActions.innerText = "Действия";
  aToZ.innerText = "А-Я";

  tableContainer.classList.add("table__container");
  table.classList.add("table");
  tableHead.classList.add("table__head");
  tableBody.classList.add("table__body");

  tableHead.id = "tableHead_ID";
  tableBody.id = "tableBody_ID";
  tableColumnId.id = "tableColumnId_ID";
  tableColumnName.id = "tableColumnName_ID";
  tableColumnDateCreate.id = "tableColumnDateCreate_ID";
  tableColumnDateEdit.id = "tableColumnDateEdit_ID";
  aToZ.id = "aToZ_ID";
  tableColumnActions.setAttribute("colspan", "2");

  tableColumnName.append(aToZ);
  table.append(tableHead);
  table.append(tableBody);
  tableContainer.append(table);

  spin(tableBody);

  return {
    tableContainer,
  };
}

function getAddClientButton() {
  const button = document.createElement("button");

  button.classList.add("add-button");
  button.innerHTML = `<svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.5 8C16.71 8 18.5 6.21 18.5 4C18.5 1.79 16.71 0 14.5 0C12.29 0 10.5 1.79 10.5 4C10.5 6.21 12.29 8 14.5 8ZM5.5 6V3H3.5V6H0.5V8H3.5V11H5.5V8H8.5V6H5.5ZM14.5 10C11.83 10 6.5 11.34 6.5 14V16H22.5V14C22.5 11.34 17.17 10 14.5 10Z" fill=""/></svg>Добавить клиента`;

  return {
    button,
  };
}

function spin(tableBody) {
  tableBody.innerHTML = "";
  const tr = document.createElement("tr");
  const td = document.createElement("td");

  tr.classList.add("spin");
  td.classList.add("table__spin");

  td.setAttribute("colspan", "6");

  td.innerHTML = `<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.00025 40.0005C4.00025 59.8825 20.1182 76.0005 40.0002 76.0005C59.8822 76.0005 76.0002 59.8825 76.0002 40.0005C76.0002 20.1185 59.8823 4.00049 40.0003 4.00049C35.3513 4.00048 30.9082 4.88148 26.8282 6.48648" stroke="#9873FF" stroke-width="8" stroke-miterlimit="10" stroke-linecap="round"/>
  </svg>`;

  tr.append(td);
  tableBody.append(tr);
}

export { getHeader, getMain, getClientsTable, getAddClientButton, spin };
