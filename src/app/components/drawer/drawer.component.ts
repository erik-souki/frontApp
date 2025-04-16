import { Component, ViewChild } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { Ripple } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClass } from 'primeng/styleclass';
import { Drawer } from 'primeng/drawer';

@Component({
    selector: 'DrawerComponent',
    styleUrls: ['./drawer.component.css'],
    templateUrl: './drawer.component.html',
    standalone: true,
    imports: [DrawerModule, ButtonModule, Ripple, AvatarModule, StyleClass]
})
export class DrawerComponent {
    @ViewChild('drawerRef') drawerRef!: Drawer;

    closeCallback(e: MouseEvent): void {
        this.drawerRef.close(e);
    }

    visible: boolean = false;
}
