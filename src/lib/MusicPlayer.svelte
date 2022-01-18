<script>
    import { count, musicList } from "../stores";

    export let source;

    let audio;
    let progressBar;
    let musicPlayer = 'music__player';
    let play_pause = 'ph-play-circle';
    let speed = 1.0;
    let widthProgress = 0;

    function playing() {
        musicPlayer = 'music__player playing';
        play_pause = 'ph-pause-circle';
        audio.playbackRate = speed
        audio.play();
        console.log('played');
    }

    function pausing() {
        musicPlayer = 'music__player';
        play_pause = 'ph-play-circle';
        audio.playbackRate = speed
        audio.pause();
        console.log('paused');
    }

    const controlMusic = () => {
        if (musicPlayer === 'music__player') {
            playing();
        } else if (musicPlayer === 'music__player playing') {
            pausing();
        }
    }

    const prevMusic = () => {
        if ($count != 0) {
            $count--;
        } else {
            $count = ($musicList.length - 1);
        }

        widthProgress = 0;
        pausing();
    }

    const nextMusic = () => {
        if ($count != ($musicList.length - 1)) { 
            $count++;
        } else {
            $count = 0;
        }

        widthProgress = 0;
        pausing();
    }

    const changeSpeed = () => {
        if (speed === 1.0) {
            speed = 1.5;
            playing();
        } else if (speed === 1.5) {
            speed = 2.0;
            playing();
        } else if (speed === 2.0) {
            speed = 0.5;
            playing();
        } else if (speed === 0.5) {
            speed = 1.0;
            playing();
        }
    }

    const updateProgressBar = (e) => {
        const { duration, currentTime } = e.srcElement;
        const progressPercentage = (currentTime / duration) * 100;
        widthProgress = progressPercentage;
    }

    const updateProgressBarPlayPosition = (e) => {
        // console.log(progressBar.clientWidth);
        const width = progressBar.clientWidth;
        const clickWhere = e.offsetX;
        const { duration } = audio;
        audio.currentTime = (clickWhere / width) * duration;
    }
</script>

<audio src="{source}" bind:this={audio} on:timeupdate={updateProgressBar}></audio>
<slot></slot>
<div class={musicPlayer}>
    <div class="music__player--progress" bind:this={progressBar} on:click={updateProgressBarPlayPosition}>
        <div class="progress" style="width: {widthProgress}%;"></div>
    </div>
    <button id="prev" class="action" on:click={prevMusic}>
        <i class="ph-skip-back-circle"></i>
    </button>
    <button id="play" class="action" on:click={controlMusic}>
        <i class={play_pause}></i>
    </button>
    <button id="next" class="action" on:click={nextMusic}>
        <i class="ph-skip-forward-circle"></i>
    </button>
    <button class="speed" on:click={changeSpeed}><p>{speed}x</p></button>
</div>
