import {DataService} from 'src/app/data.service'
import { getLocaleDateTimeFormat } from '@angular/common';
export class Data {
    getSampleData(){
      //let dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-pubhtml-zyWBOguQK8y/pubhtml?gid=1472561233&amp;single=true&amp;widget=true&amp;headers=false";
        //let dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTsU77izWjBL6Xu29F5G_OByQe43AShOnQuFlceZ0fsVTAbMcqrQfyOWxY1Ru05B_34-zyWBOguQK8y/pub?gid=1472561233&single=true&output=csv";
        let dataUrl = '/assets/TopCoder_VendorNormalization_Sample.csv';
        return [new DataService(0,0,"TopCoder_VendorNormalization_Sample",dataUrl,"csv",false,false,[{createdDate: new Date(),message: "Something is aloof on column A line 300",userID: 'Jane Doe'}]),
         new DataService(12,5,"TopCoder_VendorNormalization_Sample",dataUrl,"csv",false,false,[{createdDate: new Date(),message: "Problem on column B line 2",userID: 'Paul Pogba'}]),
         new DataService(12,5,"TopCoder_VendorNormalization_Sample",dataUrl,"csv",false,false,[{createdDate: new Date(),message: "Something is aloof on column C line 50",userID: 'Recardo Doe'}]),
         new DataService(5,5,"TopCoder_VendorNormalization_Sample",dataUrl,"csv",false,false,[{createdDate: new Date(),message: "Something is aloof on column A line 300",userID: 'Jane Doe'},{createdDate: new Date(),message: "Problem on column B line 2",userID: 'Paul Pogba'}]),
         new DataService(7,2,"TopCoder_VendorNormalization_Sample",dataUrl,"csv",false,false,[{createdDate: new Date(),message: "Problem on column B line 2",userID: 'Paul Pogba'},{createdDate: new Date(),message: "Something is aloof on column C line 50",userID: 'Recardo Doe'},{createdDate: new Date(),message: "Something is aloof on column A line 300",userID: 'Jane Doe'}]),
         new DataService(34,7,"TopCoder_VendorNormalization_Sample",dataUrl,"csv",false,false,[{createdDate: new Date(),message: "Something is aloof on column A line 300",userID: 'Jane Doe'}]),
         new DataService(9,8,"TopCoder_VendorNormalization_Sample",dataUrl,"csv",false,false,[{createdDate: new Date(),message: "Something is aloof on column A line 300",userID: 'Jane Doe'},{createdDate: new Date(),message: "Problem on column B line 2",userID: 'Paul Pogba'}]),
         new DataService(3,2,"TopCoder_VendorNormalization_Sample",dataUrl,"csv",false,false,[{createdDate: new Date(),message: "Something is aloof on column A line 300",userID: 'Jane Doe'},{createdDate: new Date(),message: "Problem on column B line 2",userID: 'Paul Pogba'}]),
         new DataService(0,3,"TopCoder_VendorNormalization_Sample",dataUrl,"csv",false,false,[{createdDate: new Date(),message: "Something is aloof on column A line 300",userID: 'Jane Doe'},{createdDate: new Date(),message: "Problem on column B line 2",userID: 'Paul Pogba'}])
        ];
      }
}
