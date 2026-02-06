type Props = { name: string; src?: string | null; size?: number };

export function Avatar({ name, src, size = 44 }: Props) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="rounded-full bg-black/10 overflow-hidden flex items-center justify-center"
        style={{ width: size, height: size }}
        aria-label={`${name} avatar`}
      >
        {src ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span className="text-sm font-semibold">{name.slice(0, 1).toUpperCase()}</span>
        )}
      </div>
      <div className="text-sm font-semibold">{name}</div>
    </div>
  );
}
