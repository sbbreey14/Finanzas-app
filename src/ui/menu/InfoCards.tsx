interface Props {
  title: string;
  url: string;
  date: string;
  img: string;
}

export const InfoCards = ({ title, date, url, img }: Props) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 px-4">
      <div className="max-w-[370px] mx-auto mb-10">
        <div className="rounded overflow-hidden mb-8">
          <img src={img} alt="image" className="w-full" />
        </div>
        <div>
          <span
            className="
                     bg-black
                     rounded
                     inline-block
                     text-center
                     py-1
                     px-4
                     text-xs
                     leading-loose
                     font-semibold
                     text-white
                     mb-5
                     "
          >
            {date}
          </span>
          <h3>
            <a
              href="javascript:void(0)"
              className="
                        font-semibold
                        text-xl
                        sm:text-2xl
                        lg:text-xl
                        xl:text-2xl
                        mb-4
                        inline-block
                        text-dark
                        hover:text-primary
                        "
            >
              {title}
            </a>
          </h3>
          <a
            href={url}
            target="_blank"
            className="middle none center mr-4 rounded-lg bg-gray-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-500/20 transition-all hover:shadow-lg hover:shadow-gray-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Ver mas.
          </a>
        </div>
      </div>
    </div>
  );
};
