import FileUpload from '@/components/FileUpload';
import StepWrapper from '@/components/StepWrapper';
import { useInput } from '@/hooks/useInput';
import MainLayout from '@/layouts/MainLayout';
import { Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react'

const Create = () => {
  const [activeStep, setActiveStep] = useState(0) 
  const [picture, setPicture] = useState(null)
  const [audio, setAudio] = useState(null)

  const next = () => {
    if(activeStep !==2 ) {
      setActiveStep(prev => prev + 1)
   } 
  }

  const back = () => {
    setActiveStep(prev => prev - 1)
  }
  return (
    <MainLayout>
        <StepWrapper activeStep={activeStep}>
            {activeStep === 0 &&
              <Grid container direction={"column"} style={{padding: 20}}>
                <TextField
                  style={{marginTop:10}}
                  label={"Track name"}
                />
                <TextField
                  style={{marginTop:10}}
                  label={"Author"}
                />
                <TextField
                  style={{marginTop:10}}
                  label={"Lyrics"}
                  multiline
                  rows={3}
                />
              </Grid>
            }
            {activeStep === 1 &&
              <FileUpload setFile={setPicture} accept="image/*">
                  <Button>Upload folder</Button>
              </FileUpload>    
            }
            {activeStep === 2 &&
              <FileUpload setFile={setAudio} accept="audio/*">
              <Button>Upload audio</Button>
          </FileUpload>
            }
        </StepWrapper>
        <Grid container justifyContent='space-between'>
            <Button disabled={activeStep === 0} onClick={back}>Back</Button>
            <Button onClick={next}>Forward</Button>
        </Grid>
    </MainLayout>
  )
}

export default Create;