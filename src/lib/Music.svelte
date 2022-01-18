<script>
    import { musicList, count } from '../stores'
    import MusicContainer from './MusicContainer.svelte';
    import MusicImg from './MusicImg.svelte';
    import MusicPlayer from './MusicPlayer.svelte';
    import MusicTitle from './MusicTitle.svelte';
</script>

<MusicContainer>
    <MusicPlayer source={$musicList[$count].source}>
        <MusicTitle title={$musicList[$count].title} />
        <MusicImg background={$musicList[$count].background} />
    </MusicPlayer>
</MusicContainer>

<style>
</style>
