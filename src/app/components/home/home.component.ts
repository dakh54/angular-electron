import { Component, OnInit } from '@angular/core';
import { remote } from 'electron';
const path = require('path');
const url = require('url');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goSetting() {
    const win = new remote.BrowserWindow({
      width: 800,
      height: 600,
      center: true,
      resizable: false,
      frame: true,
      transparent: false
    });

    win.loadURL( url.format({
      pathname: path.join(__dirname, './index.html'),
      protocol: 'file:',
      slashes: true,
      hash: 'setting'
    }));

  }

}
