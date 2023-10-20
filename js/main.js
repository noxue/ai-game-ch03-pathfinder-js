window.onload = function () {
	start()
}
var timer = null
function start() {
	if (timer) clearInterval(timer)
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	run()
	timer = setInterval(() => {
		epoch()
		// 清空
		ctx.clearRect(0, 0, 500, 500)
		render(ctx, 500, 500)
		renderMemory(ctx, 500, 500)
		if (!running) {
			clearInterval(timer)
		}
		console.log(generation)
	}, 1)
}