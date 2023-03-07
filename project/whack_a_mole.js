
const View = (() => {
    const domSelector = {
        gridContainer: document.querySelector("#mole_grid"),
        startBtn: document.querySelector("#start"),
        timeLeftDom: document.querySelector("#time"),
        scoreDom: document.querySelector("#score"),
        getMoleHoles: () => {
            return document.querySelectorAll(".circle")
        } //object method: get the latest molehole status when call getMoleHoles
    }

    const createMoleDomList = (statusArr) => {
        let molesDoms = ""
        for (var i=0; i<statusArr.length; i++) {
            const is_show = statusArr[i]
            if (is_show == 1) { // Is a mole
                molesDoms += `<div class="circle" id="hole_${i}" style="background-image: url('mole.png'); background-position: center;""></div>`
            } else if (is_show == 2) { // Is a snake
                molesDoms += `<div class="circle" id="hole_${i}" style="background-image: url('mine.png'); background-position: center;""></div>`
            }
            else {
                molesDoms += `<div class="circle" id="hole_${i}"></div>`
            }
        }
        return molesDoms
    }

    const render = (elem, template) => {
        elem.innerHTML = template
    }

    return {
        domSelector,
        createMoleDomList,
        render
    }
})()

const Model = ((view) => {


    const {createMoleDomList, domSelector, render } = view

    class State {
        constructor(listener, timeLeft) {
            // After adding snakes, the moleStatus and moleHolePopUpTime
            // also indicate the status and popup time of snake
            this._moleStatus = new Array(12).fill(0)
            this._moleHolePopUpTime = new Array(12).fill(timeLeft)
            this._listener = listener
            this._totalTime = timeLeft
            this._timeLeft = timeLeft
            this._score = 0
            this.renderMoles()
        }

        clear() {
            this.moleStatus = new Array(12).fill(0)
            this.moleHolePopUpTime = new Array(12).fill(this._totalTime)
            this.timeLeft = this._totalTime
            this.score = 0
        }

        get moleStatus() {
            return this._moleStatus
        }

        set moleStatus(status) {
            this._moleStatus = status
            this.renderMoles()
        }

        get moleHolePopUpTime() {
            return this._moleHolePopUpTime
        }

        set moleHolePopUpTime(popUpTime) {
            this._moleHolePopUpTime = popUpTime
        }

        get timeLeft() {
            return this._timeLeft
        }

        set timeLeft(time) {
            this._timeLeft = time
            this.renderTimeLeft()
        }

        get score() {
            return this._score
        }

        set score(s) {
            this._score = s
            this.renderScoreDom()
        }

        winAScore() {
            this._score += 1
            this.renderScoreDom()
        }

        countDown() {
            this._timeLeft -= 1
            this.renderTimeLeft()
        }

        renderTimeLeft() {
            const timeLeftDom = domSelector.timeLeftDom;
            timeLeftDom.textContent = this._timeLeft + "s"
        }

        renderMoles() {
            const moleList = createMoleDomList(this._moleStatus)
            render(domSelector.gridContainer, moleList)
            for (let hole of domSelector.getMoleHoles()) {
                hole.addEventListener('click', this._listener)
            }// since after render the moleStatus to gridcontainer, 
            //the previous event listener is cleared, so re-render it again.
        }

        renderScoreDom() {
            const scoreDom = domSelector.scoreDom; 
            scoreDom.textContent = "Let's go, your socure is " + this.score
        }

    }

    return {
        State
    }

})(View)


const Controller = ((view, model) => {
    const {State} = model
    const {domSelector} = view

    let popupMole; // Expose popupMole interval function
    let popupSnake; // Expose popupSnake interval function
    let countDown; // Expose countDown interval function


    const holeListener = (event) => {
        if (state.timeLeft == 0) {
            return
        }
        event.target.id;
        const status = state.moleStatus;
        const index = event.target.id.replace('hole_', '');
        if (status[index] == 1) {
            status[index] = 0
            state.winAScore()
        }
        else if (status[index] == 2) {
            clearInterval(popupMole)
            clearInterval(popupSnake)
            clearInterval(countDown)
            state.moleStatus = new Array(12).fill(2)
            return
        }
        state.moleStatus = status
    }

    const state = new State(holeListener, 30)

    const popUpMole = () => {
        if (state.timeLeft == 0) {
            return
        }
        const status = state.moleStatus;
        const emptyIndexes = status
            .map((elem, index) => elem === 0 ? index : -1)
            .reduce((acc, curr) => curr !== -1 ? acc.concat(curr) : acc, []);
        const nonEmptyIndexes = status
            .map((elem, index) => elem === 0 ? -1 : index)
            .reduce((acc, curr) => curr !== -1 ? acc.concat(curr) : acc, []);
        const popUpTime = state.moleHolePopUpTime;
        // Find out moles and remove it if it's time-out
        for (let index of nonEmptyIndexes) {
            if (status[index] == 1 && popUpTime[index] - state.timeLeft >= 3) {
                status[index] = 0
            }
        }
        // Select a random empty hole to popup a mole
        const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
        status[randomIndex] = 1
        popUpTime[randomIndex] = state.timeLeft
        state.moleStatus = status
    }

    const popUpSnake = () => {
        if (state.timeLeft == 0) {
            return
        }
        const status = state.moleStatus;
        const nonSnakeIndexes = status
            .map((elem, index) => elem === 2 ? -1 : index)
            .reduce((acc, curr) => curr !== -1 ? acc.concat(curr) : acc, []);
        // Remove previous snake
        for (let index in status) {
            if (status[index] == 2) {
                status[index] = 0
            }
        }
        // Pop up a new snake
        const randomIndex = nonSnakeIndexes[Math.floor(Math.random() * nonSnakeIndexes.length)];
        status[randomIndex] = 2
        state.moleStatus = status
    }

    domSelector.startBtn.addEventListener('click', () => {
        state.clear()
        domSelector.startBtn.hidden = true
        popupMole = setInterval(popUpMole, 1000)
        popupSnake = setInterval(popUpSnake, 2000)
        countDown = setInterval(() => {
            if (state.timeLeft == 0) {
                //state.renderScoreDom()
                clearInterval(countDown)
                clearInterval(popupMole)
                clearInterval(popupSnake)
                alert("Time Out! Your score is " + state.score)
                domSelector.startBtn.hidden = false
                return 
            }
            state.countDown()
        }, 1000);
    });

    const bootstrap = () => {
        console.log(domSelector.moleHoles)
    }
    return {bootstrap}
})(View, Model)

Controller.bootstrap()