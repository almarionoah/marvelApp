import { Component, OnInit, Output } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController, ToastController, NavParams } from '@ionic/angular';
import * as $ from 'node_modules/jquery';
import {DataValidationPage} from '../data-validation/data-validation.page';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
  userID: String = "";
  data:  DataService;
  route: ActivatedRoute;
  router: Router;
  popOverController: PopoverController;
  toastController: ToastController;
  dataValidationPage: DataValidationPage;

  constructor(route: ActivatedRoute, router: Router,popOverController: PopoverController,toastController: ToastController, navParameter: NavParams) {
    this.route = route;
    this.router = router;
    this.popOverController = popOverController;
    this.toastController = toastController;
    this.dataValidationPage = navParameter.data.parent; //NB navParameter to be used with object instances
   }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userID = params['userID'];
      this.data = JSON.parse(params['file']);
    });
  }

  async postComment(){
    //Comment Structure => [{createdDate: new Date(),message: "Something is aloof on column A line 300",userID: 'Jane Doe'}]
    if($("#observation").val() !== "" && $("#observation").val() !== "e.g. Error with column 2" && $("#pageNumber").val() !== "")
    {
      $("#btnPost").attr("disable", true);
      let timeStamp:Date = new Date();
      let messageText = $("#observation").val() + "\non page " + $("#pageNumber").val();
      this.data.comments.push({createdDate: timeStamp,message: messageText,userID: this.userID});
      this.data.downVote++;
      const toast = await this.toastController.create({
        message: 'Comment Posted Successfully',
        position: 'middle',
        duration: 1000
      });
      await toast.present();
      this.dataValidationPage.comments = this.data.comments;
      this.dataValidationPage.data.downVote = this.data.downVote;
      this.popOverController.dismiss();
    }
    else{
      $("#commentErrorDialog").html("Ensure all fields are filled in correctly");
      $("#comment_alert").attr("hidden", false);
    }
    
  }

  getData(){
    return this.data;
  }

  closeCommentAlertBox(){
    $("#comment_alert").attr("hidden", true);
  }

  closeObservation(){
    this.popOverController.dismiss();
  }

}
