function Home() {
  return (
    <section className="h-screen bg-primary-300 flex">
      <div className="w-1/2 bg-primary-300 z-10">text-div</div>
      <div className="bg-hero-img bg-primary-100 bg-blend-darken w-1/2 bg-cover before:block before:absolute before:w-60 before:-translate-x-28 before:-skew-x-[20deg] before:h-full before:bg-primary-300">
        img-div
      </div>
    </section>
  );
}

export default Home;
