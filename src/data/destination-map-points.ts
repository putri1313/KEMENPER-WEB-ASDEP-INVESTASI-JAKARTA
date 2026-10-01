import { baliMapPoints } from "@/data/bali-map-points";
import { jakartaMapPoints } from "@/data/jakarta-map-points";
import { labuanBajoMapPoints } from "@/data/labuan-bajo-map-points";
import type { TourismMapPoint } from "@/data/map-point";

export const destinationMapPoints: Record<string, readonly TourismMapPoint[]> = {
  bali: baliMapPoints,
  "greater-jakarta": jakartaMapPoints,
  "labuan-bajo": labuanBajoMapPoints,
};
