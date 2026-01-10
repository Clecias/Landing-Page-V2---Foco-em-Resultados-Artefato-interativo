export function Button({ className = '', style, children, ...props }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}
