import { baliMapPoints } from "@/data/bali-map-points";
import { jakartaMapPoints } from "@/data/jakarta-map-points";
import { labuanBajoMapPoints } from "@/data/labuan-bajo-map-points";
import {
  borobudurMapPoints,
  lakeTobaMapPoints,
  likupangMapPoints,
  mandalikaMapPoints,
} from "@/data/priority-destination-map-points";
import type { TourismMapPoint } from "@/data/map-point";
import {
  bangkaBelitungMapPoints,
  bromoMapPoints,
  morotaiMapPoints,
  rajaAmpatMapPoints,
  riauIslandsMapPoints,
  wakatobiMapPoints,
} from "@/data/regional-map-points";

export const destinationMapPoints: Record<string, readonly TourismMapPoint[]> = {
  bali: baliMapPoints,
  "greater-jakarta": jakartaMapPoints,
  "labuan-bajo": labuanBajoMapPoints,
  "danau-toba": lakeTobaMapPoints,
  "borobudur-yogyakarta-prambanan": borobudurMapPoints,
  "lombok-gili-tramena": mandalikaMapPoints,
  "manado-likupang": likupangMapPoints,
  "kepulauan-riau": riauIslandsMapPoints,
  "bromo-tengger-semeru": bromoMapPoints,
  "raja-ampat": rajaAmpatMapPoints,
  "bangka-belitung": bangkaBelitungMapPoints,
  wakatobi: wakatobiMapPoints,
  morotai: morotaiMapPoints,
};
