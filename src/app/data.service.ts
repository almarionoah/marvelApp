import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   upVote: number;
   downVote: number;
   fileName: string;
   dataUrl: string;
   dataType: string;
   hasBeenViewed: boolean = false;
   isBeingEdited: boolean = false;
   comments = [];
  constructor(upVote: number, downVote: number, fileName: string ,dataUrl: string, dataType: string,hasBeenViewed: boolean,isBeingEdited: boolean,comments:any){
      this.upVote = upVote;
      this.downVote = downVote;
      this.fileName = fileName;
      this.dataUrl = dataUrl;
      this.dataType = dataType;
      this.hasBeenViewed = hasBeenViewed;
      this.isBeingEdited = isBeingEdited;
      this.comments = comments;
  }

  getUpVote(){
      return this.upVote;
  }
  getDownVote(){
      return this.downVote;
  }
  getFileName(){
      return this.fileName;
  }
  public getDataUrl(){
      return this.dataUrl;
  }
  getDataType(){
      return this.dataType;
  }
  getDataHasBeenViewed(){
    return this.hasBeenViewed;
  }
  getDataIsBeingEdited(){
    return this.isBeingEdited;
  }
  setComments(commentObj){
    return this.comments.push(commentObj);
  }
}
