(function () {
    window.Pipe = function (mediator) {
        this.mediator = mediator
        this.x = this.mediator.canvas.width
        this.pipeUp = this.mediator.R["pipe_up"]
        this.pipeDown = this.mediator.R["pipe_down"]
        this.pipeDownHeight = this.mediator.random(100, 350)
        this.space = 150
    }

    Pipe.prototype.render = function () {

        this.mediator.ctx.save()
        this.mediator.ctx.drawImage(this.pipeUp, this.x, this.pipeDownHeight + this.space)

        this.mediator.ctx.drawImage(this.pipeDown, this.x, -(400 - this.pipeDownHeight))
        this.mediator.ctx.restore()
        if (this.x + 52 < -300) {
            this.goDie()
        }
    }

    Pipe.prototype.update = function () {
        this.x -= 2

    }

    Pipe.prototype.impact = function () {
        if (this.x + 52 > this.mediator.bird.x - 17 && this.x < this.mediator.bird.x + 17) {
            if (this.mediator.bird.y - 14 < this.pipeDownHeight || this.mediator.bird.y + 14 > this.pipeDownHeight + this.space) {
                clearInterval(this.mediator.timer)
            }
        }
    }

    Pipe.prototype.goDie = function () {
        this.mediator.pipeArr.shift()
    }
})()