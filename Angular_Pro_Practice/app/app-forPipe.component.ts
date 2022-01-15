import { Component, OnInit } from "@angular/core";

interface File {
  name: string;
  size: any;
  type: string;
}
import { FileSizePipe } from "./pipesize.pipe";

@Component({
  selector: "app-root",
  template: `
    <div>
      With Pipe in html code
      <div *ngFor="let file of files">
        <p>{{ file.name }}</p>
        <p>{{ file.size | filesize: "Bytes in MB" }}</p>
      </div>
    </div>

    With Pipe as Provider in Compoent code
    <div>
      <div *ngFor="let file of mapped">
        <p>{{ file.name }}</p>
        <p>{{ file.size }}</p>
      </div>
    </div>
  `,
  providers: [FileSizePipe],
})
export class AppComponent implements OnInit {
  files: File[];
  mapped: File[];

  // Use pipe in Compoenent code instead of html
  constructor(private fileSizePipe: FileSizePipe) {}

  ngOnInit() {
    this.files = [
      { name: "logo.svg", size: 2120109, type: "image/svg" },
      { name: "banner.jpg", size: 18029, type: "image/jpg" },
      { name: "background.png", size: 1784562, type: "image/png" },
    ];

    this.mapped = this.files.map((file) => {
      return {
        name: file.name,
        type: file.type,
        size: this.fileSizePipe.transform(file.size, "mb"),
      };
    });
  }
}
