var presrc = [] //require for Previous()
var shuffleplay = false //require for Shuffle()
var playstatus = false //require for PlayBottonTransform()
var next = false
var devmode = false
var current = 0
var selection = ''

for(x = 0;x < api.data.length;x++)

var Player = (function(api) {

    var video = document.querySelector("#video")
    var url = document.querySelector("#url")

    function FirstAction() {
        video.onended = function() { //list at ending video
            ListOpen()
        };
        if (current == 0){
            return List9()
        }
        return Random(), Play()

    }

    function Play() {
        presrc = source.src
        if (devmode == true){
            console.log('Playstatus: ', playstatus)
            console.log('Previous: ', presrc)
            console.log('Current Array ID:', current)
        }
        if (playstatus == false){
            if (devmode == true) {
                console.log('Playstatus: Preaction', playstatus)
            }
            playstatus = true
            return video.load(), video.play(), PlayBottonTransform(), ViewData()
        }
        if (playstatus == true){
            playstatus = false
            return video.pause(), PlayBottonTransform()
        }
    }

    function PlayBottonTransform() {
        
        var buttonplay = document.getElementById('play')
        var playicon = document.getElementById('playicon')
        
        if (playstatus == true){
            buttonplay.classList.replace('play', 'pause')
            playicon.setAttribute('class', 'fa fa-pause')
        }
        if (playstatus == false){
            buttonplay.classList.replace('pause', 'play')
            playicon.setAttribute('class', 'fa fa-play')
        }
    }

    function Next() {
        playstatus = false
        if (devmode == true){
            console.log('Next: ', next)
            }
        if (shuffleplay == false) {
            if (current == x) {
                current = 0
                next = true
            } else {
            current = current + 1
            next = true
            }
            return video.load(), Play()
        }
        if (shuffleplay == true) {
            next = true
            return video.load(), Random(), Play()
        }

    }
    
    function Previous() {
        source.setAttribute('src', presrc)
        return video.load(), video.play()
    }

    function Queue() {
        //da definire
    }

    function Download() {
        //da definire
        if (devmode == true){
            console.log()
            }
    }

    function VideoIn() {
        if (devmode == true){
        console.log('Video in!')
        }
        var titleoonvideo = document.getElementById('video_title');
        titleoonvideo.style.display = 'block'
    }

    function VideoOut() {
        if (devmode == true){
        console.log('Video out!')
        }
        var titleoonvideo = document.getElementById('video_title');
        setTimeout(DisplayNone, 3000)
        function DisplayNone(){
        titleoonvideo.style.display = 'none'
        }
    }

    function SelectionPlay() {
        presrc = source.src
        if (devmode == true){
            console.log('Playstatus: ', playstatus)
            console.log('Previous: ', presrc)
        }
        if (playstatus == false){
            playstatus = true
        return video.play(), PlayBottonTransform(), ViewData()
        }
        if (playstatus == true){
            playstatus = false
        return video.pause(), PlayBottonTransform(), ViewData()
        }
    }

    function DevMode() {
        var devbutton = document.getElementById('devbutton')
        if (devmode == false){
            devmode = true
            devbutton.textContent = "Dev ON"
            console.log('Dev Mode Actived')
        } else {
            devmode = false
            devbutton.textContent = "Dev OFF"
            console.log('Dev Mode Deactived')
        }
    }

    function ViewData() {

        var title = api.data[current].title
        titlehtml = document.getElementById('video_title')
        titlehtml.textContent = title

        title2html = document.getElementById('video_title2')
        title2html.textContent = title

        var sources = api.data[current].sources
        sourceshtml = document.getElementById('source')
        sourceshtml.setAttribute('src', sources)

        var thumb = api.data[current].thumb
        thumbhtml = document.getElementById('video_thumb')
        thumbhtml.setAttribute('src', thumb)

        var description = api.data[current].description
        descriptionhtml = document.getElementById('video_description')
        descriptionhtml.textContent = description

        var subtitle = api.data[current].subtitle
        subtitlehtml = document.getElementById('video_subtitle')
        subtitlehtml.textContent = subtitle

        downloadshtml = document.getElementById('download')
        downloadshtml.setAttribute('onclick', sources)

        if (devmode == true){
            console.log('Title: ', title)
            console.log('Source: ', sources)
            console.log('Thumb: ', thumb)
            console.log('Subtitle: ', subtitle)
            console.log('Description: ', description)
        }
    }

    function Random() {

        current = Math.floor(Math.random()*api.data.length)
        if (devmode == true){
            console.log('Current Video is: ', current)
        }
        return video.load(), PlayBottonTransform(), ViewData()
    }

    function Shuffle() {

        var shuffle = document.getElementById('shuffle')
        if (shuffleplay == false){
            shuffleplay = true
            shuffle.textContent = "Shuffle  On"
            console.log('Shuffle: ', shuffleplay)
           } else {
            shuffleplay = false;
            shuffle.textContent = "Shuffle  Off"
            console.log('Shuffle: ', shuffleplay)
           }  
    }

    function ListOpen() {
        var filelist = document.getElementById('filelist');
        filelist.style.display = "block"
        return List9() 
    } 

    function ListClose() {
        var fileclose = document.getElementById('filelist');
        fileclose.style.display = "none"
    } 

    function List() {
        
        var filelist = document.getElementById('create_list')
        for(x = 0;x < api.data.length;x++){
            var divgen = document.createElement("div")
            divgen.setAttribute('class', 'div_list_gen')
            divgen.setAttribute('id', x)
            filelist.appendChild(divgen)
            
            var divimg = document.createElement("div")
            divimg.setAttribute('class', 'div_list_img')
            divgen.appendChild(divimg)

            var img = document.createElement('img')
            img.setAttribute('src', api.data[x].thumb)
            divimg.appendChild(img)

            var divtitle = document.createElement("div")
            divtitle.setAttribute('class', 'div_list_title')
            var title = api.data[x].title
            divtitle.textContent = title
            divgen.appendChild(divtitle)
        }
    }

    function List9() {
/*        da finire per selezionare la lista in maniera casuale
        var random = []
        for(x = 0;x < 8;x++) {
        random[x] = Math.floor(Math.random()*api.data.length)
        randomris = ('random' + x)
            console.log(randomris)
        console.log(random[x])
        } */
        var filelist1 = document.getElementById('create_list_1')
        var filelist2 = document.getElementById('create_list_2')
        var filelist3 = document.getElementById('create_list_3')
        filelist1.innerHTML = ''
        filelist2.innerHTML = ''
        filelist3.innerHTML = ''

        for(x = 0;x < api.data.length;x++)
        {
            if (x >= 0 & x < 3) {
                var divgen = document.createElement("div")
                divgen.setAttribute('class', 'div_list_gen')
                divgen.setAttribute('id', x)
                filelist1.appendChild(divgen)
                
                var divimg = document.createElement("div")
                divimg.setAttribute('class', 'div_list_img')
                divgen.appendChild(divimg)

                var img = document.createElement('img')
                img.setAttribute('class', 'img_preview_list9')
                img.setAttribute('href', api.data[x].sources)
                img.setAttribute('src', api.data[x].thumb)
                divimg.appendChild(img)

                img.addEventListener('click', function(e){
                    console.log(e.target.getAttribute('href'))

                    var source = document.getElementById('source')
                    source.setAttribute('src', e.target.getAttribute('href'))
                    video.load(), video.play(), ListClose()
                })

                var divtitle = document.createElement("div")
                divtitle.setAttribute('class', 'div_list_title')
                var title = api.data[x].title
                divtitle.textContent = title
                divgen.appendChild(divtitle)
            }
            if (x >= 3 & x <= 5) {
                var divgen = document.createElement("div")
                divgen.setAttribute('class', 'div_list_gen')
                divgen.setAttribute('id', x)
                filelist2.appendChild(divgen)
                
                var divimg = document.createElement("div")
                divimg.setAttribute('class', 'div_list_img')
                divgen.appendChild(divimg)

                var img = document.createElement('img')
                img.setAttribute('class', 'img_preview_list9')
                img.setAttribute('href', api.data[x].sources)
                img.setAttribute('src', api.data[x].thumb)
                divimg.appendChild(img)

                img.addEventListener('click', function(e){
                    console.log(e.target.getAttribute('href'))

                    var source = document.getElementById('source')
                    source.setAttribute('src', e.target.getAttribute('href'))
                    video.load(), video.play(), ListClose()
                })

                var divtitle = document.createElement("div")
                divtitle.setAttribute('class', 'div_list_title')
                var title = api.data[x].title
                divtitle.textContent = title
                divgen.appendChild(divtitle)
            }
            if (x >= 6 & x <= 8) {
                var divgen = document.createElement("div")
                divgen.setAttribute('class', 'div_list_gen')
                divgen.setAttribute('id', x)
                filelist3.appendChild(divgen)
                
                var divimg = document.createElement("div")
                divimg.setAttribute('class', 'div_list_img')
                divgen.appendChild(divimg)

                var img = document.createElement('img')
                img.setAttribute('class', 'img_preview_list9')
                img.setAttribute('href', api.data[x].sources)
                img.setAttribute('src', api.data[x].thumb)
                divimg.appendChild(img)

                img.addEventListener('click', function(e){
                    var source = document.getElementById('source')
                    source.setAttribute('src', e.target.getAttribute('href'))
                    video.load(), video.play(), ListClose()
                })

                var divtitle = document.createElement("div")
                divtitle.setAttribute('class', 'div_list_title')
                var title = api.data[x].title
                divtitle.textContent = title
                divgen.appendChild(divtitle)
            }
            if (x >= 9) {
                return
            }
        }
    }

        var vid = document.getElementById("video");
        vid.ontimeupdate = function(){
        var percentage = ( vid.currentTime / vid.duration ) * 100;
        $("#seekbar span").css("width", percentage+"%");
        };

        $("#seekbar").on("click", function(e){
            var offset = $(this).offset();
            var left = (e.pageX - offset.left);
            var totalWidth = $("#seekbar").width();
            var percentage = ( left / totalWidth );
            var vidTime = vid.duration * percentage;
            vid.currentTime = vidTime;
        });


    function Up() {
        if (devmode == true){
        console.log(video.volume)
        }
        var up = document.getElementById('up')
        var down = document.getElementById('down')
        down.classList.remove("down_ko")
        if (video.volume < 0.9){
            video.volume+=0.1
            up.classList.remove("up_ko")}
        if (video.volume > 0.8){
            up.classList.add("up_ko")
        }
        
    }
    function Down() {
        if (devmode == true){
            console.log(video.volume)
            }
        var up = document.getElementById('up')
        var down = document.getElementById('down')
        up.classList.remove("up_ko")
        if (video.volume > 0.1){
            video.volume-=0.1
            down.classList.remove("down_ko")}
        if (video.volume < 0.1){
            down.classList.add("down_ko")
        }
    }
    function Open() {
        var source = document.getElementById('source')
        source.setAttribute('src', url.value)
        video.load();
        console.log(source)
    }
    function Barenable() {
        if (video.controls == false){
        video.controls = true;
        var barenable = document.getElementById('barenable')
        barenable.textContent = "Control  Enable"
        } else {
        video.controls = false;
        var barenable = document.getElementById('barenable')
        barenable.textContent = "Control  Disabled"
       }
    }
    function Download() {
        var source = document.getElementById('source')
        var a = document.createElement("a")
        a.setAttribute('href', source.src)
        a.setAttribute('targer', "_blank")
        console.log(source.src)
        a.click()

    }

    return { 
       getPlay: Play, getUp: Up, getDown: Down, getOpen: Open,
       getBarenable: Barenable, getDownload: Download, getQueue: Queue,
       getShuffle: Shuffle, getNext: Next, getPrevious: Previous,
       getRandom: Random, getListOpen: ListOpen,
       getPlayBottonTransform: PlayBottonTransform, getViewData: ViewData,
       getDevMode: DevMode, getListClose: ListClose, getVideoIn: VideoIn,
       getVideoOut: VideoOut, getFirstAction: FirstAction
    };




})(api);

var App = (function(Player) {
    
    var Play = document.querySelector('#play')
    Play.addEventListener('click', Player.getPlay)
    var Up = document.querySelector('#up')
    Up.addEventListener('click', Player.getUp)
    var Down = document.querySelector('#down')
    Down.addEventListener('click', Player.getDown)
    var Open = document.querySelector('#open')
    Open.addEventListener('click', Player.geOpen)
    var Barenable = document.querySelector('#barenable')
    Barenable.addEventListener('click', Player.getBarenable)
    var Download = document.querySelector('#download')
    Download.addEventListener('click', Player.getDownload)
    var Queue = document.querySelector('#queue')
    Queue.addEventListener('click', Player.getQueue)
    var Shuffle = document.querySelector('#shuffle')
    Shuffle.addEventListener('click', Player.getShuffle)
    var Next = document.querySelector('#next')
    Next.addEventListener('click', Player.getNext)
    var Previous = document.querySelector('#previous')
    Previous.addEventListener('click', Player.getPrevious)
    var DevButton = document.querySelector('#devbutton')
    DevButton.addEventListener('click', Player.getDevMode)
    var ListButton = document.querySelector('#list')
    ListButton.addEventListener('click', Player.getListOpen)
    var ListClose = document.querySelector('#close_list')
    ListClose.addEventListener('click', Player.getListClose)
    var ListCreate = document.querySelector('#create_list')
    ListCreate.addEventListener('click', Player.getList)
    
})(Player);