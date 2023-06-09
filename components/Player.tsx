import { Grid, IconButton } from '@mui/material';
import React, { useEffect } from 'react';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import styles from '../styles/Player.module.scss'
import { ITrack } from '@/types/track';
import TrackProgress from './TrackProgress';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { useActions } from '@/hooks/useActions';
import {ITrack} from "../types/track"

let audio: any;

const Player = () => {
const track: ITrack = {_id: '1', name: "Track 1", artist: "Artist 1", text: "some text", listens: 5, audio: 'http://localhost:5000/audio/123.mp3', picture: "http://localhost:5000/image/cover.jpg", comments: []};
const {pause, volume, active, duration, currentTime} = useTypedSelector(state => state.player)

const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack} = useActions()

useEffect(() => {
  if(!audio) {
    audio = new Audio() 
  }else {
    setAudio()
    play()
  }
}, [active])

const setAudio = () => {
  if (active) {
    audio.src =  active.audio
    audio.volume = volume / 100
    audio.onloadedmetadata = () => {
      setDuration(Math.ceil(audio.duration))
    }
    audio.ontimeupdate = () => {
      setCurrentTime(Math.ceil(audio.currentTime))
    }
  }
}

const play = () => { 
  if(pause) {
    playTrack()
    audio.play()
  }else {
    pauseTrack()
    audio.pause()
  }
}

const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
   audio.volume = Number(e.target.value) / 100 
   setVolume(Number(e.target.value))
}

const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
  audio.currentTime = Number(e.target.value)
  setCurrentTime(Number(e.target.value))
}

if(!active){
  return null
}

  return (
    <div className={styles.player}>
        <IconButton onClick={play}>
            {!pause
            ? <PauseIcon/>
            : <PlayArrowIcon/>
            }
        </IconButton>
        <Grid container direction='column' style={{width:200, margin: '0 20px'}}>
            <div>{active?.name}</div>
            <div style={{fontSize:12, color: 'gray'}}>{active?.artist}</div>
        </Grid>
        <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime}/>
        <VolumeUpIcon style={{marginLeft:'auto'}}/>
        <TrackProgress left={volume} right={100} onChange={changeVolume}/>
    </div>
  );
};

export default Player;