(function () {
    window.Game = function () {
        this.f = 0
        this.init()
        this.background = new Background(this)
        this.land = new Land(this)
        this.bird = new Bird(this)
        this.pipeArr = []
    }

    Game.prototype.init = function () {
        this.canvas = document.querySelector('canvas')
        this.ctx = this.canvas.getContext('2d')
        this.R = {
            "bg_day": "./images/bg_day.png",
            "land": "./images/land.png",
            "pipe_down": "./images/pipe_down.png",
            "pipe_up": "./images/pipe_up.png",
            "bird1_0": "./images/bird1_0.png",
            "bird1_1": "./images/bird1_1.png",
            "bird1_2": "./images/bird1_2.png",
        }
        var count = 0
        var length = Object.keys(this.R).length
        for (k in this.R) {
            const self = this
            const img = new Image()
            //这样相当于给浏览器缓存了一张图片
            img.src = this.R[k]
            this.R[k] = img
            img.onload = function () {
                console.log(1);
                self.clear()
                count++
                self.ctx.save()
                self.ctx.textAlign = 'center'
                self.ctx.font = "18px 微软雅黑"
                self.ctx.fillStyle = "blue"
                self.ctx.fillText(`加载中${count}/${length}`, self.canvas.width / 2, 100)
                self.ctx.restore()

                if (count === length) self.start()
            }
        }
    }

    Game.prototype.clear = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    Game.prototype.start = function () {
        const self = this

        this.timer = setInterval(function () {

            if (self.f % 130 === 0) {
                const pipe = new Pipe(self)
                self.pipeArr.push(pipe)
            }
            self.f++

            self.clear()

            self.background.render()
            self.background.update()


            self.pipeArr.forEach((item) => {
                item.impact()
                item.render()
                item.update()
            })

            self.land.impact()
            self.land.render()
            self.land.update()


            self.bird.render() 
            self.bird.update()
        }, 20)
    }

    Game.prototype.random = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
})()