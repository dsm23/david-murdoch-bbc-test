import { ObjectType } from 'type-graphql';

import { ITypography } from '../interfaces/typography-interface';

@ObjectType({ implements: ITypography })
export class Typography extends ITypography {}
