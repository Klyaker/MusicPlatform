import MainLayout from '@/layouts/MainLayout';
import { ITrack } from '@/types/track';
import { Button, Grid, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'

const TrackPage = () => {
    const track: ITrack = {_id: '1', name: "Track 1", artist: "Artist 1", text: "some text", listens: 5, audio: 'http://localhost:5000/audio/123.mp3', picture: "http://localhost:5000/image/cover.jpg", comments: []};
    const router = useRouter();

    return (
        <MainLayout>
            <Button 
            variant={'outlined'}
            style={{fontSize:32}}
            onClick={() => router.push('/tracks')}>
                Back
            </Button>
            <Grid container style={{margin:'20px 0'}}>
                <img src={track.picture} width={200} height={200}/>
                    <div style={{marginLeft:30}}>
                        <h1>Track's name: {track.name}</h1>
                        <h1>Artist: {track.artist}</h1>
                        <h1>Listens: {track.listens}</h1>
                    </div>

            </Grid>
                <h1>Lyrics</h1>
                <p>{track.text}</p>
                <h1>Comments</h1>
            <Grid container>
                <TextField
                    label="Name"
                    fullWidth
                />
                <TextField
                    label="Comment"
                    fullWidth
                    multiline
                    rows={4}
                />
                <Button>Send</Button>
            </Grid>
            <div>
                {track.comments.map(comment =>
                    <div>
                        <div>Author: {comment.username}</div>
                        <div>Comment: {comment.text}</div>
                    </div>
                    )}
            </div>
        </MainLayout>
    );
    };

    export default TrackPage;