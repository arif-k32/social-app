import { NgModule } from "@angular/core";
import { UploadPhotoModelComponent } from "./components/upload-photo-model/upload-photo-model.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { PostCardComponent } from './components/post-card/post-card.component';
import { RouterModule } from "@angular/router";
import { NavigationComponent } from "./components/navigation/navigation.component";

@NgModule({
    declarations:[ UploadPhotoModelComponent, PostCardComponent, NavigationComponent ],
    imports:[ CommonModule,ReactiveFormsModule ,RouterModule],
    providers:[],
    exports:[UploadPhotoModelComponent,PostCardComponent, NavigationComponent]

})
export class SharedModule {}