export default function CustomButton({ color }) {
  console.log(color);
  return (
    <div
      className={`border-2 box-border border-transparent hover:border-${color}-600  transition ease-in-out rounded-full flex p-0.5`}
    >
      <button
        className={`bg-${color}-500 text-sm font-bold pl-3 pr-3 pt-2 pb-2 rounded-full transition ease-in-out  hover:opacity-80`}
      >
        Browse the deals
      </button>
    </div>
  );
}
