import { Thanhvien } from './thanhvien';

export class Thu {
    id_thu: number;
    tieu_de:string;
    noi_dung:string;
    thoi_gian_gui:Date;
    xem:boolean;
    xoa:boolean;
    thanhVienGui:Thanhvien;
    thanhVienNhan:Thanhvien;
    constructor( id_thu:number, tieu_de:string, noi_dung:string,thoi_gian_gui:Date,xem:boolean,xoa:boolean, thanhVienGui:Thanhvien,thanhVienNhan:Thanhvien){}
    
}