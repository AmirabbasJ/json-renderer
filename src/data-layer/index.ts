import { Schema } from '@/domain';

import json from './data.json';

export const getData = (): Schema => Schema.parse(json);
