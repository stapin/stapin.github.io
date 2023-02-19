
var audio = new Audio("./source/media/C418_-_Key_30921622.mp3")
audio.loop = true

function playMusic()
{
    audio.play()
}

function stopMusic()
{
    audio.pause()
}