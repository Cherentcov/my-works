(function () {
    let listArray = [],
        listName = ''

    // создаем и возращаем заголовок приложения
    function createAppTitle(title) {
        let appTitle = document.createElement('h2');
        appTitle.innerHTML = title;
        return appTitle;
    }

    // создоем и возрощаем форму для создание дела
    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn', 'btn-primary');
        button.textContent = 'Добавить дело'
        button.disabled = true;

        input.addEventListener('input', function () {
            if(input.value != "") {
                button.disabled = false;
            } else {
                button.disabled = true;
            }
        });

        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        return {
            form,
            input,
            button
        };
    }

    // создаем и возращаем список элементов
    function createTodoList() {
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItem(obj) {
        let item = document.createElement('li');
        // кнопки перемещаем в элемент, который красиво покажит их в одной группе
        let buttonGroup = document.createElement('div');
        let doneButton = document.createElement('button');
        let deleteButton = document.createElement('button');

        // устанавливаем стили для элемента списка, а также для размещения кнопок
        // в его правой части с помощью flex

        item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        item.textContent = obj.name;

        buttonGroup.classList.add('btn-group', 'btn-group-sm');
        doneButton.classList.add('btn', 'btn-success');
        doneButton.textContent = 'Готово';
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.textContent = 'Удалить';

        item.id = obj.id;

        if(obj.done == true) item.classList.add('list-group-item-success');

        // добовляем обробтчик на кнопки
        doneButton.addEventListener('click', function () {
            item.classList.toggle('list-group-item-success');

            for (const item of listArray) {
                if (item.id == obj.id) {
                    item.done = !item.done;
                }
            }
            saveList(listArray, listName);
        });
        deleteButton.addEventListener('click', function () {
            if (confirm('Вы уверены?')) {
                item.remove();
                for (let i = 0; i < listArray.length; i++) {
                    if(listArray[i].id === obj.id) {
                        listArray.splice(i, 1)
                    }
                }
                saveList(listArray, listName);
            }
        });

        // выкладываем кнопки в отдельный элемент
        buttonGroup.append(doneButton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        // приложению нужен доступ к самому элементу и кнопкам, что-бы обрабатывать события нажатия
        return {
            item,
            doneButton,
            deleteButton
        };
    }

    function getNewID(arr) {
        let max = 0;
        for (const item of arr) {
            if (item.id > max) max = item.id
        }
        return max + 1;
    }

    function  saveList(arr, keyName){
        localStorage.setItem(keyName, JSON.stringify(arr));
    }

    function createTodoApp(container, title = 'Список дел', keyName, def = []) {

            let todoAppTitle = createAppTitle(title);
            let todoItemForm = createTodoItemForm();
            let todoList = createTodoList();

            container.append(todoAppTitle);
            container.append(todoItemForm.form);
            container.append(todoList);

            listName = keyName;
            let localData = localStorage.getItem(listName);
            if(localData !== null && localData !== ''){
            listArray = JSON.parse(localData)
            }else{
              listArray = def
              saveList(listArray, listName)
            }

            for (const item of listArray) {
                let todoItem = createTodoItem(item);
                todoList.append(todoItem.item);
            }

            // браузер создает событие submit на форме по нажатию Enter или на кнопку создания дела
            todoItemForm.form.addEventListener('submit', function (e) {
                // эта строчка необходима, что-бы предотвратить стандартные дествия браузера
                // в данном случае мы не хотим, что-бы страница перезпгружалась при отправке формы
                e.preventDefault();

                // игнорируем создание элемента, если пользователь ничего не ввел в поле
                if (!todoItemForm.input.value) {
                    return;
                }

                let newTodo = {
                    id: getNewID(listArray),
                    name: todoItemForm.input.value,
                    done: false
                };


                let todoItem = createTodoItem(newTodo);

                listArray.push(newTodo);

                // создаем и добовляем в список новое дело с названием из поля для ввода
                todoList.append(todoItem.item);
                saveList(listArray, listName)
                // блокировка кнопки
                todoItemForm.button.disabled = true;
                // обнуляем значение в поле, что-бы не пришлось стирать его в ручную
                todoItemForm.input.value = '';
            });
    }

    window.createTodoApp = createTodoApp;
})();
