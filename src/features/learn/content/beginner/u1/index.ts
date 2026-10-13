import type { Drill, Lesson } from '../../../types';
import l1 from './l1';
import l2 from './l2';
import l3 from './l3';
import l4 from './l4';
import l5 from './l5';
import l6 from './l6';
import l7 from './l7';
import l8 from './l8';
import l9 from './l9';
import l10 from './l10';
import l11 from './l11';
import l12 from './l12';
import { drillsNew } from './drills-new';

export const lessons: Lesson[] = [l1, l2, l3, l4, l5, l11, l6, l7, l8, l9, l12, l10];
export const drills: Drill[] = [...drillsNew];
