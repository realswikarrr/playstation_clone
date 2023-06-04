import clsx from "clsx";

export default function CustomButton({ color, text }) {
  console.log(color);
  return (
    <div
      className={clsx(
        "border-2",
        "box-border",
        "border-transparent",
        color === "red" && "hover:border-red-600",
        "transition",
        "ease-in-out",
        "rounded-full",
        "flex",
        "p-0.5"
      )}
    >
      <button
        className={clsx(
          color === "red" && "bg-red-500",
          "text-sm",
          "font-bold",
          "pl-3",
          "pr-3",
          "pt-3",
          "pb-3",
          "rounded-full",
          "transition",
          "ease-in-out",
          "hover:opacity-80"
        )}
      >
        {text}
      </button>
    </div>
  );
}
