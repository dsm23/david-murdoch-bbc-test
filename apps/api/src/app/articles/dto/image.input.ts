import { InputType } from 'type-graphql';

import { IImage } from '../interfaces/image-interface';

@InputType()
export class ImageInput extends IImage {}
