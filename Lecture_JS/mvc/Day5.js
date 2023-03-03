// MVC pattern
// design pattern, strategy how do you build up the project
// Model View Controller > whole application
// View: something that users can see > user interface
// Controller: user do some actions, controller will receive the information > trigger by user events, when user interact with the view, 
// it triggers controller
// Model: updating with database, data will be updated when controller has been triggered
// The browser will rerender the page based on the updated data

const Api = (() => {
    // const data = [
    //     {name : 'adsf', age: 30},
    //     {name : 'dsf', age: 20},
    //     {name : 'fd', age: 10}
    // ]
    // return data;
    const getTodoList = () => {
        return fetch("https://jsonplaceholder.typicode.com/todos").then((res) => res.json())
    }
    return { getTodoList };

})()


const View = (() => {

    const domSelector = {
        task_container: document.querySelector("#task_container"),
        addBtn: document.querySelector("#add"),
        inputForm: document.querySelector("#input")
    }

    const createTemp = (dataArr) => {
        let temp = "";
        for (let item of dataArr) {
            temp += `<li>${item.title}
                <span>
                    <button id = "todoBtn_${item.id}"> x </button>
                </span>
            </li>`;
        }
        return temp;
    };

    const render = (ele, template) => {
        ele.innerHTML = template;
    };

    return {
        domSelector,
        createTemp,
        render
    };

})()


const Model = ((api, view) => {

    const { getTodoList } = api;

    const { createTemp, render } = view;
    const task_container = document.querySelector("#task_container");


    class State {

        constructor() {
            // this._dataList = arr;
            // const temp = createTemp(this._dataList);
            // render(task_container, temp);
            this._dataList = []
        }

        get dataList() {
            return this._dataList;
        }

        set dataList(newList) {
            this._dataList = newList;
            const temp = createTemp(this._dataList);
            render(task_container, temp);

        }
    }

    return {
        State,
        createTemp,
        render,
        getTodoList
    };



})(Api, View)

const Controller = ((model, view) => {

    const { domSelector, createTemp, render } = view
    const { State, getTodoList } = model

    const state = new State();
    //state.dataList = api;

    domSelector.addBtn.addEventListener('click', (event) => {
        console.log(domSelector.inputForm.value)
        const newList = [...state.dataList, {title: domSelector.inputForm.value}];
        state.dataList = newList;

    })

    domSelector.task_container.addEventListener('click', (event) =>{
        //console.log(event);
        const id = event.target.id;
        const newList = [...state.dataList.filter((item) => 'todoBtn_'+item.id !== id)];
        state.dataList = newList;

    })

    const bootstrap = () => { //pure logic, starting something, something you need to do to initialize the project
        getTodoList().then(
            (res) => {
                state.dataList = res.slice(0,5);
            }
        ) //promise
    }

    return { bootstrap }
})(Model, View);

Controller.bootstrap()