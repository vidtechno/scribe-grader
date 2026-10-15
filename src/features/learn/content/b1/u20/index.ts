import type { Drill, Lesson } from '../../../types';

// While the unit is being written the files are discovered, so a half-written unit still loads. The final index imports every file explicitly (scripts run outside Vite).
const lessonFiles = import.meta.glob<{ default: Lesson }>('./l*.ts', { eager: true });
const drillFiles = import.meta.glob<{ drills: Drill[] }>('./drills*.ts', { eager: true });
const ORDER = ['l1', 'l12', 'l2', 'l3', 'l4', 'l13', 'l9', 'l5', 'l6', 'l14', 'l10', 'l7', 'l15', 'l8', 'l11'];

export const lessons: Lesson[] = ORDER.map((k) => lessonFiles[`./${k}.ts`]?.default).filter((l): l is Lesson => !!l);
export const drills: Drill[] = Object.keys(drillFiles).sort().flatMap((k) => drillFiles[k].drills);
