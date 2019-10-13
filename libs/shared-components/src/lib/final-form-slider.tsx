import React, { FunctionComponent } from 'react';
import { FieldRenderProps, useForm } from 'react-final-form';
import { Slider } from '@material-ui/core';

type Props = FieldRenderProps<number, any>;

const FinalFormSlider: FunctionComponent<Props> = ({ input }) => {
  const { change } = useForm();

  return (
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
  );
};

export { FinalFormSlider };
