import { Flame } from "lucide-react";

export function StreakWidget({ streak }: { streak: number }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 p-4 shadow-sm">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white shadow">
        <Flame className="h-6 w-6" />
      </div>
      <div>
        <p className="text-2xl font-bold text-orange-700">{streak}</p>
        <p className="text-xs font-medium text-orange-800/80">day streak</p>
      </div>
    </div>
  );
}
