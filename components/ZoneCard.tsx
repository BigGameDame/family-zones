import type { Zone } from "@/types/zone";

export function ZoneCard({ zone }: { zone: Zone }) {
  const badge =
    zone.status === "available"
      ? "🟢 Available"
      : zone.status === "claimed"
      ? "🟡 Claimed"
      : zone.status === "awaiting_inspection"
      ? "🔵 Inspect"
      : "⚫ Locked";

  return (
    <div className="rounded-2xl bg-white/85 p-4 shadow-sm border border-black/10">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-base font-bold">{zone.name}</div>
          <div className="text-sm opacity-80">{badge}</div>
        </div>
        <div className="text-sm font-semibold">
          ${zone.minPay}–${zone.maxPay}
        </div>
      </div>
      <div className="mt-3 text-xs opacity-70">
        Area: {zone.area} • Skill: {zone.skillLevel} • Cooldown: {zone.cooldownDays}d
      </div>
    </div>
  );
}
