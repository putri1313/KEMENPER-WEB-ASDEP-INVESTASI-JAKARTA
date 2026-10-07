export type LocalizedTourismCopy = { en: string; id: string };

export type TourismMapPoint = {
  id: string;
  name: string;
  area: string;
  latitude: number;
  longitude: number;
  category: LocalizedTourismCopy;
  description: LocalizedTourismCopy;
  image?: string;
  imageCredit?: { label: string; url: string };
};
