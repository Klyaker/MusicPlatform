import TrackList from "@/components/TrackList";
import MainLayout from "@/layouts/MainLayout";
import { ITrack } from '@/types/track';
import { Button, Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";

const Index = () => {
    const router = useRouter()
    const tracks: ITrack[] = [
        {_id: '1', name: "Track 1", artist: "Artist 1", text: "some text", listens: 5, audio: 'http://localhost:5000/audio/123.mp3', picture: "http://localhost:5000/image/cover.jpg", comments: []},
        {_id: '2', name: "Track 2", artist: "Artist 2", text: "some text", listens: 5, audio: 'http://localhost:5000/audio/234.mp3', picture: "http://localhost:5000/image/folder.jpg", comments: []},
        {_id: '3', name: "Track 3", artist: "Artist 3", text: "some text", listens: 5, audio: 'http://localhost:5000/audio/456.mp3', picture: "http://localhost:5000/image/hnida.jpg", comments: []},
    
]
    return (
    <MainLayout>
        <Grid container justifyContent='center'>
            <Card style={{width: 900}}>
                <Box p={3}>
                    <Grid container justifyContent='space-between'>
                        <h1>Track List</h1>
                        <Button onClick = {() => router.push('/tracks/create')}>
                            Upload
                        </Button>
                    </Grid>
                </Box>
                <TrackList tracks={tracks}/>
            </Card>
        </Grid>
        
    </MainLayout>
    
    );
};

export default Index;

