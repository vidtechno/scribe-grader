import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { format } from 'date-fns';

interface Point {
  created_at: string;
  overall_band: number | null;
  task1_band: number | null;
  task2_band: number | null;
  speaking_band: number | null;
  grammar_errors_count?: number | null;
  lexical_errors_count?: number | null;
}

export function BandTrendChart({ data }: { data: Point[] }) {
  const chartData = [...data].reverse().map((d, i) => ({
    name: `#${i + 1}`,
    date: format(new Date(d.created_at), 'MMM d'),
    Overall: d.overall_band ?? null,
    Writing: d.task1_band && d.task2_band ? Math.round(((d.task1_band + d.task2_band * 2) / 3) * 2) / 2 : (d.task2_band ?? d.task1_band ?? null),
    Speaking: d.speaking_band ?? null,
  }));

  if (chartData.length === 0) {
    return (
      <div className="h-64 flex items-center justify-center text-muted-foreground text-sm">
        Complete your first mock test to see your band trend
      </div>
    );
  }

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <YAxis domain={[0, 9]} stroke="hsl(var(--muted-foreground))" fontSize={12} />
          <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--card))', border: '1px solid hsl(var(--border))', borderRadius: '8px' }} />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Line type="monotone" dataKey="Overall" stroke="hsl(var(--primary))" strokeWidth={3} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="Writing" stroke="hsl(var(--accent))" strokeWidth={2} dot={{ r: 3 }} />
          <Line type="monotone" dataKey="Speaking" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}