// Import tips
import { Tips, GridData } from "../lib";
import { InfoCards } from "../ui/menu/InfoCards";

export const Menu = () => {
  return (
    <>
      <div className="justify-between grid grid-cols-3 gap-6">
        {Tips.map((tip) => (
          <article key={ tip.title } className="container bg-white shadow-2xl rounded-2xl p-5">
            <h1 className="text-3xl font-bold text-gray-900">{tip.title}</h1>
            <p className="text-xl font-light text-gray-700 hover:font-bold mt-2">
              {tip.descrip}
            </p>
          </article>
        ))}
      </div>

      {/* Seccion informacion */}
      <section className="pt-6 lg:pt-10 pb-10 lg:pb-20">
        <div className="container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                <h2
                  className="
                  font-bold
                  text-2xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                >
                  Noticias del mundo financiero💲!
                </h2>
              </div>
            </div>
          </div>

          {/* seccion cards */}
          <div className="flex flex-wrap -mx-4">
            { GridData.map( grid => (
              <InfoCards key={ grid.title } title={grid.title} url={grid.url} date={grid.date} img={ grid.img }/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
