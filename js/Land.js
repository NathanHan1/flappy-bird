(function () {
    window.Land = function (mediator) {
        this.mediator = mediator
        this.img = this.mediator.R["land"]
        this.x = 0
    }

    Land.prototype.render = function () {
        this.mediator.ctx.save()
        this.mediator.ctx.drawImage(this.img, this.x, this.mediator.canvas.height - 112)
        this.mediator.ctx.drawImage(this.img, this.x + 336, this.mediator.canvas.height - 112)
        this.mediator.ctx.drawImage(this.img, this.x + 336 * 2, this.mediator.canvas.height - 112)
        this.mediator.ctx.restore()
    }

    Land.prototype.update = function () {
        this.x--
        if (this.x < -336) this.x = 0
    }

    Land.prototype.impact = function () {
        if (this.mediator.bird.y + 22 >= this.mediator.canvas.height - 112) {
            clearInterval(this.mediator.timer)
        }
    }
})()