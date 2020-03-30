export class NhomThanhVien {
  id: number;
  hoTenAdmin:string;
  hoTenThanhVien:string[];
  contructor(id,hoTenAdmin,hoTenThanhVien) {
    this.hoTenAdmin = hoTenAdmin;
    this.hoTenThanhVien=hoTenThanhVien;
    this.id=id;
  }
}
