import { ObjectType } from 'type-graphql';

import { IList } from '../interfaces/list-interface';

@ObjectType({ implements: IList })
export class List extends IList {}
