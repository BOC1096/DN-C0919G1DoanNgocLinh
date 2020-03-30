import { HoiNhom } from './hoinhom';
import { QlThanhVien } from './qlThanhVien';

export class Baidang {
  idBaiDang: number;
  tieuDe: string;
  anh: string;
  noiDung: string;
  xoa: boolean;
  thoiGianDang: Date;
  thanhVienDang: QlThanhVien;
  idHoiNhom: HoiNhom;
}
