import { TFalsy } from "../intarfaces/global.interface";

export default function cn(...classes: (string | TFalsy)[]) {
  return classes.filter(Boolean).join(' ');
}
