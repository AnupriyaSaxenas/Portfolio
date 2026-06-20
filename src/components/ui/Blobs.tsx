export function Blobs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className="blob blob-animate w-[28rem] h-[28rem] -top-20 -left-16"
        style={{ background: 'var(--blob-1)' }}
      />
      <div
        className="blob blob-animate w-[24rem] h-[24rem] top-10 right-0"
        style={{ background: 'var(--blob-2)', animationDelay: '-5s' }}
      />
      <div
        className="blob blob-animate w-[20rem] h-[20rem] top-48 left-1/3"
        style={{ background: 'var(--blob-3)', animationDelay: '-9s' }}
      />
    </div>
  );
}
