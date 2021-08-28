const initialState = {
    danhSachCuoc:[
        {ma:'bau',hinhAnh:'./GameBauCua/bau.png',diemCuoc:0},
        {ma:'nai',hinhAnh:'./GameBauCua/nai.png',diemCuoc:0},
        {ma:'ca',hinhAnh:'./GameBauCua/ca.png',diemCuoc:0},
        {ma:'cua',hinhAnh:'./GameBauCua/cua.png',diemCuoc:0},
        {ma:'tom',hinhAnh:'./GameBauCua/tom.png',diemCuoc:0},
        {ma:'ga',hinhAnh:'./GameBauCua/ga.png',diemCuoc:0},
    ],
    tongDiem : 3000,
    danhSachXucXac:[
        {ma:'tom',hinhAnh:'./GameBauCua/tom.png'},
        {ma:'ga',hinhAnh:'./GameBauCua/ga.png'},
        {ma:'cua',hinhAnh:'./GameBauCua/cua.png'},
    ]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case "DAT_CUOC_BAU_CUA":{
            let danhSachCuocUpdate = [...state.danhSachCuoc];
            let index = danhSachCuocUpdate.findIndex(item=>item.ma === action.item.ma);
            if(index !== -1){
               if(action.tangGiam){
                    if(state.tongDiem > 0){
                        danhSachCuocUpdate[index].diemCuoc += 100;
                        state.tongDiem -= 100;
                    }
               }else{
                   if(danhSachCuocUpdate[index].diemCuoc > 0){
                        danhSachCuocUpdate[index].diemCuoc -= 100;
                        state.tongDiem += 100;
                   }
               }
            //     if(action.tangGiam){
            //         danhSachCuocUpdate[index].diemCuoc += 100;
            //             state.tongDiem -= 100;
            //     }else{
            //         danhSachCuocUpdate[index].diemCuoc -= 100;
            //                     state.tongDiem += 100;
            //     }
            }
            state.danhSachCuoc = [...danhSachCuocUpdate]
            return {...state}
        }
        case "PLAY_GAME_BAU_CUA":{
            //tao mang moi
            let danhSachCuocUpdate = [...state.danhSachCuoc]
            let mangMoi = []
            //tao ra 3 so ngau nhien voi moi so ung index cua pt trong danhSachCuoc 
            for(let i =0;i<3;i++){
                let index = Math.floor(Math.random() * 6);
                let objMoi = danhSachCuocUpdate[index]
                mangMoi.push(objMoi)
            }
            //push vao mang moi roi gan lai vao danhSachXucXac
            //Duyet mang moi ,lay moi phan tu ra so sanh voi item dat cuoc , se co so lan dat cuoc va diem cuoc 
            for(let i =0 ; i <mangMoi.length;i++){
                let heSoThuong = 2;
                for(let j = 0 ; j<danhSachCuocUpdate.length;j++){
                    if(mangMoi[i].ma === danhSachCuocUpdate[j].ma){
                        state.tongDiem += danhSachCuocUpdate[j].diemCuoc * heSoThuong;
                    }
                }
            }
            danhSachCuocUpdate.forEach(item=>item.diemCuoc=0)
            state.danhSachXucXac =  [...mangMoi];
            state.danhSachCuoc = [...danhSachCuocUpdate]
            return { ...state }
        }
    default:
        return { ...state }
    }
}
