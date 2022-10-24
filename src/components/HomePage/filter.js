import React from "react";

function Filter(props) {
  return (
    <div className="w-full md:w-2/3 mt-12 shadow p-5 rounded-lg bg-white">
      <div className="relative ">
        <div className="absolute flex items-center ml-2 h-full">
          <svg
            className="w-4 h-4 fill-current text-primary-gray-dark"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z"></path>
          </svg>
        </div>

        <input
          onChange={(event) => props.FilmName(event.target.value)}
          type="text"
          placeholder="Search a Name..."
          className="px-8 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
        ></input>
      </div>

      <div className="flex items-center  mt-4">
        <p className="font-medium">Filter</p>
        <select
          className="px-4 py-3 w-1/4 ml-4  rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 md:text-sm text-[10px]"
          onChange={(event) => props.ChangeYear({ year: event.target.value })}
        >
          <option value="">All City</option>
          <option>------</option>
          <option>Adana</option>
          <option>Adıyaman</option>
          <option>Afyonkarahisar</option>
          <option>Ağrı</option>
          <option>Amasya</option>
          <option>Ankara</option>
          <option>Antalya</option>
          <option>Artvin</option>
          <option>Aydın</option>
          <option>Balıkesir</option>
          <option>Bilecik</option>
          <option>Bingöl</option>
          <option>Bitlis</option>
          <option>Bolu</option>
          <option>Burdur</option>
          <option>Bursa</option>
          <option>Çanakkale</option>
          <option>Çankırı</option>
          <option>Çorum</option>
          <option>Denizli</option>
          <option>Diyarbakır</option>
          <option>Edirne</option>
          <option>Elazığ</option>
          <option>Erzincan</option>
          <option>Erzurum</option>
          <option>Eskişehir</option>
          <option>Gaziantep</option>
          <option>Giresun</option>
          <option>Gümüşhane</option>
          <option>Hakkâri</option>
          <option>Hatay</option>
          <option>Isparta</option>
          <option>Mersin</option>
          <option>İstanbul</option>
          <option>İzmir</option>
          <option>Kars</option>
          <option>Kastamonu</option>
          <option>Kayseri</option>
          <option>Kırklareli</option>
          <option>Kırşehir</option>
          <option>Kocaeli</option>
          <option>Konya</option>
          <option>Kütahya</option>
          <option>Malatya</option>
          <option>Manisa</option>
          <option>Kahramanmaraş</option>
          <option>Mardin</option>
          <option>Muğla</option>
          <option>Muş</option>
          <option>Nevşehir</option>
          <option>Niğde</option>
          <option>Ordu</option>
          <option>Rize</option>
          <option>Sakarya</option>
          <option>Samsun</option>
          <option>Siirt</option>
          <option>Sinop</option>
          <option>Sivas</option>
          <option>Tekirdağ</option>
          <option>Tokat</option>
          <option>Trabzon</option>
          <option>Tunceli</option>
          <option>Şanlıurfa</option>
          <option>Uşak</option>
          <option>Van</option>
          <option>Yozgat</option>
          <option>Zonguldak</option>
          <option>Aksaray</option>
          <option>Bayburt</option>
          <option>Karaman</option>
          <option>Kırıkkale</option>
          <option>Batman</option>
          <option>Şırnak</option>
          <option>Bartın</option>
          <option>Ardahan</option>
          <option>Iğdır</option>
          <option>Yalova</option>
          <option>Karabük</option>
          <option>Kilis</option>
          <option>Osmaniye</option>
          <option>Düzce</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
