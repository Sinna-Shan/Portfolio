function Stats() {
  return (
    <section className="hidden h-44 w-full items-center justify-between bg-shade-300 px-2 sm:flex lg:h-72">
      <p
        className="w-48 text-center text-2xl text-white lg:text-3xl"
        data-aos="fade-up"
      >
        <span className="text-7xl font-semibold text-primary-300 lg:text-8xl">
          10+
        </span>
        <br />
        projects
      </p>
      <p
        className="w-48 text-center text-2xl text-white lg:text-3xl"
        data-aos="fade-down"
      >
        <span className="text-7xl font-semibold text-primary-300 lg:text-8xl">
          1+
        </span>
        <br />
        years
      </p>
      <p
        className="pr-4 text-right text-3xl text-white lg:text-5xl lg:leading-normal"
        data-aos="fade-left"
      >
        let&apos;s make{" "}
        <span className="font-semibold text-primary-300 lg:text-6xl">your</span>
        <br /> digital{" "}
        <span className="font-semibold text-primary-300 lg:text-6xl">
          dream
        </span>{" "}
        happen
      </p>
    </section>
  );
}

export default Stats;
