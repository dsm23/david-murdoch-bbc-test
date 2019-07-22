import React, { SyntheticEvent, useState } from 'react';
import { Form, Field } from 'react-final-form';
import {
  Button,
  CircularProgress,
  Slider,
  Snackbar,
  Typography,
} from '@material-ui/core';

import MaterialSnackbarContentWrapper from '../material-snackerbar-content-wrapper';

import { environment } from '../../../../environments/environment';

const PostForm = ({ initialValues, onSubmit }) => {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(true);
    return onSubmit;
  }

  function handleClose(event?: SyntheticEvent, reason?: string) {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return (
    <Form
      onSubmit={values => handleClick()(values)}
      initialValues={initialValues}
    >
      {({
        values,
        handleSubmit,
        form: { change },
        submitting,
        submitFailed,
        submitSucceeded,
      }) => (
        <form onSubmit={handleSubmit}>
          <Typography variant="h6" id="input-slider" gutterBottom>
            Rate this Article ({values.rank}/10)
          </Typography>
          <Field name="rank">
            {({ input }) => (
              <>
                <Slider
                  {...input}
                  onChange={(_, newValue) => change(input.name, newValue)}
                  valueLabelDisplay="auto"
                  marks
                  step={1}
                  min={1}
                  max={10}
                  aria-labelledby="input-slider"
                />
              </>
            )}
          </Field>
          <Button variant="contained" color="secondary" fullWidth type="submit">
            Submit
          </Button>
          {!environment.production && (
            <pre>{JSON.stringify(values, null, 2)}</pre>
          )}
          {submitting && <CircularProgress />}
          {submitSucceeded && (
            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <MaterialSnackbarContentWrapper
                onClose={handleClose}
                variant="success"
                message="Submit Succeeded!"
              />
            </Snackbar>
          )}
          {submitFailed && (
            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
            >
              <MaterialSnackbarContentWrapper
                onClose={handleClose}
                variant="error"
                message="Submit Failed!"
              />
            </Snackbar>
          )}
        </form>
      )}
    </Form>
  );
};

export default PostForm;
