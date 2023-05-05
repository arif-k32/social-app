import { NgModule } from "@angular/core";
import { UploadPhotoModelComponent } from "./components/upload-photo-model/upload-photo-model.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[ UploadPhotoModelComponent ],
    imports:[ CommonModule,ReactiveFormsModule ],
    providers:[],
    exports:[UploadPhotoModelComponent]

})
export class SharedModule {}