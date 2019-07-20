import { createUnionType } from 'type-graphql';

import { ImageInput } from './image.input';
import { ListInput } from './list.input';
import { TypographyInput } from './typography.input';

export const ModelInputUnion = createUnionType({
  name: 'ModelInput',
  types: [ImageInput, ListInput, TypographyInput],
  // resolveType: value => {
  //   if ('text' in value) {
  //     return TypographyInput;
  //   }
  //   if ('url' in value) {
  //     return ImageInput;
  //   }
  //   if ('items' in value) {
  //     return ListInput;
  //   }
  // },
});
