import React from 'react';
import { Form, Field } from 'react-final-form';
import {
  Button,
  CircularProgress,
  Slider,
  Snackbar,
  Typography,
} from '@material-ui/core';

import { environment } from '../../../../environments/environment';

const PostForm = ({ initialValues, onSubmit }) => (
  <Form onSubmit={onSubmit} initialValues={initialValues}>
    {({
      values,
      handleSubmit,
      form: { change },
      submitting,
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
        {submitSucceeded && <h1>Submit Succeeded</h1>}
      </form>
    )}
  </Form>
);

export default PostForm;
