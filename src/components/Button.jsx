/* eslint-disable react/prop-types */
function Button({ type, children }) {
  if (type === "primary") {
    return <button className="bg-primary-300 w-auto py-3 px-6 text-lg rounded-lg text-white flex items-center justify-center gap-3 lg:text-2xl lg:py-4 lg:px-8">{children}</button>;
  }
  if (type === "secondary") {
    return (
      <button className="flex items-center justify-center gap-3 rounded-lg px-6 py-3 text-lg text-primary-300 shadow-[inset_0_0_0_.1rem] shadow-primary-300 lg:px-8 lg:py-4 lg:text-2xl">
        {children}
      </button>
    );
  }
}

export default Button;
