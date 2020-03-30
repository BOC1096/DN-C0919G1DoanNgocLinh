export class HoiNhom {
  idHoiNhom: number;
  tenHoiNhom: string;
  ngayThanhLap: string;
  soThanhVien: number;
  soLanCanhCao: number;
  contructor(idHoiNhom, tenHoiNhom, ngayThanhLap, soThanhVien, soLanCanhCao) {
    this.idHoiNhom = idHoiNhom;
    this.tenHoiNhom = tenHoiNhom;
    this.ngayThanhLap = ngayThanhLap;
    this.soThanhVien = soThanhVien;
    this.soLanCanhCao = soLanCanhCao;
  }
}
