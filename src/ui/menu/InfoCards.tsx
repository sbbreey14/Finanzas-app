interface Props {
  title: string;
  url: string;
  date: string;
  img: string;
}

export const InfoCards = ({ title, date, url, img }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
      {/* Imagen */}
      <div className="relative overflow-hidden h-48 sm:h-52 lg:h-48">
        <img 
          src={img} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>
      
      {/* Contenido */}
      <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col">
        {/* Fecha */}
        <span className="bg-gray-900 text-white rounded-full px-3 py-1 text-xs sm:text-sm font-semibold mb-3 w-fit">
          {date}
        </span>
        
        {/* Título */}
        <h3 className="font-bold text-lg sm:text-xl lg:text-2xl text-gray-900 mb-3 sm:mb-4 leading-tight hover:text-blue-600 transition-colors duration-200 flex-1">
          <a href="javascript:void(0)" className="line-clamp-3">
            {title}
          </a>
        </h3>
        
        {/* Botón */}
        <div className="mt-auto">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Ver más
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
