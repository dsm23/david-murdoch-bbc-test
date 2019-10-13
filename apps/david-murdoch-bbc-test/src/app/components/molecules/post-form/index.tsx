import React, { SyntheticEvent, useState } from 'react';
import { Form, Field } from 'react-final-form';
import {
  Button,
  CircularProgress,
  Snackbar,
  Typography,
} from '@material-ui/core';

import {
  FinalFormSlider,
  MaterialSnackbarContentWrapper,
} from '@david-murdoch-bbc-test/shared-components';

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
        submitting,
        submitFailed,
        submitSucceeded,
      }) => (
        <form onSubmit={handleSubmit}>
          <Typography variant="h6" id="input-slider" gutterBottom>
            Rate this Article ({values.rank}/10)
          </Typography>
          <Field name="rank" component={FinalFormSlider} />
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
