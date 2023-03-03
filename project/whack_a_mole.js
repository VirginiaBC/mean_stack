
const View = (() => {
    const domSelector = {
        gridContainer: document.querySelector("#mole_grid"),
        startBtn: document.querySelector("#start"),
        timeLeftDom: document.querySelector("#time"),
        scoreDom: document.querySelector("#score"),
        getMoleHoles: () => {
            return document.querySelectorAll(".circle")
        } 
    }

    const createMoleDomList = (statusArr) => {
        let molesDoms = ""
        for (var i=0; i<statusArr.length; i++) {
            const is_show = statusArr[i]
            if (is_show) {
                molesDoms += `<div class="circle" id="hole_${i}" style="background-image: url('mole.png'); background-position: center;""></div>`
            } else {
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
            this._moleStatus = new Array(12).fill(false)
            this._listener = listener
            this._totalTime = timeLeft
            this._timeLeft = timeLeft
            this._score = 0
            this.renderMoles()
        }

        clear() {
            this.moleStatus = new Array(12).fill(false)
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
            }
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

    const holeListener = (event) => {
        if (state.timeLeft == 0) {
            return
        }
        event.target.id;
        const status = state.moleStatus;
        const index = event.target.id.replace('hole_', '');
        if (status[index]) {
            status[index] = false
            state.winAScore()
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
            .map((elem, index) => elem === false ? index : -1)
            .reduce((acc, curr) => curr !== -1 ? acc.concat(curr) : acc, []);
        if (emptyIndexes.length <= 9) {
            return
        }
        const randomIndex = emptyIndexes[Math.floor(Math.random() * emptyIndexes.length)];
        status[randomIndex] = true
        state.moleStatus = status
    }

    domSelector.startBtn.addEventListener('click', () => {
        state.clear()
        domSelector.startBtn.hidden = true
        const popup = setInterval(popUpMole, 1000)
        const countDown = setInterval(() => {
            if (state.timeLeft == 0) {
                state.renderScoreDom()
                clearInterval(countDown)
                clearInterval(popup)
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