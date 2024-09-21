/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
function Button({ type, onClick, children }) {
  if (type === "primary") {
    return (
      <button
        className="flex w-auto items-center justify-center gap-3 rounded-lg bg-primary-300 px-6 py-3 text-lg text-white lg:px-8 lg:py-4 lg:text-2xl"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  if (type === "secondary") {
    return (
      <button className="flex items-center justify-center gap-3 rounded-lg px-6 py-3 text-lg text-primary-300 shadow-[inset_0_0_0_.1rem] shadow-primary-300 lg:px-8 lg:py-4 lg:text-2xl">
        {children}
      </button>
    );
  }
  if (type === "ternary") {
    return (
      <button className="flex items-center justify-center gap-3 rounded-md px-4 py-2 text-lg text-primary-300 shadow-[inset_0_0_0_.1rem] shadow-primary-300 lg:px-8 lg:py-4 lg:text-2xl hover:bg-primary-300 hover:shadow-none hover:text-shade-300 duration-300 ease-linear">
        {children}
      </button>
    );
  }
}

export default Button;
