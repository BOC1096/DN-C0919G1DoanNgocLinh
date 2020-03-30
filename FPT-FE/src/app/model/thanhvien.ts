import { User } from './user';

export class Thanhvien {
  idThanhVien: number;
  hoTen: string;
  gioiTinh: string;
  ngaySinh: Date;
  email: string;
  diaChi: string;
  ngheNghiep: string;
  tinhTrangHonNhan: boolean;
  anhDaiDien: FormData;
  soLanCanhcao: number;
  xu: number;
  luotThich: number;
  trangThaiDangNhap: number;
  khoa: boolean;
  mucDichThamGia: string;
  user: User;
  contructor() { }
}
