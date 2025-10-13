// Import tips
import { Tips, GridData } from "../lib";
import { InfoCards } from "../ui/menu/InfoCards";

export const Menu = () => {
  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Grid de Tips - Responsivo */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {Tips.map((tip) => (
          <article key={tip.title} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl p-4 sm:p-6">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
              {tip.title}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl font-light text-gray-700 hover:font-medium transition-all duration-200 leading-relaxed">
              {tip.descrip}
            </p>
          </article>
        ))}
      </div>

      {/* Sección información */}
      <section className="pt-4 sm:pt-6 lg:pt-10 pb-6 sm:pb-10 lg:pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Título de la sección */}
          <div className="text-center mx-auto mb-8 sm:mb-12 lg:mb-20 max-w-2xl px-4">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">
              Noticias del mundo financiero
              <span className="ml-2">💲</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mt-4">
              Mantente actualizado con las últimas tendencias y noticias del sector financiero
            </p>
          </div>

          {/* Grid de noticias - Completamente responsivo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {GridData.map(grid => (
              <div key={grid.title} className="w-full">
                <InfoCards 
                  title={grid.title} 
                  url={grid.url} 
                  date={grid.date} 
                  img={grid.img}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
