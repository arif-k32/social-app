import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostsHttpService } from 'src/app/core/http/api/home/posts-http.service';
import { ProfileHttpService } from 'src/app/core/http/api/profile/profile-http.service';

@Component({
  selector: 'app-post-photo',
  templateUrl: './post-photo.component.html',
})

export class PostPhotoComponent {

  @Output() close:EventEmitter<null> = new EventEmitter<null>();
  @ViewChild('newPostImage') newPostView!:ElementRef;

  public newPostImage=false;
  public imageToPost!:File;
  public captionForm:FormGroup=new FormGroup({
                                                  caption: new FormControl('')
                                                })

  constructor(private readonly postsHttp:PostsHttpService, private readonly profileHttp:ProfileHttpService){}


  public toggleNewPostImage():void{
    this.newPostImage=!this.newPostImage;
  }


  public closeNewPost():void{
      this.close.emit();
  }


  public onDropFile(event:DragEvent):void{
    event.preventDefault();
    const fileList = event.dataTransfer?.files;
    if(fileList){
      const file = fileList.item(0);
      if(file)
        this.setCaption(file);
    }
  }

  public onFileDragOver(event:DragEvent):void{
    event.preventDefault();
    event.stopPropagation();
    (event.target as HTMLElement).classList.add('bg-black/50');
  }

  public onFileDragLeave(event:DragEvent):void{
    event.preventDefault();
    event.stopPropagation();
    (event.target as HTMLElement).classList.remove('bg-black/50');
  }

  public onSelectFile(event:Event):void{
    const fileList =(event.target as HTMLInputElement).files;
    const file = fileList?.item(0);
    if(file)
      this.setCaption(file)

  }

  public setCaption(file:File):void{
    this.toggleNewPostImage();
    this.imageToPost=file;
    if(this.imageToPost.type.match(/image\/*/) == null ){
      console.log('selected file is not an image');
      return;
    }
    const fileReader:FileReader = new FileReader();
    fileReader.onload = (event:any)=>{
                                      this.newPostView.nativeElement.src=event.target.result;
                                  }
    fileReader.readAsDataURL(this.imageToPost)
  }

  public sharePost():void{
    const fileToUpload:FormData= new FormData();
    const caption = this.captionForm.controls['caption'].value;
    // fileToUpload.append('caption',caption)
    fileToUpload.append('file',this.imageToPost,this.imageToPost.name);
    // this.postsHttp.postPhoto(fileToUpload).subscribe((response:any)=>{console.log(response);this.close.emit();})
    this.profileHttp.setProfilePicture(fileToUpload).subscribe((response)=>{console.log(response)})
    
  }



}
