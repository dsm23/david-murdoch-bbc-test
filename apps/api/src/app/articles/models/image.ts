import { ObjectType } from 'type-graphql';

import { IImage } from '../interfaces/image-interface';

@ObjectType({ implements: IImage })
export class Image extends IImage {}
