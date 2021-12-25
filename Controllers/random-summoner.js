// stackoverflow saved my life, wow

var rollingItems = ['https://cdn.discordapp.com/attachments/920952514323546115/924009934641840168/ezgif-2-17ab284b2e.gif', 'https://cdn.discordapp.com/attachments/920952514323546115/924121490083938344/ezgif-7-71b242d01b.gif']

window.onload = function () {
	var blockRefresh = document.getElementById("block");
	var spot = Math.floor(Math.random() * rollingItems.length);
	blockRefresh.style.background = "url(" + rollingItems[spot] + ")";
}
