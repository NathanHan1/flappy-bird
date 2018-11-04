(function () {
    window.Background = function (mediator) {
        this.mediator = mediator
        this.img = mediator.R["bg_day"]
        this.x = 0
    }

    Background.prototype.render = function () {
        this.mediator.ctx.save()
        this.mediator.ctx.fillStyle = "#4ec0ca"
        this.mediator.ctx.fillRect(0, 0, this.mediator.canvas.width, this.mediator.canvas.height - 512)
        this.mediator.ctx.drawImage(this.img, this.x, this.mediator.canvas.height - 512)
        this.mediator.ctx.drawImage(this.img, this.x + 288, this.mediator.canvas.height - 512)
        this.mediator.ctx.drawImage(this.img, this.x + 288 * 2, this.mediator.canvas.height - 512)
        this.mediator.ctx.restore()
    }

    Background.prototype.update = function () {
        this.x--
        if (this.x < -288) this.x = 0
    }
})()