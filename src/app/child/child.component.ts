import {Component, DoCheck, Input, KeyValueDiffers, OnInit} from "@angular/core";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements OnInit, DoCheck {

  @Input() user: any;

  changelogList: Array<string> = [];

  differ: any;

  constructor(private differs: KeyValueDiffers) {
  }

  ngOnInit() {
    this.differ = this.differs.find(this.user).create();
  }


  ngDoCheck() {
    const userChanges = this.differ.diff(this.user);
    if (userChanges) {
      userChanges.forEachChangedItem((changeRecord: any) => {
        this.changelogList.push('item changed : ' + changeRecord.key + ' ' + JSON.stringify(changeRecord.currentValue))
      });
      userChanges.forEachAddedItem((changeRecord: any) => {
        this.changelogList.push('item added : ' + changeRecord.key + ' ' + JSON.stringify(changeRecord.currentValue))
      });
    }
  }
}
