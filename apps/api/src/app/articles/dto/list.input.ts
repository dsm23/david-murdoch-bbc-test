import { InputType } from 'type-graphql';

import { IList } from '../interfaces/list-interface';

@InputType()
export class ListInput extends IList {}
