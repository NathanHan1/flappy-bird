(function () {
    window.Bird = function (mediator) {
        this.mediator = mediator
        this.x = this.mediator.canvas.width * 0.2
        this.y = 100
        this.deg = 0
        this.speed = 0.2
        this.bodyArr = [this.mediator.R["bird1_0"], this.mediator.R["bird1_1"], this.mediator.R["bird1_2"]]
        this.bindEvent()
        this.swing = 0
    }

    Bird.prototype.render = function () {
        this.mediator.ctx.save()
        this.rotate()
        this.mediator.ctx.drawImage(this.bodyArr[this.swing], -24, -24)

        this.mediator.ctx.restore()
    }

    Bird.prototype.update = function () {
        this.speed += 0.88
        this.y += this.speed
        if (this.deg < 2) {
            this.deg += 0.05
        } else {
            this.deg = 2
        }
        this.mediator.f % 2 === 0 && this.swing++
        this.swing = this.swing % 3
    }

    Bird.prototype.rotate = function () {
        this.mediator.ctx.translate(this.x, this.y)
        this.mediator.ctx.rotate(this.deg)
    }

    Bird.prototype.bindEvent = function () {
        const _this = this
        document.addEventListener('click', function () {
            _this.flappy()
        })
    }

    Bird.prototype.flappy = function () {
        //精髓，高中物理
        this.speed = -10

        this.deg = -0.8
    }

    
})()